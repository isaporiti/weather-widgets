import { Dispatch, SetStateAction, useState } from "react"
import { WidgetSize, widgetSizes } from "@/types/WidgetSize"
import styles from '@/styles/SizeSelector.module.css'

export default function SizeSelector({ widgetSize, setWidgetSize }: {
    widgetSize: WidgetSize, setWidgetSize: Dispatch<SetStateAction<WidgetSize>>
}) {
    return (
        <section className={styles.size_selector}>
            <SizeList widgetSize={widgetSize} setWidgetSize={setWidgetSize} />
        </section>
    )
}

function SizeList({ widgetSize, setWidgetSize }: {
    widgetSize: WidgetSize,
    setWidgetSize: Dispatch<SetStateAction<WidgetSize>>
}) {

    function classes(size: WidgetSize) {
        return `
            ${styles.size_button}
            ${widgetSize === size ? styles.size_button_selected : styles.size_button_unselected}
        `
    }

    return widgetSizes.map(size =>
        <div
            className={classes(size)}
            key={size}
            onClick={() => setWidgetSize(size)}
        >
            {size}
        </div>)
}