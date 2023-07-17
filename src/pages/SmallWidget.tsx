import styles from '@/styles/Widget.module.css'
import { Weather, WeatherType } from '@/types/Weather'

export default function SmallWidget({weather}: {weather: Weather}): JSX.Element {
  return <main className={`${styles.widget} ${styles.widget__small} ${skyBackgroundClass(weather.type)}`}>
    <section>
      <div className={styles.widget__city_name}>{weather.city}</div>
      <div className={styles.widget__temperature}>{formatTemperature(weather.temperature.current)}</div>
    </section>
    <section>
      <Icon weatherType={weather.type} />
      <Description description={weather.description} />
      <section className={styles.widget__high_low}>
        <span>H:{formatTemperature(weather.temperature.high)}</span>
        <span>L:{formatTemperature(weather.temperature.low)}</span>
      </section>
    </section>
  </main>
}

function skyBackgroundClass(weatherType: WeatherType): string {
  if (['sunny', 'partly_cloudy'].includes(weatherType)) return styles.clear_sky

  return styles.cloudy_sky
}

function formatTemperature(temperature: number): string {
  return `${temperature}°`
}

function Icon({weatherType}: {weatherType: WeatherType}): JSX.Element {
  const icon = getWeatherIcon(weatherType)
  return <>{icon}</>
}

function Description({description}: {description?: string}): JSX.Element | undefined {
  if (!description) return undefined;

  return <span className={styles.widget__description}>{description}</span>
}

function getWeatherIcon(weatherType: WeatherType): string {
  switch(weatherType) {
    case('sunny'): return '☀️'
    case('partly_cloudy'): return '🌤️'
    case('cloudy'): return '☁️'
    case('rain'): return '🌧️'
    case('snow'): return '🌨️'
    default: return '☀️'
  }
}

