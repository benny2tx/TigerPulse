import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { UserPlus } from 'lucide-react-native';

export default function RegisterScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <UserPlus size={48} color="#007AFF" />
                <Text style={styles.title}>Create Account</Text>
                <Text style={styles.subtitle}>Join TeleMed today</Text>
            </View>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Sign up with Auth0</Text>
            </TouchableOpacity>

            <View style={styles.footer}>
                <Text style={styles.footerText}>Already have an account? </Text>
                <Link href="/login" style={styles.link}>
                    Sign in
                </Link>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    header: {
        alignItems: 'center',
        marginBottom: 48,
    },
    title: {
        fontSize: 32,
        fontFamily: 'Inter-Bold',
        marginTop: 24,
        marginBottom: 8,
        color: '#1A1A1A',
    },
    subtitle: {
        fontSize: 16,
        fontFamily: 'Inter-Regular',
        color: '#666',
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