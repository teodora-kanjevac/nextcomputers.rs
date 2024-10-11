import { Tooltip } from 'flowbite'
import type { TooltipOptions } from 'flowbite'

export const initializeTooltip = (targetId: string, triggerId: string, options: TooltipOptions) => {
    const tooltipElement = document.getElementById(targetId) as HTMLElement | null
    const tooltipTrigger = document.getElementById(triggerId) as HTMLElement | null

    if (tooltipElement && tooltipTrigger) {
        return new Tooltip(tooltipElement, tooltipTrigger, options)
    }

    return null
}