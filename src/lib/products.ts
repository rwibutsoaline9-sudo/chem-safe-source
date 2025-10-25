export interface Product {
  id: string;
  name: string;
  category: string;
  purity: string;
  grade: string;
  casNumber: string;
  description: string;
  packaging: string[];
  applications: string[];
  restricted: boolean;
  image: string;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: "urea-46",
    name: "Urea",
    category: "Fertilizer",
    purity: "46% N",
    grade: "Fertilizer Grade",
    casNumber: "57-13-6",
    description: "High-quality urea fertilizer widely used in agriculture and industrial applications. Essential nitrogen source for crop nutrition and various chemical processes.",
    packaging: ["50 kg bags", "1000 kg bulk bags", "Bulk tanker"],
    applications: ["Agriculture", "Fertilizer production", "Chemical synthesis", "Animal feed"],
    restricted: false,
    image: "product-urea.jpg",
    featured: true,
  },
  {
    id: "sodium-cyanide-98",
    name: "Sodium Cyanide",
    category: "Industrial Chemical",
    purity: "98%",
    grade: "Technical Grade",
    casNumber: "143-33-9",
    description: "High-purity sodium cyanide for gold extraction and electroplating applications. Requires proper licensing and safety documentation for purchase.",
    packaging: ["50 kg steel drums", "1000 kg IBC"],
    applications: ["Gold mining", "Electroplating", "Chemical synthesis"],
    restricted: true,
    image: "product-sodium-cyanide.jpg",
    featured: true,
  },
  {
    id: "phenylacetonitrile",
    name: "Phenylacetonitrile",
    category: "Organic Chemical",
    purity: "99%",
    grade: "Industrial Grade",
    casNumber: "140-29-4",
    description: "Pharmaceutical intermediate used in the synthesis of various medications. Suitable for research and industrial chemical manufacturing.",
    packaging: ["25 kg drums", "200 kg drums"],
    applications: ["Pharmaceutical synthesis", "Research", "Chemical manufacturing"],
    restricted: true,
    image: "product-urea.jpg",
    featured: false,
  },
  {
    id: "caustic-soda-99",
    name: "Caustic Soda Flakes",
    category: "Industrial Chemical",
    purity: "99%",
    grade: "Technical Grade",
    casNumber: "1310-73-2",
    description: "Premium quality sodium hydroxide flakes for industrial processes, water treatment, and chemical manufacturing. High purity and consistent quality.",
    packaging: ["25 kg bags", "1000 kg bulk bags"],
    applications: ["Chemical manufacturing", "Water treatment", "Pulp and paper", "Soap production"],
    restricted: false,
    image: "product-caustic-soda.jpg",
    featured: true,
  },
  {
    id: "potassium-chloride",
    name: "Potassium Chloride",
    category: "Fertilizer",
    purity: "60% K2O",
    grade: "Fertilizer Grade",
    casNumber: "7447-40-7",
    description: "Essential potassium fertilizer for agricultural use. Improves crop yield and quality with excellent solubility.",
    packaging: ["50 kg bags", "1000 kg bulk bags"],
    applications: ["Agriculture", "Fertilizer blending", "Industrial processes"],
    restricted: false,
    image: "product-urea.jpg",
    featured: false,
  },
  {
    id: "phosphoric-acid",
    name: "Phosphoric Acid",
    category: "Industrial Chemical",
    purity: "85%",
    grade: "Food/Technical Grade",
    casNumber: "7664-38-2",
    description: "Versatile phosphoric acid suitable for food processing, fertilizer production, and industrial applications.",
    packaging: ["35 kg cans", "250 kg drums", "1000 kg IBC"],
    applications: ["Fertilizer production", "Food processing", "Metal treatment", "Water treatment"],
    restricted: false,
    image: "product-caustic-soda.jpg",
    featured: false,
  },
  {
    id: "methylamine",
    name: "Methylamine",
    category: "Organic Chemical",
    purity: "40% aqueous",
    grade: "Industrial Grade",
    casNumber: "74-89-5",
    description: "Industrial methylamine solution for pharmaceutical intermediates and agricultural chemical production. Requires verification for purchase.",
    packaging: ["200 kg drums", "1000 kg IBC"],
    applications: ["Pharmaceutical intermediates", "Agricultural chemicals", "Chemical synthesis"],
    restricted: true,
    image: "product-sodium-cyanide.jpg",
    featured: false,
  },
];
