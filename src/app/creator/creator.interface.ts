interface AbilityScores {
  [key: string]: number;
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}

interface Skill {
  name: string;
  proficiency: boolean;
}

interface Equipment {
  weapons: string[];
  armor: string;
  tools: string[];
  otherItems: string[];
}

interface CharacterBackground {
  name: string;
  skills: Skill[];
  traits: string[];
  languages: string[];
  equipment: Equipment;
}

export interface Character {
  name: string;
  race: string;
  class: string;
  abilityScores: AbilityScores;
  background: CharacterBackground;
  traits: string[];
  ideals: string;
  bonds: string;
  flaws: string;
  alignment: string;
  equipment: Equipment;
}
