export type WeatherType = 'sunny' | 'partly_cloudy' | 'cloudy' | 'rain' | 'snow'

export type Weather = {
    city: string
    temperature: Temperature
    type: WeatherType
    description?: string
}

type Temperature = {
    current: number
    high: number
    low: number
} 