import { WHATSAPP_NUMBER } from '@/data/config';

export const categories = [
  { id: "matafuegos", name: "Matafuegos", icon: "🧯" },
  { id: "kits", name: "Kits Vehiculares", icon: "🚗" },
  { id: "accesorios", name: "Accesorios y Cosmética", icon: "✨" },
];

export const products = [
  {
    id: "abc-1kg",
    name: "Matafuego ABC 1kg",
    category: "matafuegos",
    description: "Extintor multipropósito para hogar y automotor. Eficaz en fuegos clase A, B y C.",
    price: "$38.000 sin IVA",
    whatsapp: `Hola, quisiera consultar por el Matafuego ABC 1kg.`,
  },
  {
    id: "abc-2-5kg",
    name: "Matafuego ABC 2.5kg",
    category: "matafuegos",
    description: "Ideal para comercios y oficinas. Cumple con normas IRAM para habilitaciones.",
    price: "$75.000 sin IVA (Horizonte) o $85.000 sin IVA (Melisam)",
    whatsapp: `Hola, quisiera consultar por el Matafuego ABC 2.5kg.`,
  },
  {
    id: "abc-5kg",
    name: "Matafuego ABC 5kg",
    category: "matafuegos",
    description: "Para industrias y depósitos. Mayor capacidad de extinción.",
    price: "$90.000 sin IVA (Horizonte) o $107.000 sin IVA (Melisam) ",
    whatsapp: `Hola, quisiera consultar por el Matafuego ABC 5kg.`,
  },
  {
    id: "co2-2kg",
    name: "Matafuego CO2 2kg",
    category: "matafuegos",
    description: "Para equipos eléctricos y electrónicos. No daña los circuitos ni deja residuos.",
    price: "Precio a consultar debido disponibilidad.",
    whatsapp: `Hola, quisiera consultar por el Matafuego CO2 2kg.`,
  },
  {
    id: "clase-k",
    name: "Matafuego Clase K",
    category: "matafuegos",
    description: "Especial para cocinas y restaurantes. Aceites y grasas vegetales/animales.",
    price: "Precio a consultar debido disponibilidad.",
    whatsapp: `Hola, quisiera consultar por el Matafuego Clase K.`,
  },
  {
    id: "kit-vtv",
    name: "Kit VTV Completo",
    category: "kits",
    description: "Balizas triangulares + chaleco reflectivo + botiquín. Todo para la VTV.",
    price: "A consultar dependiendo del kit que desees.",
    whatsapp: `Hola, quisiera consultar por el Kit VTV Completo.`,
  },
  {
    id: "balizas",
    name: "Balizas Triangulares",
    category: "kits",
    description: "Señales reflectivas de emergencia. Homologadas para VTV.",
    price: "Consultar precio ya que hay diferentes tipos de balizas",
    whatsapp: `Hola, quisiera consultar por las Balizas Triangulares.`,
  },
  {
    id: "chaleco",
    name: "Chaleco Reflectivo",
    category: "kits",
    description: "Chaleco de alta visibilidad. Obligatorio en todo vehículo.",
    price: "$5.500",
    whatsapp: `Hola, quisiera consultar por el Chaleco Reflectivo.`,
  },
  {
    id: "botiquin",
    name: "Botiquín Primeros Auxilios",
    category: "kits",
    description: "Kit básico de emergencia con elementos esenciales para el auto.",
    price: "Consultar precios segun botiquin. Van desde $5.000 hasta $16.000",
    whatsapp: `Hola, quisiera consultar por el Botiquín de Primeros Auxilios.`,
  },
  {
    id: "soporte-auto",
    name: "Funda para Matafuego Auto",
    category: "accesorios",
    description: "Funda universal para fijar el extintor en el vehículo con velcro.",
    price: "$7.500",
    whatsapp: `Hola, quisiera consultar por la Funda para Matafuego de Auto.`,
  },
  {
    id: "toxic-shine",
    name: "Toxic Shine (Línea Detailing)",
    category: "accesorios",
    description: "Shampoos banana, cera rápida (Cherry Quick), acondicionadores de plásticos, microfibras de secado y la línea completa de estética vehicular. ¡Pedinos el catálogo!",
    price: "Consultar catálogo",
    whatsapp: `Hola, me interesa ver el catálogo completo de productos Toxic Shine.`,
  },
  {
    id: "revigal",
    name: "Revigal Cosmética Vehicular",
    category: "accesorios",
    description: "Siliconas para interiores, revividores de gomas y plásticos, limpia cristales y perfumantes de primera marca para mantener tu auto impecable.",
    price: "Consultar catálogo",
    whatsapp: `Hola, me gustaría consultar por los productos de la línea Revigal.`,
  },
  {
    id: "accesorios-varios",
    name: "Accesorios Varios para el Auto",
    category: "accesorios",
    description: "Equipamiento esencial para tu vehículo: cubrevolantes, parasoles térmicos, tuercas de seguridad antirrobo, criquets, compresor y más.",
    price: "Consultar modelos",
    whatsapp: `Hola, quisiera consultar por accesorios varios (cubrevolantes, parasoles, tuercas o criquets).`,
  },
];

export function getWhatsAppUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
