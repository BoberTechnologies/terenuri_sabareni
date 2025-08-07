// Component imports
import BackgroundCard from '../components/BackgroundCard.vue'
import Carousel from '../components/Carousel.vue'
import EdgeStrip from '@/components/EdgeStrip.vue'

// Image imports
import homeImage from '../../res/Home/Home_1.jpg'
import img1 from '../../res/Home/Home_1.jpg'
import img2 from '../../res/Home/Home_2.jpg'
import img3 from '../../res/Home/Home_3.jpg'
import img4 from '../../res/Home/Home_4.jpg'
import img5 from '../../res/Home/Home_5.jpg'
import img6 from '../../res/Home/Home_6.jpg'
import img7 from '../../res/Home/Home_7.jpg'
// Data
const homeImages = [
    { image: img1, title: 'Utilitati pregatite', paragraph: 'Gaze naturale si energie electrica, fara griji sau batai de cap' },
    { image: img2, title: 'Drumuri amenajate', paragraph: 'Acces facil, chiar si in cele mai ploioase zile' },
    { image: img3, title: 'Autorizatii de constructie', paragraph: 'Poti incepe constructia imediat' },
    { image: img4, title: 'Padurea Cereanca', paragraph: 'Perfect pentru plimbari in aer liber si liniste deplina' },
    { image: img5, title: 'Totul gata, doar pentru tine', paragraph: '18 luni de munca intensa, proiectare, avizari si executii pentru ca tu sa poti incepe constructia fara batai de cap' }
]

// Export everything you need in your page
export {
    BackgroundCard,
    Carousel,
    EdgeStrip,
    homeImage,
    img6,
    img7,
    homeImages
}
