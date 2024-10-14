export interface Equipment {
  desc?: string[];
  special?: string[];
  index?: string;
  name?: string;
  equipment_category?: Category;
  gear_category?: Category;
  cost?: Cost;
  weight?: number;
  url?: string;
  contents?: string[];
  properties?: string[];
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
  variants: string[];
  variant: boolean;
  desc: string[];
  url: string;
}

interface Rarity {
  name: string;
}

export interface EquipmentAllCall {
  count: number;
  results: Category[];
}
