export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  material: string;
  color: string;
  description: string;
  details: string[];
}

export const ALL_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'White Elegance',
    price: 299,
    image: '/images/whiteshirt.png',
    material: 'Premium Egyptian Cotton',
    color: '#FFFFFF',
    description:
      'A masterpiece of pure simplicity. The White Elegance shirt is woven from the rarest Giza 45 Egyptian cotton, achieving a hand feel so refined it borders on silk. Its structured collar and French seams speak to a tradition of excellence that transcends seasons.',
    details: [
      'Giza 45 Egyptian Cotton — 200-thread count',
      'Mother-of-pearl buttons',
      'French seam construction',
      'Single-needle topstitching throughout',
      'Slim-fit, tailored silhouette',
    ],
  },
  {
    id: '2',
    name: 'Burgundy Sophistication',
    price: 329,
    image: '/images/redshirt.png',
    material: 'Premium Blend, Egyptian Cotton',
    color: '#6B1D1D',
    description:
      'Command every room. The Burgundy Sophistication shirt blends premium Egyptian cotton with a luxurious woven finish, creating a depth of color that photography struggles to capture. Engineered for the man who understands that true power is understated.',
    details: [
      'Egyptian Cotton & Premium Blend weave',
      'Double-button barrel cuffs',
      'Reinforced collar stays',
      'Contrast interior placket in ivory',
      'Classic-fit, structured silhouette',
    ],
  },
  {
    id: '3',
    name: 'Sky Blue Premium',
    price: 319,
    image: '/images/blueshirt.png',
    material: 'Supima Cotton, Egyptian Cotton',
    color: '#87CEEB',
    description:
      'The crisp clarity of a perfect sky. The Sky Blue Premium shirt pairs American Supima cotton with Egyptian fibers for an extraordinary softness and a color that stays vivid wash after wash. A shirt that works as hard as you do, without ever looking like it.',
    details: [
      'Supima Cotton & Egyptian Cotton blend',
      'Color-fast reactive dyeing process',
      'Spread collar with removable stays',
      'Box pleat at the back yoke',
      'Slim-fit, tailored silhouette',
    ],
  },
  {
    id: '4',
    name: 'Charcoal Refined',
    price: 309,
    image: '/images/greyshirt.png',
    material: 'Linen Blend, Egyptian Cotton',
    color: '#36454F',
    description:
      'Effortless authority in a neutral tone. The Charcoal Refined shirt weaves premium linen into Egyptian cotton for a texture that breathes naturally while holding a razor-sharp silhouette. Timeless enough for the boardroom, relaxed enough for the weekend.',
    details: [
      'Linen & Egyptian Cotton performance blend',
      'Natural temperature regulation',
      'Matte gunmetal buttons',
      'Double-stitched side seams',
      'Relaxed-slim fit silhouette',
    ],
  },
  {
    id: '5',
    name: 'Ivory Luxury',
    price: 289,
    image: '/images/whiteshirt.png',
    material: 'Egyptian Cotton',
    color: '#FFFFF0',
    description:
      'The warmth of ivory, the precision of couture. The Ivory Luxury shirt is crafted from single-origin Egyptian cotton with a warm off-white tone that flatters every complexion. A shirt born for candlelight dinners and important first impressions.',
    details: [
      'Single-origin Egyptian Cotton',
      'Tone-on-tone mother-of-pearl buttons',
      'Hidden placket front',
      'Cutaway collar',
      'Slim-fit, tailored silhouette',
    ],
  },
  {
    id: '6',
    name: 'Navy Prestige',
    price: 339,
    image: '/images/redshirt.png',
    material: 'Premium Blend',
    color: '#000080',
    description:
      `The definitive power shirt. Navy Prestige is constructed from a heritage premium blend that holds its structure even after a full day's wear. Its deep navy hue is rich without being ostentatious — the choice of those who lead quietly.`,
    details: [
      'Heritage Premium Blend fabric',
      'Wrinkle-resistant weave technology',
      'Gold-tone buttons',
      'Placket with precision stitching',
      'Classic-fit, structured silhouette',
    ],
  },
  {
    id: '7',
    name: 'Pearl White',
    price: 299,
    image: '/images/blueshirt.png',
    material: 'Supima Cotton',
    color: '#FDEEF4',
    description:
      'Luminous. Effortless. Enduring. The Pearl White shirt draws its iridescent tone from the rarest Supima cotton fields in California, producing a fiber longer and silkier than standard cotton. Each shirt is a garment you will reach for again and again.',
    details: [
      '100% American Supima Cotton',
      'Extra-long staple fiber for superior softness',
      'Nacre-finish pearl buttons',
      'Split-back yoke for freedom of movement',
      'Slim-fit, tailored silhouette',
    ],
  },
  {
    id: '8',
    name: 'Slate Gray',
    price: 319,
    image: '/images/greyshirt.png',
    material: 'Linen Blend',
    color: '#708090',
    description:
      'Urban sophistication, naturally breathable. The Slate Gray shirt uses a refined linen blend to create a cool, textured surface that pairs with everything from tailored trousers to dark denim. A shirt that earns its place in the permanent rotation.',
    details: [
      'Premium European Linen Blend',
      'Natural fiber moisture wicking',
      'Brushed-steel buttons',
      'Relaxed point collar',
      'Relaxed-slim fit silhouette',
    ],
  },
];

export const FEATURED_PRODUCTS = ALL_PRODUCTS.slice(0, 4);
