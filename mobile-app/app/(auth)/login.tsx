import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';
import { LogIn } from 'lucide-react-native';
import { useAuthStore } from '@/store/auth';

export default function LoginScreen() {
    const login = useAuthStore((state) => state.login);

    return (
        <View style={styles.container}>
            <View style={styles.overlay}>
                <View style={styles.content}>
                    <View style={styles.header}>
                        <LogIn size={48} color="#007AFF" />
                        <Text style={styles.title}>Welcome to TigerPulse</Text>
                    </View>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={login}
                    >
                        <Text style={styles.buttonText}>Continue with Auth0</Text>
                    </TouchableOpacity>

                    <View style={styles.footer}>
                        <Text style={styles.footerText}>Don't have an account? </Text>
                        <Link href="/register" style={styles.link}>
                            Sign up
                        </Link>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        justifyContent: 'center',
    },
    content: {
        padding: 20,
    },
    header: {
        alignItems: 'center',
        marginBottom: 48,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        padding: 32,
        borderRadius: 16,
    },
    title: {
        fontSize: 32,
        fontFamily: 'Inter-Bold',
        marginTop: 24,
        marginBottom: 8,
        color: '#1A1A1A',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 18,
        fontFamily: 'Inter-Regular',
        color: '#666',
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#007AFF',
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
        marginBottom: 16,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Inter-SemiBold',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 24,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        padding: 16,
        borderRadius: 12,
    },
    footerText: {
        fontFamily: 'Inter-Regular',
        color: '#666',
    },
    link: {
        color: '#007AFF',
        fontFamily: 'Inter-SemiBold',
    },
});
