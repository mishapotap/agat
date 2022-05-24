import {ResearchBase_Icon_1, ResearchBase_Icon_2, ResearchBase_Icon_3, ResearchBase_Icon_4, ResearchBase_Icon_5, ResearchBase_Icon_6} from '../assets/svg'
import { Navigation_1, Navigation_2, Navigation_3, Navigation_4, Navigation_5 } from "../assets/svg";

const filters = [
    {
        id: 1,
        name: 'Космическая биология и биотехнология',
        icon: <ResearchBase_Icon_1/>,
    },
    {
        id: 2,
        name: 'Исследование земли и космоса',
        icon: <ResearchBase_Icon_2/>,
    },
    {
        id: 3,
        name: 'Физико-химические процессы и материалы в условиях космоса',
        icon: <ResearchBase_Icon_3/>,
    },
    {
        id: 4,
        name: 'Человек в космосе',
        icon: <ResearchBase_Icon_4/>,
    },
    {
        id: 5,
        name: 'Технологии освоения космического пространства',
        icon: <ResearchBase_Icon_5/>,
    },
    {
        id: 6,
        name: 'Образование и популяризация космических исследований',
        icon: <ResearchBase_Icon_6/>,
    },
]

const navigation = [
    {
        id: 1,
        active: 'one',
        icon: <Navigation_5/>,
        navigate: 'Home',
    },
    {
        id: 2,
        active: 'two',
        icon: <Navigation_1/>,
        navigate: 'About',
    },
    {
        id: 3,
        active: 'three',
        icon: <Navigation_2/>,
        navigate: 'Research',
    },
    {
        id: 4,
        active: 'four',
        icon: <Navigation_3/>,
        navigate: 'ResearchBase',
    },
    {
        id: 5,
        active: 'five',
        icon: <Navigation_4/>,
        navigate: 'Mks',
    },
]

// const quickALinks = [
//     {
//         id: 1,
//         title: 'Event',
//         icon: require('../assets/icons/book.png'),
//         color: '#FFFFFF',
//     },
//     {
//         id: 2,
//         title: 'Transport',
//         icon: require('../assets/icons/car.png'),
//         color: '#6DA2FD',
//     },
//     {
//         id: 3,
//         title: 'Live',
//         icon: require('../assets/icons/video.png'),
//         color: '#F9A1D8',
//     },
//     {
//         id: 4,
//         title: 'Coin',
//         icon: require('../assets/icons/shopping-bag.png'),
//         color: '#00D2DF',
//     },
//     {
//         id: 5,
//         title: 'Flash Sale',
//         icon: require('../assets/icons/clock.png'),
//         color: '#F7565D',
//     },
//     {
//         id: 6,
//         title: 'Search',
//         icon: require('../assets/icons/search.png'),
//         color: '#FDD452',
//     },
//     {
//         id: 7,
//         title: 'Premium',
//         icon: require('../assets/icons/fire.png'),
//         color: '#FF841E',
//     },
//     {
//         id: 8,
//         title: 'Card',
//         icon: require('../assets/icons/credit-card.png'),
//         color: '#7B60EA',
//     }

// ]


export default {
    filters,
    navigation,
    // quickALinks,
}