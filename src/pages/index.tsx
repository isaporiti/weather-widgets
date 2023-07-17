import { useState } from 'react';
import { Inter } from 'next/font/google'
import SizeSelector from './SizeSelector'
import { WidgetSize } from '@/types/WidgetSize';
import SmallWidget from './SmallWidget';
import MediumWidget from './MediumWidget';
import LargeWidget from './LargeWidget';
import styles from '@/styles/Home.module.css'
import { Weather } from '@/types/Weather';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [widgetSize, setWidgetSize] = useState<WidgetSize>('S');
  const weather: Weather = {
    city: 'Barcelona',
    type: 'rain',
    temperature: {
      current: 28,
      high: 31,
      low: 24
    }
  }

  return (
    <main className={`${styles.main} ${inter.className}`}>
      <Widget size={widgetSize} weather={weather} />
      <SizeSelector widgetSize={widgetSize} setWidgetSize={setWidgetSize} />
    </main>
  )
}

function Widget({ size, weather }: { size: WidgetSize, weather: Weather }) {
  if (size === 'S') return <SmallWidget weather={weather} />
  if (size === 'M') return <MediumWidget />
  return <LargeWidget />
}
