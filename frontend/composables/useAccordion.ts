import { Accordion } from 'flowbite'
import type { AccordionOptions, AccordionItem } from 'flowbite'

export const initializeAccordion = (accordionId: string, items: AccordionItem[], options: AccordionOptions) => {
    const accordionElement = document.querySelector(`#${accordionId}`) as HTMLElement | null

    if (accordionElement) {
        return new Accordion(accordionElement, items, options)
    }

    return null
}