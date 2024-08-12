export const dndClasses: string[] = [
  "Barbarian",
  "Bard",
  "Cleric",
  "Druid",
  "Fighter",
  "Monk",
  "Paladin",
  "Ranger",
  "Rogue",
  "Sorcerer",
  "Warlock",
  "Wizard",
  "Artificer",
];

export const dndRaces: string[] = [
  "Human",
  "Elf",
  "Dwarf",
  "Halfling",
  "Gnome",
  "Half-Elf",
  "Half-Orc",
  "Tiefling",
  "Dragonborn",
];

export const dndBackgrounds: { [key: string]: string[] } = {
  Acolyte: ["Insight", "Religion"],
  Charlatan: ["Deception", "Sleight of Hand"],
  Criminal: ["Deception", "Stealth"],
  Spy: ["Deception", "Insight"],
  Entertainer: ["Acrobatics", "Performance"],
  "Folk Hero": ["Animal Handling", "Survival"],
  "Guild Artisan": ["Insight", "Persuasion"],
  "Guild Merchant": ["Insight", "Persuasion"],
  Hermit: ["Medicine", "Religion"],
  Noble: ["History", "Persuasion"],
  Outlander: ["Athletics", "Survival"],
  Sage: ["Arcana", "History"],
  Sailor: ["Athletics", "Perception"],
  Pirate: ["Athletics", "Perception"],
  Soldier: ["Athletics", "Intimidation"],
  Urchin: ["Sleight of Hand", "Stealth"],
  "Haunted One": ["Investigation", "Religion"],
  Archaeologist: ["History", "Survival"],
  "City Watch": ["Insight", "Perception"],
  Fisher: ["Nature", "Survival"],
  Marine: ["Athletics", "Survival"],
  Shipwright: ["Investigation", "Perception"],
  Smuggler: ["Deception", "Stealth"],
};

interface RacialBonus {
  race: string;
  bonuses: {
    strength?: number;
    dexterity?: number;
    constitution?: number;
    intelligence?: number;
    wisdom?: number;
    charisma?: number;
  };
}

export const dndRacialBonuses: RacialBonus[] = [
  {
    race: "Human",
    bonuses: {
      strength: 1,
      dexterity: 1,
      constitution: 1,
      intelligence: 1,
      wisdom: 1,
      charisma: 1,
    },
  },
  { race: "Elf", bonuses: { dexterity: 2 } },
  { race: "Dwarf", bonuses: { constitution: 2 } },
  { race: "Halfling", bonuses: { dexterity: 2 } },
  { race: "Gnome", bonuses: { intelligence: 2 } },
  { race: "Half-Elf", bonuses: { charisma: 2, dexterity: 1 } },
  { race: "Half-Orc", bonuses: { strength: 2, constitution: 1 } },
  { race: "Tiefling", bonuses: { intelligence: 1, charisma: 2 } },
  { race: "Dragonborn", bonuses: { strength: 2, charisma: 1 } },
];

export interface ClassSkill {
  class: string;
  skills: string[];
}

export const classSkills: ClassSkill[] = [
  {
    class: "Barbarian",
    skills: [
      "Animal Handling",
      "Athletics",
      "Intimidation",
      "Nature",
      "Perception",
      "Survival",
    ],
  },
  {
    class: "Bard",
    skills: [
      "Acrobatics",
      "Animal Handling",
      "Arcana",
      "Athletics",
      "Deception",
      "History",
      "Insight",
      "Intimidation",
      "Investigation",
      "Medicine",
      "Nature",
      "Perception",
      "Performance",
      "Persuasion",
      "Religion",
      "Sleight of Hand",
      "Stealth",
      "Survival",
    ],
  },
  {
    class: "Cleric",
    skills: ["History", "Insight", "Medicine", "Persuasion", "Religion"],
  },
  {
    class: "Druid",
    skills: [
      "Arcana",
      "Animal Handling",
      "Insight",
      "Medicine",
      "Nature",
      "Perception",
      "Religion",
      "Survival",
    ],
  },
  {
    class: "Fighter",
    skills: [
      "Acrobatics",
      "Animal Handling",
      "Athletics",
      "History",
      "Insight",
      "Intimidation",
      "Perception",
      "Survival",
    ],
  },
  {
    class: "Monk",
    skills: [
      "Acrobatics",
      "Athletics",
      "History",
      "Insight",
      "Religion",
      "Stealth",
    ],
  },
  {
    class: "Paladin",
    skills: [
      "Athletics",
      "Insight",
      "Intimidation",
      "Medicine",
      "Persuasion",
      "Religion",
    ],
  },
  {
    class: "Ranger",
    skills: [
      "Animal Handling",
      "Athletics",
      "Insight",
      "Investigation",
      "Nature",
      "Perception",
      "Stealth",
      "Survival",
    ],
  },
  {
    class: "Rogue",
    skills: [
      "Acrobatics",
      "Athletics",
      "Deception",
      "Insight",
      "Intimidation",
      "Investigation",
      "Perception",
      "Performance",
      "Persuasion",
      "Sleight of Hand",
      "Stealth",
    ],
  },
  {
    class: "Sorcerer",
    skills: [
      "Arcana",
      "Deception",
      "Insight",
      "Intimidation",
      "Persuasion",
      "Religion",
    ],
  },
  {
    class: "Warlock",
    skills: [
      "Arcana",
      "Deception",
      "History",
      "Intimidation",
      "Investigation",
      "Nature",
      "Religion",
    ],
  },
  {
    class: "Wizard",
    skills: [
      "Arcana",
      "History",
      "Insight",
      "Investigation",
      "Medicine",
      "Religion",
    ],
  },
];

