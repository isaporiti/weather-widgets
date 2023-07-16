import { Dispatch, SetStateAction, useState } from "react"
import { WidgetSize, widgetSizes } from "@/types/WidgetSize"

export default function WidgetSelector({ setWidgetSize }: {
    setWidgetSize: Dispatch<SetStateAction<WidgetSize>>
}) {
    return widgetSizes.map(size =>
        <div
            key={size}
            onClick={() => setWidgetSize(size)}
        >
            {size}
        </div>)
}
