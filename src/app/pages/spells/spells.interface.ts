import {
  ListInterface,
  ListOfElementsInterface,
} from "../../interface/list.interface";

export interface SpellsInterface {
  count: number;
  results: ListInterface[];
}

export interface DamageAtSlotLevel {
  [key: string]: string;
}

export interface Damage {
  damage_type: ListInterface;
  damage_at_slot_level: DamageAtSlotLevel;
}

export interface Spell {
  index: string;
  name: string;
  desc: string[];
  higher_level: string[];
  range: string;
  components: string[];
  material: string;
  ritual: boolean;
  duration: string;
  concentration: boolean;
  casting_time: string;
  level: number;
  attack_type?: string; // Optional
  damage?: Damage; // Optional
  heal_at_slot_level?: { [key: string]: string }; // Optional
  school: ListInterface;
  classes: ListInterface[];
  subclasses: ListInterface[];
  url: string;
}
