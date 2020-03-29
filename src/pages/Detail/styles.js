import React from 'react';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'

export default StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:24,
        paddingTop: Constants.statusBarHeight + 20,
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    incident:{
        marginTop:32
    },
    incidents:{
        padding:24,
        borderRadius:8,
        backgroundColor:'#fff',
        marginBottom:16
    },
    incidentsProperty:{
        fontSize:14,
        color:"#41414D",
        fontWeight:'bold',
        marginTop:24
    },
    incidentsValue:{
        marginTop:8,
        fontSize:15,
        color:"#737380"
    },

    contactBox:{
        padding:24,
        borderRadius:8,
        backgroundColor:'#fff',
        marginBottom:16
    },
    heroTitle:{
        fontWeight:'bold',
        fontSize:20,
        color:'#13131a',
        lineHeight:30
    },
    heroDescription:{
        fontSize:15,
        color:"#737380",
        marginTop:16
    },
    actions:{
        marginTop:16,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    action:{
        backgroundColor:'#e02041',
        borderRadius:8,
        height:50,
        width:'48%',
        justifyContent:'center',
        alignItems:'center'
    },
    actionText:{
        fontSize:15,
        color:'#fff',
        fontWeight:'bold'
    }
})