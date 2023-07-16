import { Dispatch, SetStateAction, useState } from "react"
import { WidgetSize, widgetSizes } from "@/types/WidgetSize"
import styles from '@/styles/SizeSelector.module.css'

export default function SizeSelector({ setWidgetSize }: {
    setWidgetSize: Dispatch<SetStateAction<WidgetSize>>
}) {
    return (
        <section className={styles.size_selector}>
            <SizeList setWidgetSize={setWidgetSize} />
        </section>
    )
}

function SizeList({ setWidgetSize }: { setWidgetSize: Dispatch<SetStateAction<WidgetSize>> }) {
    return widgetSizes.map(size =>
        <div
            className={styles.size_button}
            key={size}
            onClick={() => setWidgetSize(size)}
        >
            {size}
        </div>)
}