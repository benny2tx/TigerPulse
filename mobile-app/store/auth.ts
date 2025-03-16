import { create } from 'zustand';
import * as WebBrowser from 'expo-web-browser';
import * as AuthSession from 'expo-auth-session';
import { makeRedirectUri } from 'expo-auth-session';
import * as SecureStore from 'expo-secure-store';
import { generateNonce } from '@/utils/crypto';
import {Platform} from "react-native";

WebBrowser.maybeCompleteAuthSession();

interface User {
    email: string;
    name: string;
    picture: string;
    sub: string;
}

interface AuthState {
    isAuthenticated: boolean;
    isLoading: boolean;
    user: User | null;
    accessToken: string | null;
    error: string | null;
    login: () => Promise<void>;
    logout: () => Promise<void>;
}

const auth0ClientId = process.env.EXPO_PUBLIC_AUTH0_CLIENT_ID;
const auth0Domain = process.env.EXPO_PUBLIC_AUTH0_DOMAIN;

// Auth0 configuration
const config = {
    clientId: auth0ClientId,
    authorizationEndpoint: `https://${auth0Domain}/authorize`,
    tokenEndpoint: `https://${auth0Domain}/oauth/token`,
    userInfoEndpoint: `https://${auth0Domain}/userinfo`,
    revocationEndpoint: `https://${auth0Domain}/oauth/revoke`,
};

const useProxy = true;
const redirectUri = makeRedirectUri({
    scheme: 'your-app-scheme',
    path: 'auth',
    useProxy,
});

export const useAuthStore = create<AuthState>((set) => ({
    isAuthenticated: false,
    isLoading: false,
    user: null,
    accessToken: null,
    error: null,
    login: async () => {
        try {
            set({ isLoading: true, error: null });

            const request = await AuthSession.loadAsync({
                responseType: AuthSession.ResponseType.Token,
                clientId: config.clientId,
                redirectUri,
                scopes: ['openid', 'profile', 'email'],
                extraParams: {
                    nonce: generateNonce(),
                },
            }, config);

            const result = await request.promptAsync({ useProxy });
            console.log('Hello DD, result:', result)
            if (result.type === 'success') {
                const { access_token } = result.params;

                // Fetch user info
                const userInfoResponse = await fetch(config.userInfoEndpoint, {
                    headers: {
                        Authorization: `Bearer ${access_token}`,
                    },
                });

                const user = await userInfoResponse.json();

                // Store token securely
                if (Platform.OS === 'web') {
                    //todo: this is not secure
                    localStorage.setItem('auth_token', access_token);
                } else {
                    await SecureStore.setItemAsync('auth_token', access_token);
                }

                set({
                    isAuthenticated: true,
                    accessToken: access_token,
                    user,
                    isLoading: false,
                });
            } else {
                set({ error: 'Authentication failed', isLoading: false });
            }
        } catch (error) {
            set({ error: error.message, isLoading: false });
        }
    },
    logout: async () => {
        try {
            set({ isLoading: true });

            // Remove token from secure storage
            await SecureStore.deleteItemAsync('auth_token');

            set({
                isAuthenticated: false,
                user: null,
                accessToken: null,
                isLoading: false,
            });
        } catch (error) {
            set({ error: error.message, isLoading: false });
        }
    },
}));