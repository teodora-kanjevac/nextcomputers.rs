import { Dropdown } from 'flowbite'
import type { DropdownOptions } from 'flowbite'

export const initializeDropdown = (dropdownId: string, buttonId: string, options: DropdownOptions): Dropdown | null => {
    const dropdownElement = document.getElementById(dropdownId) as HTMLElement | null
    const triggerElement = document.getElementById(buttonId) as HTMLElement | null

    if (dropdownElement && triggerElement) {
        const dropdown = new Dropdown(dropdownElement, triggerElement, options)
        return dropdown
    }

    return null
}
