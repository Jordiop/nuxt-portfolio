export const getCurrentWeather = async () => {
    const city = 'Palma'
    const lang = 'ES'
    const config = useRuntimeConfig();

    try {
        const path = `https://api.weatherapi.com/v1/current.json?q=${city}&lang=${lang}&key=${config.public.weatherApiKey}`
        const response = await fetch(path)
        return response.json()
    } catch (error) {
        console.error(error)
    }
}
