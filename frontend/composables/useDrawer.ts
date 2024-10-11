import { Drawer } from 'flowbite'
import type { DrawerOptions } from 'flowbite'

export const initializeDrawer = (drawerId: string, options: DrawerOptions, isDrawerOpen: Ref<boolean>): Drawer | null => {
    const drawerElement = document.getElementById(drawerId) as HTMLElement | null

    if (drawerElement) {
        const drawer = new Drawer(drawerElement, {
            ...options,
            onShow: () => (isDrawerOpen.value = true),
            onHide: () => (isDrawerOpen.value = false),
        })

        const drawerButton = document.querySelector(`[data-drawer-target="${drawerId}"]`)
        const closeButton = document.querySelector(`[data-drawer-hide="${drawerId}"]`)

        if (drawerButton) {
            drawerButton.addEventListener('click', () => drawer.show())
        }
        if (closeButton) {
            closeButton.addEventListener('click', () => drawer.hide())
        }

        return drawer
    }

    return null
}
