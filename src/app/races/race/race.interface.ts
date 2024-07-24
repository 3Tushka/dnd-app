interface RaceItem {
  index: string;
  name: string;
  url: string;
}

interface AbilityBonus {
  ability_score: RaceItem;
  bonus: number;
}

interface ProficiencyOption {
  option_type: string;
  item: RaceItem;
}

interface StartingProficiencyOptions {
  desc: string;
  choose: number;
  type: string;
  from: {
    option_set_type: string;
    options: ProficiencyOption[];
  };
}

export interface RaceInterface {
  index: string;
  name: string;
  speed: number;
  ability_bonuses: AbilityBonus[];
  alignment: string;
  age: string;
  size: string;
  size_description: string;
  starting_proficiencies: RaceItem[];
  starting_proficiency_options: StartingProficiencyOptions;
  languages: RaceItem[];
  language_desc: string;
  traits: RaceItem[];
  subraces: RaceItem[];
  url: string;
}
