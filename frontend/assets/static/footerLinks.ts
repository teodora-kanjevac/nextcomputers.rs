import InstagramIcon from '~/components/icons/InstagramIcon.vue'
import FacebookIcon from '~/components/icons/FacebookIcon.vue'
import LinkedInIcon from '~/components/icons/LinkedInIcon.vue'

export const footerSections = [
    {
        title: 'Kupovina',
        items: [
            { link: '/', content: 'Politika privatnosti' },
            { link: '/', content: 'Uslovi korišćenja' },
            { link: '/', content: 'Reklamacije' },
            { link: '/', content: 'Prava i obaveze kupaca' },
        ],
    },
    {
        title: 'Treba Vam pomoć?',
        items: [
            { link: '/', content: 'Česta pitanja' },
            { link: '/', content: 'Kako kupovati' },
            { link: '/', content: 'Kontakt' },
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
            { link: '/', content: 'Način plaćanja' },
            { link: '/', content: 'Isporuka' },
        ],
    },
    {
        title: 'Korisnički nalog',
        items: [
            { link: '/', content: 'Prijavite se' },
            { link: '/', content: 'Registracija' },
            { link: '/', content: 'Zaboravljena lozinka' },
        ],
    },
]

export const socialIcons = [
    { componentIcon: FacebookIcon, link: 'https://www.instagram.com/nextcomputers.rs' },
    { componentIcon: InstagramIcon, link: 'https://www.instagram.com/nextcomputers.rs' },
    { componentIcon: LinkedInIcon, link: 'https://www.instagram.com/nextcomputers.rs' },
]
