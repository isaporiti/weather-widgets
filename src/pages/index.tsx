import { useState } from 'react';
import { Inter } from 'next/font/google'
import SizeSelector from './SizeSelector'
import { WidgetSize } from '@/types/WidgetSize';
import { SmallWidget } from './SmallWidget';
import { MediumWidget } from './MediumWidget';
import { LargeWidget } from './LargeWidget';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [widgetSize, setWidgetSize] = useState<WidgetSize>('S');

  return (
    <main className={inter.className}>
      <Widget size={widgetSize} />
      <SizeSelector widgetSize={widgetSize} setWidgetSize={setWidgetSize} />
    </main>
  )
}

function Widget({ size }: { size: WidgetSize }) {
  if (size === 'S') return <SmallWidget />
  if (size === 'M') return <MediumWidget />
  return <LargeWidget />
}
