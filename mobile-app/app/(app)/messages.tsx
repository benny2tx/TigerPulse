import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function MessagesScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Messages</Text>
            </View>

            <ScrollView style={styles.content}>
                <TouchableOpacity style={styles.chatCard}>
                    <View style={styles.avatar}>
                        <Text style={styles.avatarText}>SJ</Text>
                    </View>
                    <View style={styles.chatInfo}>
                        <Text style={styles.name}>Dr. Sarah Johnson</Text>
                        <Text style={styles.lastMessage}>Thank you for the update. Please...</Text>
                        <Text style={styles.time}>2h ago</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.chatCard}>
                    <View style={styles.avatar}>
                        <Text style={styles.avatarText}>MC</Text>
                    </View>
                    <View style={styles.chatInfo}>
                        <Text style={styles.name}>Dr. Michael Chen</Text>
                        <Text style={styles.lastMessage}>Your test results are ready...</Text>
                        <Text style={styles.time}>1d ago</Text>
                    </View>
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
        padding: 20,
    },
    chatCard: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 12,
        marginBottom: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#007AFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    avatarText: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Inter-SemiBold',
    },
    chatInfo: {
        flex: 1,
    },
    name: {
        fontSize: 16,
        fontFamily: 'Inter-SemiBold',
        color: '#1A1A1A',
        marginBottom: 4,
    },
    lastMessage: {
        fontSize: 14,
        fontFamily: 'Inter-Regular',
        color: '#666',
        marginBottom: 4,
    },
    time: {
        fontSize: 12,
        fontFamily: 'Inter-Regular',
        color: '#999',
    },
});