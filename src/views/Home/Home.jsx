import {React, useEffect, useState } from "react";
import { View, StyleSheet } from "react-native"
import Header from "../../components/Header/Header";
import fecthApi from "../../utlis/fecth";
import TodayImg from "../../components/TodayImg/TodayImg";
import { format, sub } from "date-fns";
import LastFiveDayImageComp from "../../components/LastFiveDaysIamge/LastFiveDaysImage";

const Home = ()=> {
    const [todayImg, setTodayImg] = useState();
    const [lastFiveDayImage, setLastFiveDayImage] = useState([])

    useEffect(()=>{
        const loadTodayImg = async () =>{
            try {
                const todayImgResponse = await fecthApi()
                setTodayImg(todayImgResponse)
            } catch (error) {
                console.error(error)
                setTodayImg(undefined)
            }
        }

        const loadLastFiveDayImages = async ()=>{
            try {
                const date = new Date();
                const todaysDate = format(date, 'yyyy-MM-dd');
                const fiveDaysAgo = format(sub(date, {days: 15}), 'yyyy-MM-dd')
                
                const lastFiveDaysResponse = await fecthApi(`&start_date=${fiveDaysAgo}&end_date=${todaysDate}`)

                setLastFiveDayImage(lastFiveDaysResponse);
            } catch (error) {
                console.error(error)
            }
        }

        loadTodayImg().catch(null)
        loadLastFiveDayImages().catch(null)
    }, [])

    return (
        <View style={styles.container} >
            <TodayImg todayImg={todayImg} />
            <LastFiveDayImageComp lastFiveDayImage={lastFiveDayImage}  />
            <Header/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: '#34495E'
    }
})

export default Home;