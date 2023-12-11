import React from "react";
import { View, Text, Image, StyleSheet, TextInput } from "react-native";

const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.textConatiner} >
                <Text style={styles.title} >Explore</Text>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search..."
                    placeholderTextColor="#EAECEE"
                />
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
        marginBottom: 5,
        paddingHorizontal: 10,
    },
    textConatiner: {
        flex: 1,
        alignItems: "flex-start",
        flexDirection: 'row',
        gap: 10
    },
    title: {
        fontSize: 20,
        color: "#EAECEE",
    },
    searchInput:{
        fontSize: 16,
        backgroundColor: "#34495E",
        width: '80%',
        height: 30,
        borderRadius: 10,
        alignSelf: 'center',
        paddingHorizontal: 5,
        color: '#EAECEE'
    },
    iconContainer: {
        flex: 1,
        alignItems: "flex-end",
    },
    image: {
        width: 60,
        height: 60,
    }
})

export default Header;