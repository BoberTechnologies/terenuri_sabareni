// Component imports
import BackgroundCard from '../components/BackgroundCard.vue'
import Carousel from '../components/Carousel.vue'
import EdgeStrip from '@/components/EdgeStrip.vue'
import ContactForm from '../components/ContactForm.vue'
import ImageCard from "@/components/ImageCard.vue";

// Image imports
import harta from '../../res/denumiri.jpg'
import homeImage from '../../res/Home/Home_1.jpg'
import img6 from '../../res/Home/Home_6.jpg'
import img7 from '../../res/Home/Home_7.jpg'

import house_black from '../../res/Home/House_black.png'
import house_blue from '../../res/Home/House_blue.png'
import house_yellow from '../../res/Home/House_yellow.png'

import stair_left from '../../res/Home/typewritter.jpg'
import stair_right from '../../res/Home/office.jpg'

import utilities from '../../res/carousel/utilities.jpg'
import road from '../../res/carousel/road.jpg'
import documents from '../../res/carousel/documents.jpg'
import forest from '../../res/carousel/forest.jpg'
import ready from '../../res/carousel/ready.jpg'
// Data
const homeImages = [
    { image: utilities, title: 'Utilitati pregatite', paragraph: 'Gaze naturale si energie electrica, fara griji sau batai de cap' },
    { image: road, title: 'Drumuri amenajate', paragraph: 'Acces facil, chiar si in cele mai ploioase zile' },
    { image: documents, title: 'Autorizatii de constructie', paragraph: 'Poti incepe constructia imediat' },
    { image: forest, title: 'Padurea Cereanca', paragraph: 'Perfect pentru plimbari in aer liber si liniste deplina' },
    { image: ready, title: 'Totul gata, doar pentru tine', paragraph: '18 luni de munca intensa, proiectare, avizari si executii pentru ca tu sa poti incepe constructia fara batai de cap' }
]

// Export everything you need in your page
export {
    BackgroundCard,
    Carousel,
    EdgeStrip,
    ContactForm,
    ImageCard,
    homeImage,
    img6,
    img7,
    homeImages,
    house_black,
    house_blue,
    house_yellow,
    stair_left,
    stair_right,
    harta
}
