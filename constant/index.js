import parfum1 from '@/public/img/1.png';
import parfum2 from '@/public/img/2.png';
import parfum3 from '@/public/img/3.png';
import parfum4 from '@/public/img/4.png';

import model from '@/public/img/model.png';
import banner from '@/public/img/banner.jpg';
import bannerLanding from '@/public/img/banner_landing.jpg';

const navLinks = [
    {
        id: "#home",
        title: "Home",
    },
    {
        id: "#bestsellers",
        title: "Bestsellers",
    },
    {
        id: "#shopAll",
        title: "shop All",
    },
    {
        id: "#perfumes",
        title: "Perfumes",
    },
    {
        id: "#contactus",
        title: "Contact Us",
    },
    {
        id: "#faq",
        title: "FAQ",
    },
];

const heroBanner = [bannerLanding, banner, bannerLanding, banner];

const buttonBestSellers = [
    "All",
    "Night",
    "Daily",
    "Elegant",
    "Romantic",
    "Warm"
];

const bestSellers = [
    // NIGHT
    {
        img: parfum1,
        title: 'Moonlit Flour - Eau de Parfum',
        desc: 'A scent for midnight souls—floral, spicy, and hypnotic.',
        size: '50ml',
        price: 'Rp.120.000,00',
        category: "Night"
    },
    {
        img: parfum1,
        title: 'Nocturnal Whisper - Eau de Parfum',
        desc: 'Dark berries, soft musk, and warm vanilla for deep evenings.',
        size: '50ml',
        price: 'Rp.130.000,00',
        category: "Night"
    },
    {
        img: parfum1,
        title: 'Velvet Midnight - Eau de Parfum',
        desc: 'Smooth amber with a seductive smoky finish.',
        size: '50ml',
        price: 'Rp.140.000,00',
        category: "Night"
    },

    // DAILY
    {
        img: parfum2,
        title: 'Pure Blossom - Eau de Parfum',
        desc: 'Soft floral freshness perfect for everyday use.',
        size: '50ml',
        price: 'Rp.110.000,00',
        category: "Daily"
    },
    {
        img: parfum2,
        title: 'Morning Dew - Eau de Parfum',
        desc: 'Crisp green tea and citrus blend for a refreshing daily vibe.',
        size: '50ml',
        price: 'Rp.115.000,00',
        category: "Daily"
    },
    {
        img: parfum2,
        title: 'Soft Breeze - Eau de Parfum',
        desc: 'Clean cotton notes with a soft airy finish.',
        size: '50ml',
        price: 'Rp.105.000,00',
        category: "Daily"
    },

    // ELEGANT
    {
        img: parfum3,
        title: 'Royal Essence - Eau de Parfum',
        desc: 'Luxurious white florals wrapped with creamy sandalwood.',
        size: '50ml',
        price: 'Rp.150.000,00',
        category: "Elegant"
    },
    {
        img: parfum3,
        title: 'Opaline Glow - Eau de Parfum',
        desc: 'Elegant jasmine and warm vanilla in a timeless blend.',
        size: '50ml',
        price: 'Rp.145.000,00',
        category: "Elegant"
    },
    {
        img: parfum3,
        title: 'Silver Aura - Eau de Parfum',
        desc: 'Refined citrus and musk with a modern luxury feel.',
        size: '50ml',
        price: 'Rp.155.000,00',
        category: "Elegant"
    },

    // ROMANTIC
    {
        img: parfum3,
        title: 'Crimson Rose - Eau de Parfum',
        desc: 'Deep red roses with a hint of sweet warmth.',
        size: '50ml',
        price: 'Rp.130.000,00',
        category: "Romantic"
    },
    {
        img: parfum3,
        title: 'Blush Petals - Eau de Parfum',
        desc: 'Soft pink florals for a gentle romantic mood.',
        size: '50ml',
        price: 'Rp.125.000,00',
        category: "Romantic"
    },
    {
        img: parfum3,
        title: 'Lover’s Serenity - Eau de Parfum',
        desc: 'Sweet pear blossoms combined with soft musk.',
        size: '50ml',
        price: 'Rp.135.000,00',
        category: "Romantic"
    },

    // WARM
    {
        img: parfum4,
        title: 'Amber Heat - Eau de Parfum',
        desc: 'Warm amber and spiced vanilla creating a cozy aura.',
        size: '50ml',
        price: 'Rp.140.000,00',
        category: "Warm"
    },
    {
        img: parfum4,
        title: 'Golden Ember - Eau de Parfum',
        desc: 'Burnt caramel and warm woods—comforting and rich.',
        size: '50ml',
        price: 'Rp.145.000,00',
        category: "Warm"
    },
    {
        img: parfum4,
        title: 'Honey Spice - Eau de Parfum',
        desc: 'Sweet honey with cinnamon warmth for bold personalities.',
        size: '50ml',
        price: 'Rp.120.000,00',
        category: "Warm"
    },

    // EXTRA RANDOM VARIASI (BONUS)
    {
        img: parfum2,
        title: 'Crystal Dawn - Eau de Parfum',
        desc: 'Fresh citrus with musky undertones—light and uplifting.',
        size: '50ml',
        price: 'Rp.115.000,00',
        category: "Daily"
    },
    {
        img: parfum2,
        title: 'Obsidian Nightfall - Eau de Parfum',
        desc: 'Intense dark spices perfect for late-night elegance.',
        size: '50ml',
        price: 'Rp.150.000,00',
        category: "Night"
    },
    {
        img: parfum2,
        title: 'Pearl Satin - Eau de Parfum',
        desc: 'Soft oriental florals giving a refined feminine aura.',
        size: '50ml',
        price: 'Rp.135.000,00',
        category: "Elegant"
    },
    {
        img: parfum2,
        title: 'Romance Mist - Eau de Parfum',
        desc: 'Sweet berries combined with gentle floral notes.',
        size: '50ml',
        price: 'Rp.128.000,00',
        category: "Romantic"
    },
    {
        img: parfum2,
        title: 'Warm Silk - Eau de Parfum',
        desc: 'Creamy tonka bean layered with soft vanilla warmth.',
        size: '50ml',
        price: 'Rp.138.000,00',
        category: "Warm"
    }
];


