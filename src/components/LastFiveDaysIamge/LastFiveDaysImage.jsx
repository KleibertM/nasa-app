
import React from "react"
import { Text, View, StyleSheet, ScrollView } from "react-native"
import PostImage from "../PostImage/PostIamge";

const LastFiveDayImageComp = ({ lastFiveDayImage }) => {
    // console.log(lastFiveDayImage);

    console.log(lastFiveDayImage);
    return (
        <View style={styles.container}>
            <Text style={styles.title_container}>Last 5 Days</Text>
            <ScrollView style={styles.containerDays} >
                {lastFiveDayImage?.map(post => (
                    <PostImage key={`post-image-${post.title}`} {...post}/>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 4,
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
        overflow: "hidden"
        
    },
    title_container: {
        fontSize: 20,
        color: "#fff"
    },
    containerDays: {
        
    },
})

export default LastFiveDayImageComp;