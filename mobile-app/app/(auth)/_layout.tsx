import { Stack } from 'expo-router';
import { useAuthStore } from '@/store/auth';
import { Redirect } from 'expo-router';

export default function AuthLayout() {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

    // If authenticated, redirect to the app
    if (isAuthenticated) {
        return <Redirect href="/" />;
    }

    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="login" />
            <Stack.Screen name="register" />
        </Stack>
    );
}