import gsap from 'gsap'

export const animateScale = (selector: any, scale: number, duration: number = 0.3, ease: string = 'power1.out') => {
    gsap.to(selector, {
        scale,
        duration,
        ease,
    })
}

export const resetScale = (selector: any, duration: number = 0.2, ease: string = 'power1.out') => {
    gsap.to(selector, {
        scale: 1,
        duration,
        ease,
    })
}

export const fadeIn = (selector: any, duration: number = 0.2) => {
    gsap.to(selector, {
        opacity: 1,
        duration,
        ease: 'power1.out',
    })
}

export const fadeOut = (selector: any, duration: number = 0.2) => {
    gsap.to(selector, {
        opacity: 0,
        duration,
        ease: 'power1.out',
    })
}

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
