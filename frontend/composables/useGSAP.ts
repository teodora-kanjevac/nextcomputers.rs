import gsap from 'gsap'

export const slideInOut = (selector: any, targetHeight: number, duration: number = 0.5) => {
    gsap.to(selector, {
        height: targetHeight,
        duration: duration,
        ease: 'power1.inOut',
    })
}

export const slideFilters = (selector: any, fromHeight: number, toHeight: number, duration: number = 0.5) => {
    gsap.fromTo(
        selector,
        {
            height: fromHeight,
        },
        {
            height: toHeight,
            duration: duration,
            ease: 'power1.inOut',
        }
    )
}
