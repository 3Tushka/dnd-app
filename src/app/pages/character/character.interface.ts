interface Skill {
  name: string;
  index: string;
  url: string;
}

export interface CharacterInterface {
  index: string;
  name: string;
  full_name: string;
  abbreviation?: string;
  desc: string[];
  skills: Skill[];

  type?: string;
  typical_speakers?: string[];
  script?: string;

  url: string;
}
