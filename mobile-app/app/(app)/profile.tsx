import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Settings, Bell, Shield, LogOut } from 'lucide-react-native';
import { useAuthStore } from '@/store/auth';

export default function ProfileScreen() {
    const logout = useAuthStore((state) => state.logout);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Profile</Text>
            </View>

            <ScrollView style={styles.content}>
                <View style={styles.profileSection}>
                    <View style={styles.avatar}>
                        <Text style={styles.avatarText}>JD</Text>
                    </View>
                    <Text style={styles.name}>John Doe</Text>
                    <Text style={styles.email}>john.doe@example.com</Text>
                </View>

                <View style={styles.menuSection}>
                    <TouchableOpacity style={styles.menuItem}>
                        <Settings size={24} color="#666" />
                        <Text style={styles.menuText}>Account Settings</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuItem}>
                        <Bell size={24} color="#666" />
                        <Text style={styles.menuText}>Notifications</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuItem}>
                        <Shield size={24} color="#666" />
                        <Text style={styles.menuText}>Privacy & Security</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    style={styles.logoutButton}
                    onPress={logout}
                >
                    <LogOut size={24} color="#FF3B30" />
                    <Text style={styles.logoutText}>Log Out</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    header: {
        padding: 20,
        paddingTop: 60,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#E5E5E5',
    },
    title: {
        fontSize: 24,
        fontFamily: 'Inter-Bold',
        color: '#1A1A1A',
    },
    content: {
        flex: 1,
    },
    profileSection: {
        backgroundColor: '#fff',
        padding: 20,
        alignItems: 'center',
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#007AFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },
    avatarText: {
        color: '#fff',
        fontSize: 24,
        fontFamily: 'Inter-SemiBold',
    },
    name: {
        fontSize: 20,
        fontFamily: 'Inter-SemiBold',
        color: '#1A1A1A',
        marginBottom: 4,
    },
    email: {
        fontSize: 16,
        fontFamily: 'Inter-Regular',
        color: '#666',
    },
    menuSection: {
        backgroundColor: '#fff',
        marginTop: 20,
        paddingVertical: 8,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E5E5',
    },
    menuText: {
        marginLeft: 16,
        fontSize: 16,
        fontFamily: 'Inter-Regular',
        color: '#1A1A1A',
    },
    logoutButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop: 20,
        padding: 16,
    },
    logoutText: {
        marginLeft: 16,
        fontSize: 16,
        fontFamily: 'Inter-SemiBold',
        color: '#FF3B30',
    },
});