export const destroyComponent = (componentInstance: { destroy: () => void } | null) => {
    if (componentInstance && typeof componentInstance.destroy === 'function') {
        componentInstance.destroy()
    }
}