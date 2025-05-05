import InstagramIcon from '~/components/icons/InstagramIcon.vue'
import FacebookIcon from '~/components/icons/FacebookIcon.vue'
import LinkedInIcon from '~/components/icons/LinkedInIcon.vue'

export const footerSections = [
    {
        title: 'Kupovina',
        items: [
            { link: '/uslovi-koriscenja', content: 'Uslovi korišćenja' },
            { link: '/politika-privatnosti', content: 'Politika privatnosti' },
            { link: '/uslovi-koriscenja#reklamacije', content: 'Reklamacije' },
        ],
    },
    {
        title: 'Treba Vam pomoć?',
        items: [
            { link: '/faq', content: 'Česta pitanja' },
            { link: '/kako-kupovati', content: 'Kako kupovati' },
            { link: '/kontakt', content: 'Kontakt' },
        ],
    },
    {
        title: 'Prodaja',
        items: [
            { link: '/', content: 'O našoj kompaniji' },
            { link: '/', content: 'Akcije i ponude' },
        ],
    },
    {
        title: 'Plaćanje',
        items: [
            { link: '/uslovi-koriscenja#nacin-placanja', content: 'Način plaćanja' },
            { link: '/uslovi-koriscenja#dostava', content: 'Dostava' },
        ],
    },
    {
        title: 'Korisnički nalog',
        items: [
            { link: '/login', content: 'Prijavite se' },
            { link: '/register', content: 'Registracija' },
            { link: '/', content: 'Zaboravljena lozinka' },
        ],
    },
]

export const socialIcons = [
    { componentIcon: FacebookIcon, link: 'https://www.instagram.com/nextcomputers.rs' },
    { componentIcon: InstagramIcon, link: 'https://www.instagram.com/nextcomputers.rs' },
    { componentIcon: LinkedInIcon, link: 'https://www.linkedin.com/company/nextcomputers' },
]
