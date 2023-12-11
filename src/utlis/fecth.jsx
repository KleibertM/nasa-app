const URL = 'https://api.nasa.gov/planetary/apod'
const API_KEY ='dP6G9v3Xjvq1jUHfALp3SwtiqwoAdcc873EYXTcm'

export default async (urlParams) =>{
    try {
        const response = await fetch(`${URL}?api_key=${API_KEY}${urlParams? urlParams : ''}`)
        const data = await response.json()

        return Promise.resolve(data)
    } catch (error) {
        return Promise.reject(error)
    }
}