// Define the interface for Class Archetype with spells
interface ClassArchetypeWithSpells {
  class: string;
  archetypes: {
    name: string;
    spells?: string[]; // Optional spells array for archetypes that grant spells
  }[];
}

// Define the list of class archetypes with their spells
export const classArchetypesWithSpells: ClassArchetypeWithSpells[] = [
  // Wizard
  {
    class: "Wizard",
    archetypes: [
      {
        name: "School of Abjuration",
        spells: [
          "Protection from Evil and Good",
          "Dispel Magic",
          "Globe of Invulnerability",
          "Antimagic Field",
        ],
      },
      {
        name: "School of Conjuration",
        spells: ["Mage Hand", "Misty Step", "Conjure Elemental", "Plane Shift"],
      },
      {
        name: "School of Divination",
        spells: ["Divination", "Foresight", "True Seeing"],
      },
      {
        name: "School of Enchantment",
        spells: [
          "Charm Person",
          "Hold Person",
          "Dominate Person",
          "Power Word Heal",
        ],
      },
      {
        name: "School of Evocation",
        spells: ["Magic Missile", "Fireball", "Wall of Force", "Meteor Swarm"],
      },
      {
        name: "School of Illusion",
        spells: [
          "Disguise Self",
          "Major Image",
          "Mirage Arcane",
          "Programmed Illusion",
        ],
      },
      {
        name: "School of Necromancy",
        spells: [
          "Animate Dead",
          "Vampiric Touch",
          "Cloudkill",
          "Circle of Death",
        ],
      },
      {
        name: "School of Transmutation",
        spells: ["Polymorph", "Flesh to Stone", "Time Stop"],
      },
      {
        name: "War Magic",
        spells: ["Shield", "Blur", "Dispel Magic", "Wall of Force"],
      },
    ],
  },

  // Rogue
  {
    class: "Rogue",
    archetypes: [
      { name: "Thief" },
      { name: "Assassin" },
      {
        name: "Arcane Trickster",
        spells: ["Mage Hand", "Disguise Self", "Invisibility", "Mirror Image"],
      },
      { name: "Swashbuckler" },
      { name: "Mastermind" },
      { name: "Scout" },
    ],
  },

  // Cleric
  {
    class: "Cleric",
    archetypes: [
      {
        name: "Life Domain",
        spells: ["Bless", "Cure Wounds", "Beacon of Hope", "Heal"],
      },
      {
        name: "Light Domain",
        spells: [
          "Burning Hands",
          "Daylight",
          "Flame Strike",
          "Guardian of Faith",
        ],
      },
      {
        name: "War Domain",
        spells: [
          "Divine Favor",
          "Shield of Faith",
          "Crusader's Mantle",
          "Holy Weapon",
        ],
      },
      {
        name: "Tempest Domain",
        spells: [
          "Fog Cloud",
          "Thunderwave",
          "Call Lightning",
          "Storm of Vengeance",
        ],
      },
      {
        name: "Nature Domain",
        spells: [
          "Animal Friendship",
          "Barkskin",
          "Dominate Beast",
          "Tree Stride",
        ],
      },
      {
        name: "Trickery Domain",
        spells: [
          "Disguise Self",
          "Mirror Image",
          "Polymorph",
          "Dominate Person",
        ],
      },
      {
        name: "Knowledge Domain",
        spells: ["Identify", "Legend Lore", "Foresight"],
      },
    ],
  },

  // Bard
  {
    class: "Bard",
    archetypes: [
      {
        name: "College of Lore",
        spells: [
          "Cutting Words",
          "Counterspell",
          "Dispel Magic",
          "Mass Suggestion",
        ],
      },
      {
        name: "College of Valor",
        spells: ["Heroism", "Shield", "Aura of Vitality", "Power Word Heal"],
      },
      {
        name: "College of Glamour",
        spells: [
          "Charm Person",
          "Enthrall",
          "Hypnotic Pattern",
          "Calm Emotions",
        ],
      },
      {
        name: "College of Swords",
        spells: ["Blade Ward", "Shield", "Mirror Image", "Haste"],
      },
      {
        name: "College of Whispers",
        spells: ["Disguise Self", "Fear", "Phantasmal Killer", "Modify Memory"],
      },
      {
        name: "College of Creation",
        spells: [
          "Creative Talent",
          "Animate Objects",
          "Otto's Irresistible Dance",
          "Creation",
        ],
      },
    ],
  },

  // Paladin
  {
    class: "Paladin",
    archetypes: [
      {
        name: "Oath of Devotion",
        spells: [
          "Protection from Evil and Good",
          "Sacred Weapon",
          "Dispel Magic",
          "Holy Weapon",
        ],
      },
      {
        name: "Oath of the Ancients",
        spells: [
          "Ensnaring Strike",
          "Moonbeam",
          "Aura of Warding",
          "Holy Weapon",
        ],
      },
      {
        name: "Oath of Vengeance",
        spells: ["Hunter's Mark", "Hold Person", "Banishment", "Hold Monster"],
      },
      {
        name: "Oath of Conquest",
        spells: [
          "Wrathful Smite",
          "Crown of Madness",
          "Helm of the Gods",
          "Power Word Kill",
        ],
      },
      {
        name: "Oath of Redemption",
        spells: [
          "Shield",
          "Counterspell",
          "Aura of Vitality",
          "Wrathful Smite",
        ],
      },
    ],
  },

  // Ranger
  {
    class: "Ranger",
    archetypes: [
      {
        name: "Beast Master",
        spells: [
          "Animal Friendship",
          "Speak with Animals",
          "Conjure Animals",
          "Freedom of Movement",
        ],
      },
      {
        name: "Hunter",
        spells: [
          "Hail of Thorns",
          "Conjure Barrage",
          "Swift Quiver",
          "Steel Wind Strike",
        ],
      },
      {
        name: "Gloom Stalker",
        spells: [
          "Disguise Self",
          "Darkvision",
          "Greater Invisibility",
          "Seeming",
        ],
      },
      {
        name: "Horizon Walker",
        spells: [
          "Detect Portal",
          "Haste",
          "Teleportation Circle",
          "Plane Shift",
        ],
      },
      {
        name: "Monster Slayer",
        spells: [
          "Hunter's Mark",
          "Protection from Evil and Good",
          "Dispel Magic",
          "Holy Weapon",
        ],
      },
    ],
  },

  // Sorcerer
  {
    class: "Sorcerer",
    archetypes: [
      {
        name: "Draconic Bloodline",
        spells: ["Elemental Bane", "Fireball", "Wall of Fire", "Foresight"],
      },
      {
        name: "Wild Magic",
        spells: [
          "Chaos Bolt",
          "Wild Magic Surge",
          "Greater Invisibility",
          "Power Word Heal",
        ],
      },
      {
        name: "Storm Sorcery",
        spells: [
          "Thunderwave",
          "Lightning Bolt",
          "Storm Sphere",
          "Chain Lightning",
        ],
      },
      {
        name: "Shadow Magic",
        spells: [
          "Darkness",
          "Shadow Blade",
          "Greater Invisibility",
          "Power Word Pain",
        ],
      },
      {
        name: "Divine Soul",
        spells: ["Bless", "Cure Wounds", "Guardian of Faith", "Divine Word"],
      },
    ],
  },

  // Warlock
  {
    class: "Warlock",
    archetypes: [
      {
        name: "The Archfey",
        spells: [
          "Faerie Fire",
          "Hypnotic Pattern",
          "Greater Invisibility",
          "Dominate Person",
        ],
      },
      {
        name: "The Fiend",
        spells: ["Burning Hands", "Fireball", "Harm", "Darkness"],
      },
      {
        name: "The Great Old One",
        spells: [
          "Dissonant Whispers",
          "Tasha's Hideous Laughter",
          "Evard's Black Tentacles",
          "Phantasmal Killer",
        ],
      },
      {
        name: "The Hexblade",
        spells: ["Shield", "Wrathful Smite", "Phantasmal Killer", "Harm"],
      },
      {
        name: "The Celestial",
        spells: [
          "Cure Wounds",
          "Flaming Sphere",
          "Guardian of Faith",
          "Revival",
        ],
      },
    ],
  },

  // Monk
  {
    class: "Monk",
    archetypes: [
      { name: "Way of the Open Hand" },
      {
        name: "Way of Shadow",
        spells: [
          "Darkness",
          "Darkvision",
          "Pass Without Trace",
          "Shadow of Moil",
        ],
      },
      {
        name: "Way of the Four Elements",
        spells: [
          "Elemental Attunement",
          "Fangs of the Fire Snake",
          "Water Whip",
          "Fire Storm",
        ],
      },
      { name: "Way of the Drunken Master" },
      { name: "Way of the Kensei" },
      {
        name: "Way of the Sun Soul",
        spells: ["Searing Sunburst", "Sunbeam", "Sunburst", "Flame Strike"],
      },
    ],
  },

  // Artificer
  {
    class: "Artificer",
    archetypes: [
      {
        name: "Alchemist",
        spells: [
          "Alchemist's Fire",
          "Lesser Restoration",
          "Greater Restoration",
          "Wish",
        ],
      },
      {
        name: "Artillerist",
        spells: ["Cannon", "Fireball", "Flaming Sphere", "Wall of Fire"],
      },
      {
        name: "Battle Smith",
        spells: ["Shield", "Aid", "Dispel Magic", "Mass Cure Wounds"],
      },
    ],
  },
];

