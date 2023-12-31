import React from "react"
import { Image } from "react-native";
import { Button, StyleSheet } from "react-native";
import { Text, View } from "react-native"
import {useNavigation} from '@react-navigation/native'


const PostImage = ({title, date, url, explanation }) => {
    if (!title || !date || !url) {
        return (
            <View>
                <Text>No se pudo cargar laaaa.</Text>
            </View>
        );
    }

    const {navigate} = useNavigation();

    const handleViewPress =()=>{
        navigate('Detail', {title, date, url, explanation})
    }
    return (
        <View style={styles.container}>
            <View style={styles.contain} >
                <View style={styles.containText} >
                    <Text style={styles.title} >{title}</Text>
                    <Text style={styles.date} >{date}</Text>
                </View>
                <View style={styles.containImg} >
                    <Image source={{uri: url}} style={styles.image}/>
                </View>
            </View>
            <View style={styles.btn} >
                <Button title="View" onPress={handleViewPress}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2C3E50',
        borderRadius: 10,
        paddingVertical: 4, 
        paddingHorizontal: 8,
        marginVertical: 4,
    },
    contain: {
        flexDirection: "row",
        gap: 4
    },
    containText: {
        alignItems: "flex-start",
        width: '80%'
    },
    title: {
        fontSize: 16,
        color: '#EAECEE',
        fontWeight: "500",
        marginVertical: 4
    },
    date:{
        color: "#EAECEE",
        fontSize: 12,
        marginVertical: 4
    },
    containImg:{
        alignItems: "flex-end",
        width: '20%',
        overflow: "hidden",
        marginVertical: 2
    },
    image:{
        width: '100%',
        height: 50,
        borderRadius: 10
    },
    btn: {
        overflow: "hidden",
        borderRadius: 30
        
    }
})
export default PostImage