import parfum1 from '@/public/img/1.png';
import parfum2 from '@/public/img/2.png';
import parfum3 from '@/public/img/3.png';
import parfum4 from '@/public/img/4.png';
import parfum6 from '@/public/img/parfum-bgblack.jpeg';

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
        id: "#perfumes",
        title: "Perfumes",
    },
    {
        id: "#shopAll",
        title: "shop All",
    },
    {
        id: "#faq",
        title: "FAQ",
    },
    {
        id: "#contactus",
        title: "Contact Us",
    },
];

const heroBanner = [bannerLanding, banner, bannerLanding, banner];

const buttonBestSellers = ["All", "Night", "Daily", "Elegant", "Romantic", "Masculine"];

const products = [
    {
        id: 1,
        slug: "scent-black",
        name: "SCENT BLACK",
        image: parfum4,
        category: "Night",
        type: "oriental",
        gender: "Unisex (Elegant)",
        shortDescription: "Sweet warm, dark, & bold.",
        description:
            "Kombinasi vanilla & tonka bean (sweet) dengan depth dari patchouli & sandalwood (dark/bold).",
        vibe: ["Sweet", "Warm", "Dark", "Bold"],
        bestFor: ["Malam", "Acara resmi", "Cuaca sejuk"],
        variants: [
            { size: "13ml", price: 65000 },
            { size: "30ml", price: 145000 },
            { size: "50ml", price: 225000 },
        ],
        rating: 4.9,
        reviewCount: 2400,
        isDiscount: true,
        heroTag: ["Oriental", "Woody", "Spicy"],
    },

    {
        id: 2,
        slug: "black-red",
        name: "BLACK RED",
        image: parfum1,
        category: "Night",
        type: "spicy",
        gender: "Unisex (Bold)",
        shortDescription: "Dark sweet, luxury glow, & intense.",
        description:
            "Perpaduan vanilla pekat, karamel, dan amber yang intens. Memberikan efek luxury glow.",
        vibe: ["Dark Sweet", "Luxury", "Intense"],
        bestFor: ["Malam", "Date night", "Acara mewah"],
        variants: [
            { size: "13ml", price: 65000 },
            { size: "30ml", price: 145000 },
            { size: "50ml", price: 225000 },
        ],
        rating: 4.8,
        reviewCount: 1800,
        isDiscount: false,
        heroTag: ["Amber", "Caramel", "Vanilla"],
    },

    {
        id: 3,
        slug: "unique",
        name: "UNIQUE",
        image: parfum1,
        category: "Romantic",
        type: "floral",
        gender: "Unisex (Mysterious)",
        shortDescription: "Sweet romantic & dark elegance.",
        description:
            "Perpaduan bunga (Rose/Jasmine) dengan sentuhan misterius dari amber & rempah halus.",
        vibe: ["Sweet", "Romantic", "Dark Elegance"],
        bestFor: ["Malam", "Acara istimewa", "Sensual"],
        variants: [
            { size: "13ml", price: 65000 },
            { size: "30ml", price: 145000 },
            { size: "50ml", price: 225000 },
        ],
        rating: 4.7,
        reviewCount: 1200,
        isDiscount: false,
        heroTag: ["Rose", "Floral", "Amber"],
    },

    {
        id: 4,
        slug: "monic",
        name: "MONIC",
        image: parfum2,
        category: "Elegant",
        type: "floral",
        gender: "Unisex (Elegant-Fem)",
        shortDescription: "Manis mewah, creamy hangat, & long-lasting.",
        description:
            "Manis mewah dengan tekstur creamy dari sandalwood dan almond. Lembut tapi tahan lama.",
        vibe: ["Sweet", "Creamy", "Warm", "Long-lasting"],
        bestFor: ["Sore/Malam", "Dinner", "Ruangan AC"],
        variants: [
            { size: "13ml", price: 65000 },
            { size: "30ml", price: 145000 },
            { size: "50ml", price: 225000 },
        ],
        rating: 4.9,
        reviewCount: 2100,
        isDiscount: true,
        heroTag: ["Creamy", "Sweet", "Sandalwood"],
    },

    {
        id: 5,
        slug: "the-parfume",
        name: "THE PARFUME",
        image: parfum1,
        category: "Daily",
        type: "oriental",
        gender: "Unisex (Balanced)",
        shortDescription: "Sweet meets bold & clean sophistication.",
        description:
            "Transisi dari manis halus (Vanilla) menuju struktur clean dari musk dan kayu.",
        vibe: ["Sweet", "Bold", "Clean"],
        bestFor: ["Siang/Malam", "Meeting", "Event semi-formal"],
        variants: [
            { size: "13ml", price: 65000 },
            { size: "30ml", price: 145000 },
            { size: "50ml", price: 225000 },
        ],
        rating: 4.8,
        reviewCount: 1600,
        isDiscount: false,
        heroTag: ["Vanilla", "Musk", "Woody"],
    },

    {
        id: 6,
        slug: "the-parfume-femme",
        name: "THE PARFUME FEMME",
        image: parfum2,
        category: "Elegant",
        type: "spicy",
        gender: "Feminine (Modern)",
        shortDescription: "Sweet, bold, & elegant femininity.",
        description:
            "Manis gourmand (Caramel/Vanilla) yang dipadukan dengan bunga putih (Peony/Rose).",
        vibe: ["Sweet", "Bold", "Elegant Feminine"],
        bestFor: ["Siang/Malam", "Kencan", "Acara sosial"],
        variants: [
            { size: "13ml", price: 65000 },
            { size: "30ml", price: 145000 },
            { size: "50ml", price: 225000 },
        ],
        rating: 4.9,
        reviewCount: 2600,
        isDiscount: true,
        heroTag: ["Floral", "Sweet", "Modern"],
    },

    {
        id: 7,
        slug: "scent-vishes",
        name: "SCENT VISHES",
        image: parfum1,
        category: "Daily",
        type: "floral",
        gender: "Unisex (Fem-Clean)",
        shortDescription: "Soft fresh, gracefully sweet, & halus.",
        description:
            "Soft fresh dari citrus/apel dengan sentuhan bunga freesia dan musk yang halus.",
        vibe: ["Soft Fresh", "Sweet", "Clean"],
        bestFor: ["Siang/Sore", "Kantor", "Jalan santai"],
        variants: [
            { size: "13ml", price: 65000 },
            { size: "30ml", price: 145000 },
            { size: "50ml", price: 225000 },
        ],
        rating: 4.8,
        reviewCount: 1500,
        isDiscount: false,
        heroTag: ["Fresh", "Citrus", "Musk"],
    },

    {
        id: 8,
        slug: "scent-hild",
        name: "SCENT HILD",
        image: parfum1,
        category: "Daily",
        type: "floral",
        gender: "Unisex (Versatile)",
        shortDescription: "Fresh clean, refined sweet, & rapi.",
        description:
            "Fresh clean dari ozonic notes dengan sentuhan manis refined dari white floral.",
        vibe: ["Fresh Clean", "Refined Sweet", "Neat"],
        bestFor: ["Siang", "Profesional", "Aktivitas harian"],
        variants: [
            { size: "13ml", price: 65000 },
            { size: "30ml", price: 145000 },
            { size: "50ml", price: 225000 },
        ],
        rating: 4.8,
        reviewCount: 1300,
        isDiscount: false,
        heroTag: ["Ozonic", "White Floral", "Clean"],
    },

    {
        id: 9,
        slug: "eight-hild",
        name: "EIGHT HILD",
        image: parfum1,
        category: "Daily",
        type: "oriental",
        gender: "Unisex (Clean)",
        shortDescription: "Fresh double water, cool, & sleek.",
        description:
            "Karakter double water yang sejuk (crisp) dengan struktur musk yang sangat rapi.",
        vibe: ["Fresh", "Cool", "Sleek"],
        bestFor: ["Siang", "Cuaca panas", "Kantor/Kuliah"],
        variants: [
            { size: "13ml", price: 65000 },
            { size: "30ml", price: 145000 },
            { size: "50ml", price: 225000 },
        ],
        rating: 4.7,
        reviewCount: 1100,
        isDiscount: false,
        heroTag: ["Water", "Musk", "Cool"],
    },

    {
        id: 10,
        slug: "eight-ice",
        name: "EIGHT ICE",
        image: parfum1,
        category: "Daily",
        type: "oriental",
        gender: "Unisex (Fresh)",
        shortDescription: "Fresh cool & creamy sweet (chill).",
        description:
            "Sensasi dingin (ozonic/citrus) yang bertemu dengan creamy sweet (almond/vanilla).",
        vibe: ["Fresh Cool", "Creamy Sweet", "Chill"],
        bestFor: ["Siang/Sore santai", "Hangout café"],
        variants: [
            { size: "13ml", price: 65000 },
            { size: "30ml", price: 145000 },
            { size: "50ml", price: 225000 },
        ],
        rating: 4.8,
        reviewCount: 1250,
        isDiscount: false,
        heroTag: ["Ozonic", "Citrus", "Almond"],
    },

    {
        id: 11,
        slug: "hidden-romance",
        name: "HIDDEN ROMANCE",
        image: parfum1,
        category: "Romantic",
        type: "floral",
        gender: "Unisex (Romantic)",
        shortDescription: "Sweet, soft, refined, & dreamy.",
        description:
            "Manis lembut (Praline/Vanilla) dengan bunga putih yang dreamy dan musk halus.",
        vibe: ["Sweet", "Soft", "Dreamy"],
        bestFor: ["Siang/Sore", "Brunch", "Date santai"],
        variants: [
            { size: "13ml", price: 65000 },
            { size: "30ml", price: 145000 },
            { size: "50ml", price: 225000 },
        ],
        rating: 4.8,
        reviewCount: 1700,
        isDiscount: false,
        heroTag: ["Praline", "White Floral", "Musk"],
    },

    {
        id: 12,
        slug: "scent-pinkees",
        name: "SCENT PINKEES",
        image: parfum1,
        category: "Romantic",
        type: "floral",
        gender: "Unisex (Soft-Fem)",
        shortDescription: "Manis lembut, airy, & soft girl vibes.",
        description:
            "Manis ringan dan airy dengan sentuhan musk bersih. Memberikan soft girl vibes.",
        vibe: ["Soft", "Airy", "Sweet"],
        bestFor: ["Siang", "Cuaca cerah", "Weekend vibes"],
        variants: [
            { size: "13ml", price: 65000 },
            { size: "30ml", price: 145000 },
            { size: "50ml", price: 225000 },
        ],
        rating: 4.7,
        reviewCount: 1400,
        isDiscount: false,
        heroTag: ["Soft", "Airy", "Musk"],
    },

    {
        id: 13,
        slug: "scent-live",
        name: "SCENT LIVE",
        image: parfum1,
        category: "Elegant",
        type: "floral",
        gender: "Unisex (Elegant-Fem)",
        shortDescription: "Sweet floral & clean elegance.",
        description:
            "Perpaduan bunga (Peony/Lily) dengan clean elegance dari amber dan citrus ringan.",
        vibe: ["Sweet Floral", "Clean", "Elegant"],
        bestFor: ["Siang/Sore", "Meeting", "Acara keluarga"],
        variants: [
            { size: "13ml", price: 65000 },
            { size: "30ml", price: 145000 },
            { size: "50ml", price: 225000 },
        ],
        rating: 4.8,
        reviewCount: 1450,
        isDiscount: false,
        heroTag: ["Peony", "Lily", "Amber"],
    },

    {
        id: 14,
        slug: "scent-vincent",
        name: "SCENT VINCENT",
        image: parfum1,
        category: "Daily",
        type: "oriental",
        gender: "Unisex (Chill)",
        shortDescription: "Sweet creamy & clean cool (balance).",
        description:
            "Keseimbangan antara manis creamy (Tonka) dengan sensasi adem/cool dari musk.",
        vibe: ["Creamy", "Cool", "Balanced"],
        bestFor: ["Seharian", "Aktivitas rutin", "Santai"],
        variants: [
            { size: "13ml", price: 65000 },
            { size: "30ml", price: 145000 },
            { size: "50ml", price: 225000 },
        ],
        rating: 4.7,
        reviewCount: 1180,
        isDiscount: false,
        heroTag: ["Tonka", "Musk", "Cool"],
    },

    {
        id: 15,
        slug: "savech-hille",
        name: "SAVECH HILLE",
        image: parfum1,
        category: "Masculine",
        type: "spicy",
        gender: "Pria (Masculine)",
        shortDescription: "Fresh bold & clean smooth (tegas).",
        description:
            "Fresh bold dari herbal/citrus yang transisi ke arah kayu (Cedar/Vetiver) yang halus.",
        vibe: ["Fresh Bold", "Clean", "Smooth"],
        bestFor: ["Siang/Sore", "Kerja", "Casual-formal"],
        variants: [
            { size: "13ml", price: 65000 },
            { size: "30ml", price: 145000 },
            { size: "50ml", price: 225000 },
        ],
        rating: 4.8,
        reviewCount: 1550,
        isDiscount: false,
        heroTag: ["Herbal", "Citrus", "Cedar"],
    },

    {
        id: 16,
        slug: "savech-eight",
        name: "SAVECH EIGHT",
        image: parfum1,
        category: "Masculine",
        type: "spicy",
        gender: "Unisex (Masculine)",
        shortDescription: "Fresh power, clean cool, & tajam.",
        description:
            "Kekuatan fresh dari citrus tajam dan marine notes. Memberikan energi instan.",
        vibe: ["Fresh Power", "Cool", "Sharp"],
        bestFor: ["Siang", "Olahraga", "Cuaca panas"],
        variants: [
            { size: "13ml", price: 65000 },
            { size: "30ml", price: 145000 },
            { size: "50ml", price: 225000 },
        ],
        rating: 4.8,
        reviewCount: 1650,
        isDiscount: false,
        heroTag: ["Citrus", "Marine", "Fresh"],
    },

    {
        id: 17,
        slug: "aurora-scent",
        name: "AURORA SCENT",
        image: parfum1,
        category: "Elegant",
        type: "floral",
        gender: "Unisex (Feminine)",
        shortDescription: "Fresh sweet floral & soft glam.",
        description:
            "Perpaduan bunga cerah (Freesia/Rose) dengan soft glam dari musk dan vanilla tipis.",
        vibe: ["Fresh", "Sweet Floral", "Soft Glam"],
        bestFor: ["Pagi/Siang", "Cerah", "Anggun santai"],
        variants: [
            { size: "13ml", price: 65000 },
            { size: "30ml", price: 145000 },
            { size: "50ml", price: 225000 },
        ],
        rating: 4.8,
        reviewCount: 1520,
        isDiscount: false,
        heroTag: ["Freesia", "Rose", "Musk"],
    },
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
        img: parfum6,
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
        img: parfum6,
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
        url: '#shopall'
    },
    {
        name: 'Best Sellers',
        url: '#bestsellers'
    },
    {
        name: 'Sample Sets',
        url: '#whyaura'
    },
]

