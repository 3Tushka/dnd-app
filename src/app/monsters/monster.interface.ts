interface ArmorClass {
  type: string;
  value: number;
}

interface Speed {
  walk?: string;
  swim?: string;
}

interface ProficiencyDetail {
  index: string;
  name: string;
  url: string;
}

interface Proficiency {
  value: number;
  proficiency: ProficiencyDetail;
}

interface Sense {
  darkvision?: string;
  passive_perception?: number;
}

interface DC {
  dc_type: {
    index: string;
    name: string;
    url: string;
  };
  dc_value: number;
  success_type: string;
}

interface SpecialAbility {
  name: string;
  desc: string;
  dc?: DC;
}

interface ActionDetail {
  action_name?: string;
  count?: number;
  type?: string;
}

interface DamageType {
  index: string;
  name: string;
  url: string;
}

interface Damage {
  damage_type: DamageType;
  damage_dice: string;
}

interface Action {
  name: string;
  desc: string;
  multiattack_type?: string;
  attack_bonus?: number;
  dc?: DC;
  damage?: Damage[];
  actions?: ActionDetail[];
}

interface Usage {
  type: string;
  times: number;
}

interface LegendaryAction extends Action {
  // Legendary actions can have the same structure as Action
}

export interface MonsterInterface {
  index: string;
  name: string;
  size: string;
  type: string;
  desc?: string;
  alignment: string;
  armor_class: ArmorClass[];
  hit_points: number;
  hit_dice: string;
  hit_points_roll: string;
  speed: Speed;
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  proficiencies: Proficiency[];
  damage_vulnerabilities: string[];
  damage_resistances: string[];
  damage_immunities: string[];
  condition_immunities: string[];
  senses: Sense;
  languages: string;
  challenge_rating: number;
  proficiency_bonus: number;
  xp: number;
  special_abilities: SpecialAbility[];
  actions: Action[];
  legendary_actions: LegendaryAction[];
  image: string;
  url: string;
}