const auraParfum = [
    {
        img: parfum4,
        title: 'Moonlit Flour - Eau de Parfum',
        desc: 'Confident. Grounded. Magnetic.Explore deep, woody, and spicy compositionscrafted  to leave a bold, lasting impression.',
        cta: 'Browse Men’s Scents',
    },
    {
        img: parfum4,
        title: 'Moonlit Flour - Eau de Parfum',
        desc: 'Confident. Grounded. Magnetic.Explore deep, woody, and spicy compositionscrafted  to leave a bold, lasting impression.',
        cta: 'Browse Men’s Scents',
    },
    {
        img: parfum4,
        title: 'Moonlit Flour - Eau de Parfum',
        desc: 'Confident. Grounded. Magnetic.Explore deep, woody, and spicy compositionscrafted  to leave a bold, lasting impression.',
        cta: 'Browse Men’s Scents',
    },
    {
        img: parfum4,
        title: 'Moonlit Flour - Eau de Parfum',
        desc: 'Confident. Grounded. Magnetic.Explore deep, woody, and spicy compositionscrafted  to leave a bold, lasting impression.',
        cta: 'Browse Men’s Scents',
    },
]

const singleParfum = [
    {
        img: parfum1,
        title: 'Aura for Everyone',
        subTitle: 'A scent for every soul, every story',
        desc: 'A hypnotic blend oif night-blooming jasmine, warm amber, and exotic spices. Perfect for the mysterious and alluring.',
        disc: 'Rp.85.000,00',
        price: 'Rp.100.000,00',
        type: 'oriental'
    },
    {
        img: parfum2,
        title: 'Aura for Everyone',
        subTitle: 'A scent for every soul, every story',
        desc: 'A hypnotic blend oif night-blooming jasmine, warm amber, and exotic spices. Perfect for the mysterious and alluring.',
        disc: 'Rp.75.000,00',
        price: 'Rp.90.000,00',
        type: 'floral'
    },
    {
        img: parfum3,
        title: 'Aura for Everyone',
        subTitle: 'A scent for every soul, every story',
        desc: 'A hypnotic blend oif night-blooming jasmine, warm amber, and exotic spices. Perfect for the mysterious and alluring.',
        disc: 'Rp.90.000,00',
        price: 'Rp.120.000,00',
        type: 'spicy'
    },
]

