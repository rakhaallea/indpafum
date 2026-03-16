import parfum1_15 from "@/public/img/1_15ml.png";
import parfum1_30 from "@/public/img/1_30ml.png";
import parfum1_50 from "@/public/img/1_50ml.png";

import parfum2_15 from "@/public/img/2_15ml.png";
import parfum2_30 from "@/public/img/2_30ml.png";
import parfum2_50 from "@/public/img/2_50ml.png";

import parfum3_15 from "@/public/img/3_15ml.png";
import parfum3_30 from "@/public/img/3_30ml.png";
import parfum3_50 from "@/public/img/3_50ml.png";

import parfum4_15_cust from "@/public/img/4_15ml_custom.png";
import parfum4_30_cust from "@/public/img/4_30ml_custom.png";
import parfum4_50_cust from "@/public/img/4_50ml_custom.png";
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
        id: "#shopAll",
        title: "shop All",
    },
    {
        id: "#lattestperfumes",
        title: "Lattest Perfumes",
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

const buttonBestSellers = ["All", "Night", "Daily", "Elegant", "Romantic", "Masculine", "Custom"];

const products = [
    {
        id: 1,
        slug: "scent-black",
        name: "SCENT BLACK",
        image: parfum1_30,
        category: "Night",
        type: "oriental",
        gender: "Unisex (Elegant)",
        shortDescription: "Sweet warm, dark, & bold.",
        description:
            "Kombinasi vanilla & tonka bean (sweet) dengan depth dari patchouli & sandalwood (dark/bold).",
        vibe: ["Sweet", "Warm", "Dark", "Bold"],
        bestFor: ["Malam", "Acara resmi", "Cuaca sejuk"],
        variants: [
            { size: "13ml", price: 65000, image: parfum1_15, link: "#" },
            { size: "30ml", price: 145000, image: parfum1_30, link: "#" },
            { size: "50ml", price: 225000, image: parfum1_50, link: "#" },
        ],
        isBestSeller: true,
        heroTag: ["Oriental", "Woody", "Spicy"],
    },

    {
        id: 2,
        slug: "black-red",
        name: "BLACK RED",
        image: parfum2_30,
        category: "Night",
        type: "spicy",
        gender: "Unisex (Bold)",
        shortDescription: "Dark sweet, luxury glow, & intense.",
        description:
            "Perpaduan vanilla pekat, karamel, dan amber yang intens. Memberikan efek luxury glow.",
        vibe: ["Dark Sweet", "Luxury", "Intense"],
        bestFor: ["Malam", "Date night", "Acara mewah"],
        variants: [
            { size: "13ml", price: 65000, image: parfum2_15, link: "#" },
            { size: "30ml", price: 145000, image: parfum2_30, link: "#" },
            { size: "50ml", price: 225000, image: parfum2_50, link: "#" },
        ],
        isBestSeller: false,
        heroTag: ["Amber", "Caramel", "Vanilla"],
    },

    {
        id: 3,
        slug: "unique",
        name: "UNIQUE",
        image: parfum3_30,
        category: "Romantic",
        type: "floral",
        gender: "Unisex (Mysterious)",
        shortDescription: "Sweet romantic & dark elegance.",
        description:
            "Perpaduan bunga (Rose/Jasmine) dengan sentuhan misterius dari amber & rempah halus.",
        vibe: ["Sweet", "Romantic", "Dark Elegance"],
        bestFor: ["Malam", "Acara istimewa", "Sensual"],
        variants: [
            { size: "13ml", price: 65000, image: parfum3_15, link: "#" },
            { size: "30ml", price: 145000, image: parfum3_30, link: "#" },
            { size: "50ml", price: 225000, image: parfum3_50, link: "#" },
        ],
        isBestSeller: false,
        heroTag: ["Rose", "Floral", "Amber"],
    },

    {
        id: 4,
        slug: "monic",
        name: "MONIC",
        image: parfum2_30,
        category: "Elegant",
        type: "floral",
        gender: "Unisex (Elegant-Fem)",
        shortDescription: "Manis mewah, creamy hangat, & long-lasting.",
        description:
            "Manis mewah dengan tekstur creamy dari sandalwood dan almond. Lembut tapi tahan lama.",
        vibe: ["Sweet", "Creamy", "Warm", "Long-lasting"],
        bestFor: ["Sore/Malam", "Dinner", "Ruangan AC"],
        variants: [
            { size: "13ml", price: 65000, image: parfum2_15, link: "#" },
            { size: "30ml", price: 145000, image: parfum2_30, link: "#" },
            { size: "50ml", price: 225000, image: parfum2_50, link: "#" },
        ],
        isBestSeller: true,
        heroTag: ["Creamy", "Sweet", "Sandalwood"],
    },

    {
        id: 5,
        slug: "the-parfume",
        name: "THE PARFUME",
        image: parfum1_30,
        category: "Daily",
        type: "oriental",
        gender: "Unisex (Balanced)",
        shortDescription: "Sweet meets bold & clean sophistication.",
        description:
            "Transisi dari manis halus (Vanilla) menuju struktur clean dari musk dan kayu.",
        vibe: ["Sweet", "Bold", "Clean"],
        bestFor: ["Siang/Malam", "Meeting", "Event semi-formal"],
        variants: [
            { size: "13ml", price: 65000, image: parfum1_15, link: "#" },
            { size: "30ml", price: 145000, image: parfum1_30, link: "#" },
            { size: "50ml", price: 225000, image: parfum1_50, link: "#" },
        ],
        isBestSeller: false,
        heroTag: ["Vanilla", "Musk", "Woody"],
    },

    {
        id: 6,
        slug: "the-parfume-femme",
        name: "THE PARFUME FEMME",
        image: parfum2_30,
        category: "Elegant",
        type: "spicy",
        gender: "Feminine (Modern)",
        shortDescription: "Sweet, bold, & elegant femininity.",
        description:
            "Manis gourmand (Caramel/Vanilla) yang dipadukan dengan bunga putih (Peony/Rose).",
        vibe: ["Sweet", "Bold", "Elegant Feminine"],
        bestFor: ["Siang/Malam", "Kencan", "Acara sosial"],
        variants: [
            { size: "13ml", price: 65000, image: parfum2_15, link: "#" },
            { size: "30ml", price: 145000, image: parfum2_30, link: "#" },
            { size: "50ml", price: 225000, image: parfum2_50, link: "#" },
        ],
        isBestSeller: true,
        heroTag: ["Floral", "Sweet", "Modern"],
    },

    {
        id: 7,
        slug: "scent-vishes",
        name: "SCENT VISHES",
        image: parfum2_30,
        category: "Daily",
        type: "floral",
        gender: "Unisex (Fem-Clean)",
        shortDescription: "Soft fresh, gracefully sweet, & halus.",
        description:
            "Soft fresh dari citrus/apel dengan sentuhan bunga freesia dan musk yang halus.",
        vibe: ["Soft Fresh", "Sweet", "Clean"],
        bestFor: ["Siang/Sore", "Kantor", "Jalan santai"],
        variants: [
            { size: "13ml", price: 65000, image: parfum2_15, link: "#" },
            { size: "30ml", price: 145000, image: parfum2_30, link: "#" },
            { size: "50ml", price: 225000, image: parfum2_50, link: "#" },
        ],
        isBestSeller: false,
        heroTag: ["Fresh", "Citrus", "Musk"],
    },

    {
        id: 8,
        slug: "scent-hild",
        name: "SCENT HILD",
        image: parfum2_30,
        category: "Daily",
        type: "floral",
        gender: "Unisex (Versatile)",
        shortDescription: "Fresh clean, refined sweet, & rapi.",
        description:
            "Fresh clean dari ozonic notes dengan sentuhan manis refined dari white floral.",
        vibe: ["Fresh Clean", "Refined Sweet", "Neat"],
        bestFor: ["Siang", "Profesional", "Aktivitas harian"],
        variants: [
            { size: "13ml", price: 65000, image: parfum2_15, link: "#" },
            { size: "30ml", price: 145000, image: parfum2_30, link: "#" },
            { size: "50ml", price: 225000, image: parfum2_50, link: "#" },
        ],
        isBestSeller: false,
        heroTag: ["Ozonic", "White Floral", "Clean"],
    },

    {
        id: 9,
        slug: "eight-hild",
        name: "EIGHT HILD",
        image: parfum1_30,
        category: "Daily",
        type: "oriental",
        gender: "Unisex (Clean)",
        shortDescription: "Fresh double water, cool, & sleek.",
        description:
            "Karakter double water yang sejuk (crisp) dengan struktur musk yang sangat rapi.",
        vibe: ["Fresh", "Cool", "Sleek"],
        bestFor: ["Siang", "Cuaca panas", "Kantor/Kuliah"],
        variants: [
            { size: "13ml", price: 65000, image: parfum1_15, link: "#" },
            { size: "30ml", price: 145000, image: parfum1_30, link: "#" },
            { size: "50ml", price: 225000, image: parfum1_50, link: "#" },
        ],
        isBestSeller: false,
        heroTag: ["Water", "Musk", "Cool"],
    },

    {
        id: 10,
        slug: "eight-ice",
        name: "EIGHT ICE",
        image: parfum1_30,
        category: "Daily",
        type: "oriental",
        gender: "Unisex (Fresh)",
        shortDescription: "Fresh cool & creamy sweet (chill).",
        description:
            "Sensasi dingin (ozonic/citrus) yang bertemu dengan creamy sweet (almond/vanilla).",
        vibe: ["Fresh Cool", "Creamy Sweet", "Chill"],
        bestFor: ["Siang/Sore santai", "Hangout café"],
        variants: [
            { size: "13ml", price: 65000, image: parfum1_15, link: "#" },
            { size: "30ml", price: 145000, image: parfum1_30, link: "#" },
            { size: "50ml", price: 225000, image: parfum1_50, link: "#" },
        ],
        isBestSeller: false,
        heroTag: ["Ozonic", "Citrus", "Almond"],
    },

    {
        id: 11,
        slug: "hidden-romance",
        name: "HIDDEN ROMANCE",
        image: parfum2_30,
        category: "Romantic",
        type: "floral",
        gender: "Unisex (Romantic)",
        shortDescription: "Sweet, soft, refined, & dreamy.",
        description:
            "Manis lembut (Praline/Vanilla) dengan bunga putih yang dreamy dan musk halus.",
        vibe: ["Sweet", "Soft", "Dreamy"],
        bestFor: ["Siang/Sore", "Brunch", "Date santai"],
        variants: [
            { size: "13ml", price: 65000, image: parfum2_15, link: "#" },
            { size: "30ml", price: 145000, image: parfum2_30, link: "#" },
            { size: "50ml", price: 225000, image: parfum2_50, link: "#" },
        ],
        isBestSeller: false,
        heroTag: ["Praline", "White Floral", "Musk"],
    },

    {
        id: 12,
        slug: "scent-pinkees",
        name: "SCENT PINKEES",
        image: parfum2_30,
        category: "Romantic",
        type: "floral",
        gender: "Unisex (Soft-Fem)",
        shortDescription: "Manis lembut, airy, & soft girl vibes.",
        description:
            "Manis ringan dan airy dengan sentuhan musk bersih. Memberikan soft girl vibes.",
        vibe: ["Soft", "Airy", "Sweet"],
        bestFor: ["Siang", "Cuaca cerah", "Weekend vibes"],
        variants: [
            { size: "13ml", price: 65000, image: parfum2_15, link: "#" },
            { size: "30ml", price: 145000, image: parfum2_30, link: "#" },
            { size: "50ml", price: 225000, image: parfum2_50, link: "#" },
        ],
        isBestSeller: false,
        heroTag: ["Soft", "Airy", "Musk"],
    },

    {
        id: 13,
        slug: "scent-live",
        name: "SCENT LIVE",
        image: parfum2_30,
        category: "Elegant",
        type: "floral",
        gender: "Unisex (Elegant-Fem)",
        shortDescription: "Sweet floral & clean elegance.",
        description:
            "Perpaduan bunga (Peony/Lily) dengan clean elegance dari amber dan citrus ringan.",
        vibe: ["Sweet Floral", "Clean", "Elegant"],
        bestFor: ["Siang/Sore", "Meeting", "Acara keluarga"],
        variants: [
            { size: "13ml", price: 65000, image: parfum2_15, link: "#" },
            { size: "30ml", price: 145000, image: parfum2_30, link: "#" },
            { size: "50ml", price: 225000, image: parfum2_50, link: "#" },
        ],
        isBestSeller: false,
        heroTag: ["Peony", "Lily", "Amber"],
    },

    {
        id: 14,
        slug: "scent-vincent",
        name: "SCENT VINCENT",
        image: parfum1_30,
        category: "Daily",
        type: "oriental",
        gender: "Unisex (Chill)",
        shortDescription: "Sweet creamy & clean cool (balance).",
        description:
            "Keseimbangan antara manis creamy (Tonka) dengan sensasi adem/cool dari musk.",
        vibe: ["Creamy", "Cool", "Balanced"],
        bestFor: ["Seharian", "Aktivitas rutin", "Santai"],
        variants: [
            { size: "13ml", price: 65000, image: parfum1_15, link: "#" },
            { size: "30ml", price: 145000, image: parfum1_30, link: "#" },
            { size: "50ml", price: 225000, image: parfum1_50, link: "#" },
        ],
        isBestSeller: false,
        heroTag: ["Tonka", "Musk", "Cool"],
    },

    {
        id: 15,
        slug: "savech-hille",
        name: "SAVECH HILLE",
        image: parfum2_30,
        category: "Masculine",
        type: "spicy",
        gender: "Pria (Masculine)",
        shortDescription: "Fresh bold & clean smooth (tegas).",
        description:
            "Fresh bold dari herbal/citrus yang transisi ke arah kayu (Cedar/Vetiver) yang halus.",
        vibe: ["Fresh Bold", "Clean", "Smooth"],
        bestFor: ["Siang/Sore", "Kerja", "Casual-formal"],
        variants: [
            { size: "13ml", price: 65000, image: parfum2_15, link: "#" },
            { size: "30ml", price: 145000, image: parfum2_30, link: "#" },
            { size: "50ml", price: 225000, image: parfum2_50, link: "#" },
        ],
        isBestSeller: false,
        heroTag: ["Herbal", "Citrus", "Cedar"],
    },

    {
        id: 16,
        slug: "savech-eight",
        name: "SAVECH EIGHT",
        image: parfum2_30,
        category: "Masculine",
        type: "spicy",
        gender: "Unisex (Masculine)",
        shortDescription: "Fresh power, clean cool, & tajam.",
        description:
            "Kekuatan fresh dari citrus tajam dan marine notes. Memberikan energi instan.",
        vibe: ["Fresh Power", "Cool", "Sharp"],
        bestFor: ["Siang", "Olahraga", "Cuaca panas"],
        variants: [
            { size: "13ml", price: 65000, image: parfum2_15, link: "#" },
            { size: "30ml", price: 145000, image: parfum2_30, link: "#" },
            { size: "50ml", price: 225000, image: parfum2_50, link: "#" },
        ],
        isBestSeller: false,
        heroTag: ["Citrus", "Marine", "Fresh"],
    },

    {
        id: 17,
        slug: "aurora-scent",
        name: "AURORA SCENT",
        image: parfum2_30,
        category: "Elegant",
        type: "floral",
        gender: "Unisex (Feminine)",
        shortDescription: "Fresh sweet floral & soft glam.",
        description:
            "Perpaduan bunga cerah (Freesia/Rose) dengan soft glam dari musk dan vanilla tipis.",
        vibe: ["Fresh", "Sweet Floral", "Soft Glam"],
        bestFor: ["Pagi/Siang", "Cerah", "Anggun santai"],
        variants: [
            { size: "13ml", price: 65000, image: parfum2_15, link: "#" },
            { size: "30ml", price: 145000, image: parfum2_30, link: "#" },
            { size: "50ml", price: 225000, image: parfum2_50, link: "#" },
        ],
        isBestSeller: true,
        heroTag: ["Freesia", "Rose", "Musk"],
    },
    {
        id: 18,
        slug: "custom-premium",
        name: "CUSTOM PREMIUM",
        image: parfum4_30_cust, // image default untuk custom
        category: "Custom",
        type: "bespoke",
        gender: "Unisex (Flexible)",
        shortDescription: "Racik karaktermu sendiri. Eksklusif & personal.",
        description:
            "Buat wewangian signature-mu sendiri! Pilih kombinasi notes favorit (floral, woody, fresh, atau gourmand) dan kami akan meraciknya secara eksklusif untukmu. Experience wewangian personal yang tidak dimiliki orang lain.",
        vibe: ["Personal", "Exclusive", "Bespoke", "Signature"],
        bestFor: ["Semua acara", "Hadiah spesial", "Identity signature"],
        variants: [
            { size: "15ml", price: 65000, image: parfum4_15_cust, link: "#" },
            { size: "30ml", price: 150000, image: parfum4_30_cust, link: "#" },
            { size: "50ml", price: 225000, image: parfum4_50_cust, link: "#" },
        ],
        isBestSeller: false,
        heroTag: ["Bespoke", "Signature", "Exclusive"],
    },
    {
        id: 19,
        slug: "custom-biasa",
        name: "CUSTOM BIASA",
        image: parfum4_30_cust, // image default untuk custom
        category: "Custom",
        type: "bespoke",
        gender: "Unisex (Flexible)",
        shortDescription: "Racik karaktermu sendiri. Eksklusif & personal.",
        description:
            "Buat wewangian signature-mu sendiri! Pilih kombinasi notes favorit (floral, woody, fresh, atau gourmand) dan kami akan meraciknya secara eksklusif untukmu. Experience wewangian personal yang tidak dimiliki orang lain.",
        vibe: ["Personal", "Exclusive", "Bespoke", "Signature"],
        bestFor: ["Semua acara", "Hadiah spesial", "Identity signature"],
        variants: [
            { size: "15ml", price: 65000, image: parfum4_15_cust, link: "#" },
            { size: "30ml", price: 70000, image: parfum4_30_cust, link: "#" },
            { size: "50ml", price: 100000, image: parfum4_50_cust, link: "#" },
        ],
        isBestSeller: false,
        heroTag: ["Bespoke", "Signature", "Exclusive"],
    },
];

// const bestSellers = [
//     // NIGHT
//     {
//         img: parfum1_30,
//         title: 'Moonlit Flour - Eau de Parfum',
//         desc: 'A scent for midnight souls—floral, spicy, and hypnotic.',
//         size: '50ml',
//         price: 'Rp.120.000,00',
//         category: "Night"
//     },
//     {
//         img: parfum1_30,
//         title: 'Nocturnal Whisper - Eau de Parfum',
//         desc: 'Dark berries, soft musk, and warm vanilla for deep evenings.',
//         size: '50ml',
//         price: 'Rp.130.000,00',
//         category: "Night"
//     },
//     {
//         img: parfum1_30,
//         title: 'Velvet Midnight - Eau de Parfum',
//         desc: 'Smooth amber with a seductive smoky finish.',
//         size: '50ml',
//         price: 'Rp.140.000,00',
//         category: "Night"
//     },

//     // DAILY
//     {
//         img: parfum3_30,
//         title: 'Pure Blossom - Eau de Parfum',
//         desc: 'Soft floral freshness perfect for everyday use.',
//         size: '50ml',
//         price: 'Rp.110.000,00',
//         category: "Daily"
//     },
//     {
//         img: parfum3_30,
//         title: 'Morning Dew - Eau de Parfum',
//         desc: 'Crisp green tea and citrus blend for a refreshing daily vibe.',
//         size: '50ml',
//         price: 'Rp.115.000,00',
//         category: "Daily"
//     },
//     {
//         img: parfum3_30,
//         title: 'Soft Breeze - Eau de Parfum',
//         desc: 'Clean cotton notes with a soft airy finish.',
//         size: '50ml',
//         price: 'Rp.105.000,00',
//         category: "Daily"
//     },

//     // ELEGANT
//     {
//         img: parfum2_30,
//         title: 'Royal Essence - Eau de Parfum',
//         desc: 'Luxurious white florals wrapped with creamy sandalwood.',
//         size: '50ml',
//         price: 'Rp.150.000,00',
//         category: "Elegant"
//     },
//     {
//         img: parfum2_30,
//         title: 'Opaline Glow - Eau de Parfum',
//         desc: 'Elegant jasmine and warm vanilla in a timeless blend.',
//         size: '50ml',
//         price: 'Rp.145.000,00',
//         category: "Elegant"
//     },
//     {
//         img: parfum2_30,
//         title: 'Silver Aura - Eau de Parfum',
//         desc: 'Refined citrus and musk with a modern luxury feel.',
//         size: '50ml',
//         price: 'Rp.155.000,00',
//         category: "Elegant"
//     },

//     // ROMANTIC
//     {
//         img: parfum3_30,
//         title: 'Crimson Rose - Eau de Parfum',
//         desc: 'Deep red roses with a hint of sweet warmth.',
//         size: '50ml',
//         price: 'Rp.130.000,00',
//         category: "Romantic"
//     },
//     {
//         img: parfum3_30,
//         title: 'Blush Petals - Eau de Parfum',
//         desc: 'Soft pink florals for a gentle romantic mood.',
//         size: '50ml',
//         price: 'Rp.125.000,00',
//         category: "Romantic"
//     },
//     {
//         img: parfum3_30,
//         title: 'Lover’s Serenity - Eau de Parfum',
//         desc: 'Sweet pear blossoms combined with soft musk.',
//         size: '50ml',
//         price: 'Rp.135.000,00',
//         category: "Romantic"
//     },

//     // WARM
//     {
//         img: parfum1_30,
//         title: 'Amber Heat - Eau de Parfum',
//         desc: 'Warm amber and spiced vanilla creating a cozy aura.',
//         size: '50ml',
//         price: 'Rp.140.000,00',
//         category: "Warm"
//     },
//     {
//         img: parfum1_30,
//         title: 'Golden Ember - Eau de Parfum',
//         desc: 'Burnt caramel and warm woods—comforting and rich.',
//         size: '50ml',
//         price: 'Rp.145.000,00',
//         category: "Warm"
//     },
//     {
//         img: parfum1_30,
//         title: 'Honey Spice - Eau de Parfum',
//         desc: 'Sweet honey with cinnamon warmth for bold personalities.',
//         size: '50ml',
//         price: 'Rp.120.000,00',
//         category: "Warm"
//     },

//     // EXTRA RANDOM VARIASI (BONUS)
//     {
//         img: parfum2_30,
//         title: 'Crystal Dawn - Eau de Parfum',
//         desc: 'Fresh citrus with musky undertones—light and uplifting.',
//         size: '50ml',
//         price: 'Rp.115.000,00',
//         category: "Daily"
//     },
//     {
//         img: parfum2_30,
//         title: 'Obsidian Nightfall - Eau de Parfum',
//         desc: 'Intense dark spices perfect for late-night elegance.',
//         size: '50ml',
//         price: 'Rp.150.000,00',
//         category: "Night"
//     },
//     {
//         img: parfum2_30,
//         title: 'Pearl Satin - Eau de Parfum',
//         desc: 'Soft oriental florals giving a refined feminine aura.',
//         size: '50ml',
//         price: 'Rp.135.000,00',
//         category: "Elegant"
//     },
//     {
//         img: parfum2_30,
//         title: 'Romance Mist - Eau de Parfum',
//         desc: 'Sweet berries combined with gentle floral notes.',
//         size: '50ml',
//         price: 'Rp.128.000,00',
//         category: "Romantic"
//     },
//     {
//         img: parfum2_30,
//         title: 'Warm Silk - Eau de Parfum',
//         desc: 'Creamy tonka bean layered with soft vanilla warmth.',
//         size: '50ml',
//         price: 'Rp.138.000,00',
//         category: "Warm"
//     }
// ];


// const auraParfum = [
//     {
//         img: parfum6,
//         title: 'Moonlit Flour - Eau de Parfum',
//         desc: 'Confident. Grounded. Magnetic.Explore deep, woody, and spicy compositionscrafted  to leave a bold, lasting impression.',
//         cta: 'Browse Men’s Scents',
//     },
//     {
//         img: parfum1_15,
//         title: 'Moonlit Flour - Eau de Parfum',
//         desc: 'Confident. Grounded. Magnetic.Explore deep, woody, and spicy compositionscrafted  to leave a bold, lasting impression.',
//         cta: 'Browse Men’s Scents',
//     },
//     {
//         img: parfum6,
//         title: 'Moonlit Flour - Eau de Parfum',
//         desc: 'Confident. Grounded. Magnetic.Explore deep, woody, and spicy compositionscrafted  to leave a bold, lasting impression.',
//         cta: 'Browse Men’s Scents',
//     },
//     {
//         img: parfum1_15,
//         title: 'Moonlit Flour - Eau de Parfum',
//         desc: 'Confident. Grounded. Magnetic.Explore deep, woody, and spicy compositionscrafted  to leave a bold, lasting impression.',
//         cta: 'Browse Men’s Scents',
//     },
// ]

// const singleParfum = [
//     {
//         img: parfum1,
//         title: 'Aura for Everyone',
//         subTitle: 'A scent for every soul, every story',
//         desc: 'A hypnotic blend oif night-blooming jasmine, warm amber, and exotic spices. Perfect for the mysterious and alluring.',
//         disc: 'Rp.85.000,00',
//         price: 'Rp.100.000,00',
//         type: 'oriental'
//     },
//     {
//         img: parfum2,
//         title: 'Aura for Everyone',
//         subTitle: 'A scent for every soul, every story',
//         desc: 'A hypnotic blend oif night-blooming jasmine, warm amber, and exotic spices. Perfect for the mysterious and alluring.',
//         disc: 'Rp.75.000,00',
//         price: 'Rp.90.000,00',
//         type: 'floral'
//     },
//     {
//         img: parfum3,
//         title: 'Aura for Everyone',
//         subTitle: 'A scent for every soul, every story',
//         desc: 'A hypnotic blend oif night-blooming jasmine, warm amber, and exotic spices. Perfect for the mysterious and alluring.',
//         disc: 'Rp.90.000,00',
//         price: 'Rp.120.000,00',
//         type: 'spicy'
//     },
// ]

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
        title: "Berapa lama ketahanan parfum ini?",
        desc: "Parfum kami memiliki ketahanan sekitar 6–10 jam tergantung jenis kulit, aktivitas, dan kondisi cuaca. Untuk hasil terbaik, semprotkan pada titik nadi seperti pergelangan tangan, leher, dan belakang telinga."
    },
    {
        title: "Apa saja ukuran parfum yang tersedia?",
        desc: "Setiap parfum tersedia dalam tiga ukuran: 13ml (travel size), 30ml (daily use), dan 50ml (full size) sehingga kamu bisa memilih sesuai kebutuhan."
    },
    {
        title: "Apakah parfum ini bisa digunakan pria dan wanita?",
        desc: "Sebagian besar parfum kami bersifat unisex sehingga bisa digunakan oleh pria maupun wanita. Setiap aroma memiliki karakter berbeda seperti floral, oriental, spicy, atau fresh."
    },
    {
        title: "Bagaimana cara menyimpan parfum agar tahan lama?",
        desc: "Simpan parfum di tempat yang sejuk dan kering, jauh dari sinar matahari langsung atau panas. Pastikan botol selalu tertutup rapat agar kualitas aroma tetap terjaga."
    },
    {
        title: "Berapa lama proses pengiriman?",
        desc: "Pesanan biasanya diproses dalam waktu 24 jam setelah pembayaran. Estimasi pengiriman sekitar 2–5 hari kerja tergantung lokasi tujuan."
    },
    {
        title: "Apakah produk bisa ditukar atau dikembalikan?",
        desc: "Jika produk yang diterima rusak atau tidak sesuai pesanan, silakan hubungi kami maksimal 48 jam setelah produk diterima untuk proses penukaran."
    }
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
        name: 'Lattest Perfumes',
        url: '#lattestperfumes'
    },
    {
        name: 'Best Sellers',
        url: '#bestsellers'
    },
]

