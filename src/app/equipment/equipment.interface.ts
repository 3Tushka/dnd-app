export interface Equipment {
  desc: string[];
  special: string[];
  index: string;
  name: string;
  equipment_category: Category;
  gear_category: Category;
  cost: Cost;
  weight: number;
  url: string;
  contents: any[]; // Adjust this type based on the actual contents structure
  properties: any[]; // Adjust this type based on the actual properties structure
}

interface Category {
  index: string;
  name: string;
  url: string;
}

interface Cost {
  quantity: number;
  unit: string;
}

export interface EquipmentCategoryItem {
  index: string;
  name: string;
  equipment: Category[];
  url: string;
}

export interface MagicItem {
  index: string;
  name: string;
  equipment_category: Category;
  rarity: Rarity;
  variants: any[];
  variant: boolean;
  desc: string[];
  url: string;
}

interface Rarity {
  name: string;
}