const listServices = [
    {
        name: 'Orders',
        url: 'https://shopee.co.id/indpafum?entryPoint=ShopBySearch&searchKeyword=indpafum'
    },
    {
        name: 'Details',
        url: '#'
    },
    {
        name: 'FAQs',
        url: '#faq'
    }
]

const listDelivery = [
    {
        name: 'Client Service is Available from 10.00am - 10.00pm at 08129xxxxx, You can also email us. ',
        url: '#'
    },
]

const latestUpdates = [
    {
        title: 'The Art of Layering Fragrances',
        desc: 'Discover the secrets of combining different scents to create your unique signature frafrance that evolves throughout the day.',
        cta: 'Learn more',
        img: parfum6,
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
        url: "https://www.instagram.com/indpafum.store?igsh=MTAyOWRmNjFtNnk4aw%3D%3D",
    },
    {
        name: "Shoppe",
        icon: "ri-shopping-bag-fill",
        url: "https://shopee.co.id/indpafum?shopCollection=256100839#product_list",
    },
    {
        name: "Whatsapp",
        icon: "ri-whatsapp-line",
        url: "#",
    },
    {
        name: "Tiktok",
        icon: "ri-tiktok-fill",
        url: "https://www.tiktok.com/@indpafum.official",
    },
];

export { navLinks, heroBanner, buttonBestSellers, auraParfum, bestSellers, products, singleParfum, blogParfum, listFaq, openingHours, listShop, listServices, listDelivery, socials, latestUpdates }