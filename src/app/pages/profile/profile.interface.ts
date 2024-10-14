export interface Profile {
  given_name: string;
  family_name: string;
  nickname: string;
  name: string;
  picture: string;
  updated_at: string;
  email: string;
  email_verified: boolean;
  iss: string;
  aud: string;
  iat: number;
  exp: number;
  sub: string;
  sid: string;
  nonce: string;
}

export interface AbilityScores {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}

export interface EquipmentChoice {
  item: string;
  alternate: string;
  itemDisabled: boolean;
  alternateDisabled: boolean;
  selected: string | null;
}

export interface CreatorData {
  name: string;
  race: string;
  class: string;
  background: string;
  abilityScores: AbilityScores;
  archeTypes: string;
  skills: string[];
  equipment_choices: EquipmentChoice[];
  standart_equipment: any[]; // Assuming this is an array, adjust the type if needed
}