const blogParfum = [
    {
        date: 'Oktober 15, 2025',
        title: 'The Art of Layering Fragrances',
        desc: 'Discover the secrets of combining different scents to create your unique signature frafrance that evolves throughout the day.',
        cta: 'Learn more'
    },
    {
        date: 'Oktober 15, 2025',
        title: 'The Art of Layering Fragrances',
        desc: 'Discover the secrets of combining different scents to create your unique signature frafrance that evolves throughout the day.',
        cta: 'Learn more'
    },
]

const listFaq = [
    {
        title: 'What is Webflow and why is it the best website builder?',
        desc: 'A hypnotic blend oif night-blooming jasmine, warm amber, and exotic spices. Perfect for the mysterious and alluring.'
    },
    {
        title: 'What is Webflow and why is it the best website builder?',
        desc: 'A hypnotic blend oif night-blooming jasmine, warm amber, and exotic spices. Perfect for the mysterious and alluring.'
    },
    {
        title: 'What is Webflow and why is it the best website builder?',
        desc: 'A hypnotic blend oif night-blooming jasmine, warm amber, and exotic spices. Perfect for the mysterious and alluring.'
    },
    {
        title: 'What is Webflow and why is it the best website builder?',
        desc: 'A hypnotic blend oif night-blooming jasmine, warm amber, and exotic spices. Perfect for the mysterious and alluring.'
    },
]

const openingHours = [
    {
        day: 'Monday - Friday',
        time: '10:00 am - 10:00 pm'
    },
    {
        day: 'Saturday',
        time: '11:00 am - 10:00 pm'
    },
    {
        day: 'Sunday',
        time: '12:00 am - 10:00 pm'
    },
]


const listShop = [
    {
        name: 'New Arrivals',
        url: '#'
    },
    {
        name: 'Best Sellers',
        url: '#'
    },
    {
        name: 'Gift Sets',
        url: '#'
    },
    {
        name: 'Sample Sets',
        url: '#'
    },
    {
        name: 'Sale',
        url: '#'
    },
]

const listServices = [
    {
        name: 'Orders',
        url: '#'
    },
    {
        name: 'Details',
        url: '#'
    },
    {
        name: 'Return',
        url: '#'
    },
    {
        name: 'FAQs',
        url: '#'
    }
]

const listDelivery = [
    {
        name: 'Delivery',
        url: '#'
    },
]

const latestUpdates = [
    {
        title: 'The Art of Layering Fragrances',
        desc: 'Discover the secrets of combining different scents to create your unique signature frafrance that evolves throughout the day.',
        cta: 'Learn more',
        img: parfum3,
        date: 'Oktober 15, 2025',
    },
    {
        title: 'The Art of Layering Fragrances',
        desc: 'Discover the secrets of combining different scents to create your unique signature frafrance that evolves throughout the day.',
        cta: 'Learn more',
        img: parfum3,
        date: 'Oktober 15, 2025',
    }
]

const socials = [
    {
        name: "Instagram",
        icon: "ri-instagram-line",
        url: "#",
    },
    {
        name: "X (Twitter)",
        icon: "ri-twitter-x-line",
        url: "#",
    },
    {
        name: "Facebook",
        icon: "ri-facebook-circle-fill",
        url: "#",
    },
    {
        name: "Whatsapp",
        icon: "ri-whatsapp-line",
        url: "#",
    },
];

export { navLinks, heroBanner, buttonBestSellers, auraParfum, bestSellers, singleParfum, blogParfum, listFaq, openingHours, listShop, listServices, listDelivery, socials, latestUpdates }