interface FightingStyle {
  name: string;
  benefit: string;
}

export const fightingStyles: FightingStyle[] = [
  {
    name: "Archery",
    benefit:
      "You gain a +2 bonus to attack rolls you make with ranged weapons.",
  },
  {
    name: "Defense",
    benefit: "While you are wearing armor, you gain a +1 bonus to AC.",
  },
  {
    name: "Dueling",
    benefit:
      "When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon.",
  },
  {
    name: "Great Weapon Fighting",
    benefit:
      "When you roll a 1 or 2 on a damage die for an attack you make with a two-handed weapon, you can re-roll the die and must use the new roll, even if the new roll is a 1 or 2. The weapon must have the two-handed or versatile property for this Fighting Style to apply.",
  },
  {
    name: "Protection",
    benefit:
      "When a creature you can see attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. You must be wielding a shield or a weapon to use this Fighting Style.",
  },
  {
    name: "Two-Weapon Fighting",
    benefit:
      "When you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack.",
  },
];

export interface EquipmentOption {
  type: string; // Description of the option group
  items: string[];
}

interface ClassEquipment {
  class: string;
  equipment: EquipmentOption[];
}

export const classStartEquipment: ClassEquipment[] = [
  {
    class: "Barbarian",
    equipment: [
      { type: "Weapon", items: ["Greataxe", "Any martial melee weapon"] },
      { type: "Equipment Pack", items: ["Explorer's pack"] },
      { type: "Additional", items: ["Four javelins"] },
    ],
  },
  {
    class: "Bard",
    equipment: [
      { type: "Weapon", items: ["Rapier", "Longsword", "Any simple weapon"] },
      {
        type: "Equipment Pack",
        items: ["Diplomat's pack", "Entertainer's pack"],
      },
      {
        type: "Musical Instrument",
        items: ["A lute or any other musical instrument"],
      },
      { type: "Armor", items: ["Leather armor"] },
      { type: "Weapon", items: ["Dagger"] },
    ],
  },
  {
    class: "Cleric",
    equipment: [
      { type: "Weapon", items: ["Mace", "Warhammer (if proficient)"] },
      {
        type: "Armor",
        items: ["Scale mail", "Leather armor", "Chain mail (if proficient)"],
      },
      { type: "Equipment Pack", items: ["Priest's pack", "Explorer's pack"] },
      { type: "Shield", items: ["Shield"] },
      { type: "Holy Symbol", items: ["A holy symbol"] },
    ],
  },
  {
    class: "Druid",
    equipment: [
      { type: "Armor", items: ["Leather armor"] },
      { type: "Weapon", items: ["Wooden shield", "Any simple weapon"] },
      { type: "Scimitar", items: ["Scimitar"] },
      { type: "Equipment Pack", items: ["Explorer's pack"] },
      { type: "Druidic Focus", items: ["A druidic focus"] },
    ],
  },
  {
    class: "Fighter",
    equipment: [
      {
        type: "Weapon",
        items: ["Chain mail", "Leather armor, longbow, and 20 arrows"],
      },
      {
        type: "Weapon Choice",
        items: ["A martial weapon and a shield", "Two martial weapons"],
      },
      {
        type: "Equipment Pack",
        items: ["Dungeoneer's pack", "Explorer's pack"],
      },
      {
        type: "Weapon",
        items: ["Light crossbow and 20 bolts", "Two handaxes"],
      },
    ],
  },
  {
    class: "Wizard",
    equipment: [
      { type: "Weapon", items: ["A quarterstaff", "A dagger"] },
      { type: "Equipment Pack", items: ["Scholar's pack", "Explorer's pack"] },
      { type: "Spellcasting", items: ["A spellbook"] },
      { type: "Component Pouch", items: ["Component pouch", "Arcane focus"] },
    ],
  },
];
