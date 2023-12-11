import React from "react";
import { ScrollView } from "react-native";
import { Image, StyleSheet, Text, View } from "react-native"
import Header from "../../components/Header/Header";

const Detail = ({ route }) => {
    if (!route ) {
        // Puedes manejar el caso en que navigation o alguna propiedad específica no exista
        return (
            <View>
                <Text>No se pudo cargar la imagen de hoy.</Text>
            </View>
        );
    }
    const { date, title, url, explanation } = route.params;
    return (
        <View style={styles.container} >
            <View style={styles.boxImage} >
                <Image source={{uri: url}}  style={styles.image}  />
            </View>
            <ScrollView style={styles.boxText} >
                <Text style={styles.title} > {JSON.stringify(title)} </Text>
                <Text style={styles.date} > {date} </Text>
                <Text style={styles.explanation} > {explanation} </Text>
            </ScrollView>
            <Header/>
        </View>
    )
}

const styles= StyleSheet.create({
    container: {
        backgroundColor: '#34495E',
        flex: 1,
        alignItems: 'center',
        paddingBottom: 20,
        paddingHorizontal: 10,
    },
    boxImage: {
        overflow: "hidden",
        borderRadius: 15,
        borderWidth: 2,
        borderColor: "#2C3E50",
        marginHorizontal: 20,
        marginVertical: 5,
    },
    image: {
        width: 350,
        height: 300,
    },
    boxText: {
        alignContent: 'center',
        width: "90%",
        height: 'auto',
        paddingVertical: 10,
        paddingHorizontal: 5,
        marginBottom: 20
    },
    title:{
        fontSize: 18,
        color: "#EAECEE",
        paddingBottom: 4,
        fontWeight: "bold"
    },
    date: {
        color: "#EAECEE",
        paddingVertical: 3,
    },
    explanation: {
        color: "#EAECEE",
        backgroundColor: "#2C3E50",
        borderRadius: 15,
        paddingVertical: 15,
        paddingHorizontal: 10,
        marginBottom: 20,
        fontSize: 16,
    }
})

export default Detail;