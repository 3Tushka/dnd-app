interface Spellcasting {
  cantrips_known?: number;
  spells_known?: number;
  spell_slots_level_1?: number;
  spell_slots_level_2?: number;
  spell_slots_level_3?: number;
  spell_slots_level_4?: number;
  spell_slots_level_5?: number;
  spell_slots_level_6?: number;
  spell_slots_level_7?: number;
  spell_slots_level_8?: number;
  spell_slots_level_9?: number;
}

interface CreatingSpellSlot {
  spell_slot_level: number;
  sorcery_point_cost: number;
}

interface ClassSpecific {
  rage_count?: number;
  rage_damage_bonus?: number;
  brutal_critical_dice?: number;
  bardic_inspiration_die?: number;
  song_of_rest_die?: number;
  magical_secrets_max_5?: number;
  magical_secrets_max_7?: number;
  magical_secrets_max_9?: number;
  channel_divinity_charges?: number;
  destroy_undead_cr?: number;
  wild_shape_max_cr?: number;
  wild_shape_swim?: boolean;
  wild_shape_fly?: boolean;
  action_surges?: number;
  indomitable_uses?: number;
  extra_attacks?: number;
  martial_arts?: {
    dice_count: number;
    dice_value: number;
  };
  ki_points?: number;
  unarmored_movement?: number;
  aura_range?: number;
  favored_enemies?: number;
  favored_terrain?: number;
  sneak_attack?: {
    dice_count: number;
    dice_value: number;
  };
  sorcery_points?: number;
  metamagic_known?: number;
  creating_spell_slots?: CreatingSpellSlot[];
  invocations_known?: number;
  mystic_arcanum_level_6?: number;
  mystic_arcanum_level_7?: number;
  mystic_arcanum_level_8?: number;
  mystic_arcanum_level_9?: number;
  arcane_recovery_levels?: number;
}

export interface ClassLevelDetails {
  spellcasting?: Spellcasting;
  class_specific?: ClassSpecific;
}
