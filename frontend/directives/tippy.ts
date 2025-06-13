import type { DirectiveBinding } from 'vue'
import tippy, { type Props } from 'tippy.js'
import 'tippy.js/dist/tippy.css'

declare global {
    interface HTMLElement {
        _tippy?: {
            destroy: () => void
        }
    }
}

export default {
    mounted(el: HTMLElement, binding: DirectiveBinding) {
        const value = binding.value
        const options: Partial<Props> = typeof value === 'string' ? { content: value } : { ...value }
        tippy(el, {
            animation: 'fade',
            arrow: true,
            theme: 'custom',
            duration: [200, 150],
            offset: [0, 12],
            ...options,
        })
    },
    unmounted(el: HTMLElement) {
        if (el._tippy) {
            el._tippy.destroy()
        }
    },
}

export const createTippy = (el: HTMLElement, options: Partial<Props>) => {
    return tippy(el, {
        animation: 'fade',
        arrow: true,
        theme: 'custom',
        duration: [200, 150],
        offset: [0, 12],
        ...options,
    })
}
