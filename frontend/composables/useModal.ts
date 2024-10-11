import { Modal } from 'flowbite'
import type { ModalOptions } from 'flowbite'

export const initializeModal = (modalId: string, modalOptions: ModalOptions) => {
    const modalElement = document.getElementById(modalId) as HTMLElement | null

    if (modalElement) {
        const modal = new Modal(modalElement, modalOptions)

        const modalButton = document.querySelector(`[data-modal-target="${modalId}"]`)
        const closeButton = document.querySelector(`[data-modal-hide="${modalId}"]`)

        if (modalButton) {
            modalButton.addEventListener('click', () => modal.show())
        }
        if (closeButton) {
            closeButton.addEventListener('click', () => modal.hide())
        }

        return modal
    }

    return null
}
