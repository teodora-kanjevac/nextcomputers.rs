import { useToast } from 'primevue/usetoast'

export const useNotification = () => {
    const toast = useToast()

    const showNotification = (
        severity: 'success' | 'info' | 'warn' | 'error',
        summary: string,
        detail: string,
        life = 5000
    ) => {
        toast.add({
            severity,
            summary,
            detail,
            life,
        })
    }

    return { showNotification }
}
