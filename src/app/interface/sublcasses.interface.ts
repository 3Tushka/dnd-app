export interface ClassReference {
  index: string;
  name: string;
  url: string;
}

export interface Prerequisite {
  index: string;
  type: string;
  name: string;
  url: string;
}

export interface Spell {
  index: string;
  name: string;
  url: string;
}

export interface SpellEntry {
  prerequisites: Prerequisite[];
  spell: Spell;
}

export interface Subclass {
  index: string;
  class: ClassReference;
  name: string;
  subclass_flavor: string;
  desc: string[];
  spells: SpellEntry[];
  subclass_levels: string;
  url: string;
}
