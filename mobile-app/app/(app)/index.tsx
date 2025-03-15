import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Plus } from 'lucide-react-native';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>TeleMed</Text>
                <TouchableOpacity style={styles.addButton}>
                    <Plus size={24} color="#fff" />
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.content}>
                <Text style={styles.sectionTitle}>Your Upcoming Appointments</Text>
                <View style={styles.appointmentCard}>
                    <Text style={styles.doctorName}>Dr. Sarah Johnson</Text>
                    <Text style={styles.appointmentTime}>Today, 2:30 PM</Text>
                    <Text style={styles.appointmentType}>Video Consultation</Text>
                </View>

                <Text style={styles.sectionTitle}>Recent Symptoms</Text>
                <View style={styles.symptomCard}>
                    <Text style={styles.symptomDate}>Yesterday</Text>
                    <Text style={styles.symptomDescription}>Headache and mild fever</Text>
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#E5E5E5',
    },
    title: {
        fontSize: 24,
        fontFamily: 'Inter-Bold',
        color: '#1A1A1A',
    },
    addButton: {
        backgroundColor: '#007AFF',
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        flex: 1,
        padding: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontFamily: 'Inter-SemiBold',
        color: '#1A1A1A',
        marginBottom: 12,
        marginTop: 20,
    },
    appointmentCard: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 12,
        marginBottom: 16,
    },
    doctorName: {
        fontSize: 16,
        fontFamily: 'Inter-SemiBold',
        color: '#1A1A1A',
        marginBottom: 4,
    },
    appointmentTime: {
        fontSize: 14,
        fontFamily: 'Inter-Regular',
        color: '#666',
        marginBottom: 4,
    },
    appointmentType: {
        fontSize: 14,
        fontFamily: 'Inter-Medium',
        color: '#007AFF',
    },
    symptomCard: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 12,
        marginBottom: 16,
    },
    symptomDate: {
        fontSize: 14,
        fontFamily: 'Inter-Medium',
        color: '#666',
        marginBottom: 4,
    },
    symptomDescription: {
        fontSize: 16,
        fontFamily: 'Inter-Regular',
        color: '#1A1A1A',
    },
});