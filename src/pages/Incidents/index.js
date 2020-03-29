import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'
import logoImg from '../../assets/logo.png';
import styles from './styles';
import { useNavigation } from '@react-navigation/native'
import api from '../../services/api';

const Incidents = () => {

    const navigation = useNavigation()
    const [incidents, setIncidents] = useState([])
    const [total, setTotal] = useState(0)
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)

    function navigateToDetail(incident) {
        navigation.navigate('Detail',{incident});
    }

    async function loadIncidents() {
       
        if(loading){
            return
        }

        if(total > 0 && incidents.length === total){
            return
        }

        setLoading(true)
        const response = await api.get('incidents',{
            params:{page}
        })
        setIncidents([ ...incidents, ...response.data ])
        setTotal(response.headers['x-total_count'] )
        setPage(page + 1)
        setLoading(false)
    }

    useEffect(() => {
        loadIncidents();
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>{total} casos</Text>
                </Text>
            </View>
            <Text style={styles.title}>
                Bem-vindo!
            </Text>
            <Text style={styles.description}>
                Escolha um dos casos abaixo e salve o dia.
            </Text>

            <FlatList
                style={styles.incidentsList}
                data={incidents}
                keyExtractor={incident => String(incident.id)}
                onEndReached={loadIncidents}
                onEndReachedThreshold={0.1}
                renderItem={({ item }) => (
                    <View style={styles.incidents}>
                        <Text style={styles.incidentsProperty}>Ong:</Text>
                        <Text style={styles.incidentsValue}>{item.name}</Text>

                        <Text style={styles.incidentsProperty}>Caso:</Text>
                        <Text style={styles.incidentsValue}>{item.title}</Text>

                        <Text style={styles.incidentsProperty}>valor:</Text>
                        <Text style={styles.incidentsValue}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRl' }).format(item.value)}</Text>
                        <TouchableOpacity style={styles.detailsButton} onPress={()=>{
                            navigateToDetail(item)
                        }}>
                            <Text style={styles.detailButtonText}>Ver mais detalhes</Text>
                            <Feather name="arrow-right" size={16} color={"#302041"} />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    )
}

export default Incidents;
