import React from "react";
import { Button, Image, StyleSheet,Text, View } from "react-native";
import {useNavigation} from '@react-navigation/native'

const TodayImg = ({ todayImg }) => {
    if (!todayImg || !todayImg.date || !todayImg.title || !todayImg.explanation || !todayImg.url) {
        // Puedes manejar el caso en que todayImg o alguna propiedad específica no exista
        return (
            <View>
                <Text>No se pudo cargar la imagen de hoy.</Text>
            </View>
        );
    }
    const { date, title, url, explanation } = todayImg;

    const {navigate} = useNavigation();

    const handleViewPress =()=>{
        navigate('Detail', {title, date, url, explanation})
    }
    return (
        <View style={styles.container} >
            <View style={styles.imageContainer}>
                <Image source={{ uri: url }} style={styles.image} />
            </View>
            <Text style={styles.title} >{title}</Text>
            <Text style={styles.date} >{date}</Text>
            <View style={styles.btn} >
                <Button title="View" onPress={handleViewPress} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#2C3E50",
        marginVertical: 16,
        borderRadius: 30,
        padding: 10,
        marginHorizontal: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
    },
    imageContainer: {
        borderRadius: 30,
        overflow: "hidden",
    },
    image: {
        width: '100%',
        // borderRadius: 32,
        height: 200,
    },
    title: {
        fontSize: 20,
        color: "#fff",
        marginVertical: 12,
        fontWeight: "bold",
    }, 
    date: {
        fontSize: 14,
        color: "#fff",
        marginVertical: 12,
        fontWeight: "bold",
    },
    btn: {
        borderRadius: 40,
        overflow: "hidden",
    }
})

export default TodayImg;