const listServices = [
    {
        name: 'Orders',
        url: 'https://shopee.co.id/indpafum?entryPoint=ShopBySearch&searchKeyword=indpafum'
    },
    {
        name: 'FAQs',
        url: '#faq'
    },
    {
        name: 'Contact Us',
        url: '#contactus'
    },
]

const listDelivery = [
    {
        name: 'Client Service is Available from 10.00am - 10.00pm at 081251167168, You can also email us. ',
        url: 'https://wa.me/081251167168?text=Halo%20Indpafum%2C%20saya%20ingin%20bertanya%20tentang%20produk%20parfum%20Anda.'
    },
]

const latestUpdates = [
    {
        title: 'The Art of Layering Fragrances',
        desc: 'Discover the secrets of combining different scents to create your unique signature frafrance that evolves throughout the day.',
        cta: 'Learn more',
        img: parfum1_15,
        date: 'Oktober 15, 2025',
    },
    {
        title: 'The Art of Layering Fragrances',
        desc: 'Discover the secrets of combining different scents to create your unique signature frafrance that evolves throughout the day.',
        cta: 'Learn more',
        img: parfum2_15,
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
        url: "https://wa.me/081251167168?text=Halo%20Indpafum%2C%20saya%20ingin%20bertanya%20tentang%20produk%20parfum%20Anda.",
    },
    {
        name: "Tiktok",
        icon: "ri-tiktok-fill",
        url: "https://www.tiktok.com/@indpafum.official",
    },
];

export { navLinks, heroBanner, buttonBestSellers, products, blogParfum, listFaq, openingHours, listShop, listServices, listDelivery, socials, latestUpdates }