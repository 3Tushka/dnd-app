export interface ClassInterface {
  index: string;
  name: string;
  hit_die: number;
  proficiency_choices: {
    desc: string;
    choose: number;
    type: string;
    from: {
      option_set_type: string;
      options: {
        option_type: string;
        item: {
          index: string;
          name: string;
          url: string;
        };
      }[];
    };
  }[];
  proficiencies: {
    index: string;
    name: string;
    url: string;
  }[];
  saving_throws: {
    index: string;
    name: string;
    url: string;
  }[];
  starting_equipment: {
    equipment: {
      index: string;
      name: string;
      url: string;
    };
    quantity: number;
  }[];
  starting_equipment_options: {
    desc: string;
    choose: number;
    type: string;
    from: {
      option_set_type: string;
      options: {
        option_type: string;
        counted_reference?: {
          count: number;
          of: {
            index: string;
            name: string;
            url: string;
          };
        };
        choice?: {
          desc: string;
          choose: number;
          type: string;
          from: {
            option_set_type: string;
            equipment_category: {
              index: string;
              name: string;
              url: string;
            };
          };
        };
      }[];
    };
  }[];
  class_levels: string;
  multi_classing: {
    prerequisites: {
      ability_score: {
        index: string;
        name: string;
        url: string;
      };
      minimum_score: number;
    }[];
    proficiencies: {
      index: string;
      name: string;
      url: string;
    }[];
  };
  subclasses: {
    index: string;
    name: string;
    url: string;
  }[];
  spellcasting?: SpellcastingInterface;
  url: string;
}

export interface SpellcastingInterface {
  level: number;
  spellcasting_ability: {
    index: string;
    name: string;
    url: string;
  };
  info: Array<{
    name: string;
    desc: string[];
  }>;
}

export interface ClassFeaturesResponseInterface {
  count: number;
  results: Array<{
    index: string;
    name: string;
    url: string;
  }>;
}
