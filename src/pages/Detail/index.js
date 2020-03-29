import React from 'react'
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native'
import styles from './styles';
import logoImg from '../../assets/logo.png';
import { Feather } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import * as MailComposer from 'expo-mail-composer'


const Detail = () => {
    const navigation = useNavigation()
    const route = useRoute()
    const incident = route.params.incident

    const message = `Ola ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso "${incident.title}" com o valor de ${Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRl' }).format(incident.value)}`;

    function sendMail() {
        MailComposer.composeAsync({
            subject: 'Heroi do caso 1',
            recipients: [incident.email],
            body: message
        })
    }

    function sendWhatsApp() {
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp};text=${message}`)
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Feather name={'arrow-left'} size={28} color={'#E02041'} />
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                <View style={styles.incidents}>
                    <Text style={[styles.incidentsProperty, { marginTop: 0 }]}>Ong:</Text>
                    <Text style={styles.incidentsValue}>{incident.name} de {incident.city}/{incident.uf}</Text>

                    <Text style={styles.incidentsProperty}>Caso:</Text>
                    <Text style={styles.incidentsValue}>{incident.title}</Text>

                    <Text style={styles.incidentsProperty}>valor:</Text>
                    <Text style={styles.incidentsValue}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRl' }).format(incident.value)}</Text>
                </View>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>
                    Salve o dia
                </Text>
                <Text style={styles.heroTitle}>
                    Seja o heroi desse caso.
                </Text>

                <Text style={styles.heroDescription}>
                    Entre em contato
                </Text>
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsApp}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Detail;
