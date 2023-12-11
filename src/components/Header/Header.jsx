import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.textConatiner} >
                <Text style={styles.title} >Explore</Text>
            </View>
            <View style={styles.iconContainer} >
                <Image style={styles.image} source={require('../../../assets/iconNasa.png')} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#2C3E50",
        borderRadius: 15,
        marginTop: 30,
        paddingHorizontal: 10,
    },
    textConatiner:{
        flex: 1,
        alignItems: "flex-start",
    },
    title: {
        fontSize: 20,
        color: "#fff",
    },
    iconContainer:{
        flex: 1,
        alignItems: "flex-end",
    },
    image: {
        width: 80,
        height: 80,
    }
})

export default Header;