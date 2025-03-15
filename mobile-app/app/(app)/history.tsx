import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function HistoryScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Medical History</Text>
            </View>

            <ScrollView style={styles.content}>
                <View style={styles.historyCard}>
                    <Text style={styles.date}>March 15, 2024</Text>
                    <Text style={styles.condition}>Migraine</Text>
                    <Text style={styles.description}>Severe headache with sensitivity to light</Text>
                    <Text style={styles.doctor}>Treated by: Dr. Sarah Johnson</Text>
                </View>

                <View style={styles.historyCard}>
                    <Text style={styles.date}>March 10, 2024</Text>
                    <Text style={styles.condition}>Common Cold</Text>
                    <Text style={styles.description}>Runny nose and sore throat</Text>
                    <Text style={styles.doctor}>Treated by: Dr. Michael Chen</Text>
                </View>
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
    historyCard: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 12,
        marginBottom: 16,
    },
    date: {
        fontSize: 14,
        fontFamily: 'Inter-Medium',
        color: '#666',
        marginBottom: 8,
    },
    condition: {
        fontSize: 18,
        fontFamily: 'Inter-SemiBold',
        color: '#1A1A1A',
        marginBottom: 4,
    },
    description: {
        fontSize: 16,
        fontFamily: 'Inter-Regular',
        color: '#666',
        marginBottom: 8,
    },
    doctor: {
        fontSize: 14,
        fontFamily: 'Inter-Medium',
        color: '#007AFF',
    },
});