import { Tabs } from 'expo-router';
import { Chrome as Home, History, MessageSquare, User } from 'lucide-react-native';
import { useAuthStore } from '../../store/auth';
import { Redirect } from 'expo-router';

export default function AppLayout() {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

    // If not authenticated, redirect to login
    if (!isAuthenticated) {
        return <Redirect href="/login" />;
    }

    return (
        <Tabs
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: '#fff',
                    borderTopColor: '#E5E5E5',
                },
                tabBarActiveTintColor: '#007AFF',
                tabBarInactiveTintColor: '#666',
                headerShown: false,
            }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color, size }) => <Home size={size} color={color} />,
                }}
            />
            <Tabs.Screen
                name="history"
                options={{
                    title: 'History',
                    tabBarIcon: ({ color, size }) => <History size={size} color={color} />,
                }}
            />
            <Tabs.Screen
                name="messages"
                options={{
                    title: 'Messages',
                    tabBarIcon: ({ color, size }) => <MessageSquare size={size} color={color} />,
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color, size }) => <User size={size} color={color} />,
                }}
            />
        </Tabs>
    );
}