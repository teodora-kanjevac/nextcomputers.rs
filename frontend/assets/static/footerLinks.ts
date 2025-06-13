import InstagramIcon from '~/components/icons/InstagramIcon.vue'
import FacebookIcon from '~/components/icons/FacebookIcon.vue'
import LinkedInIcon from '~/components/icons/LinkedInIcon.vue'

const loggedInSection = [
    { link: '/profil', content: 'Moj nalog' },
    { link: '/profil/istorija-kupovine', content: 'Moje porudžbine' },
    { link: '/profil/lista-zelja', content: 'Moja lista želja' },
]
const loggedOutSection = [
    { link: '/login', content: 'Prijavite se' },
    { link: '/register', content: 'Registracija' },
    { link: '/forgot-password', content: 'Zaboravljena lozinka' },
]

export const getFooterSections = (isLoggedIn: boolean) => [
    {
        title: 'Kupovina',
        items: [
            { link: '/uslovi-koriscenja', content: 'Uslovi korišćenja' },
            { link: '/politika-privatnosti', content: 'Politika privatnosti' },
            { link: '/uslovi-koriscenja', hash: '#reklamacije', content: 'Reklamacije' },
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
            { link: '/uslovi-koriscenja', hash: '#nacin-placanja', content: 'Način plaćanja' },
            { link: '/uslovi-koriscenja', hash: '#dostava', content: 'Dostava' },
        ],
    },
    {
        title: 'Korisnički nalog',
        items: isLoggedIn ? loggedInSection : loggedOutSection,
    },
]

export const socialIcons = [
    { componentIcon: FacebookIcon, link: 'https://www.instagram.com/nextcomputers.rs' },
    { componentIcon: InstagramIcon, link: 'https://www.instagram.com/nextcomputers.rs' },
    { componentIcon: LinkedInIcon, link: 'https://www.linkedin.com/company/nextcomputers' },
]
