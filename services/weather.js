export const getCurrentWeather = async () => {
    const city = 'Palma'
    const lang = 'ES'

    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?q=${city}&lang=${lang}&key=${process.env.API_KEY_WEATHER_API}`)
        return response.json()
    } catch (error) {
        console.error(error)
    }
}
