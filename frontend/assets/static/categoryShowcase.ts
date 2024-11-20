import ComputerIcon from '~/components/icons/ComputerIcon.vue'
import TelevisionIcon from '~/components/icons/TelevisionIcon.vue'
import WashingMachineIcon from '~/components/icons/WashingMachineIcon.vue'
import LaptopIcon from '~/components/icons/LaptopIcon.vue'
import SmartphoneIcon from '~/components/icons/SmartphoneIcon.vue'
import PrinterIcon from '~/components/icons/PrinterIcon.vue'

export const categories = [
    { name: 'Računari', icon: ComputerIcon, link: '/proizvodi/1066' },
    { name: 'Laptop računari', icon: LaptopIcon, link: '/proizvodi/1017' },
    { name: 'Televizori', icon: TelevisionIcon, link: '/proizvodi/1005' },
    { name: 'Mobilni telefoni', icon: SmartphoneIcon, link: '/proizvodi/1007' },
    { name: 'Štampači', icon: PrinterIcon, link: '/proizvodi/1053' },
    { name: 'Veš mašine', icon: WashingMachineIcon, link: '/proizvodi/1037' },
]