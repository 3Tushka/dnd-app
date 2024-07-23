import { Component } from '@angular/core';
import { RulesService } from './rules.service';
import { MechanicsInterface } from '../mechanics/mechanics.interface';
import { RulesInterface } from './rules.interface';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss'],
})
export class RulesComponent {
  constructor(private rulesService: RulesService) {}

  rulesData!: RulesInterface | null;
  ruleName!: string;

  rulesOptions = [
    { id: 'ability-checks', name: 'Ability Checks' },
    {
      id: 'ability-scores-and-modifiers',
      name: 'Ability Scores and Modifiers',
    },
    { id: 'actions-in-combat', name: 'Actions in Combat' },
    { id: 'activating-an-item', name: 'Activating an Item' },
    { id: 'advantage-and-disadvantage', name: 'Advantage and Disadvantage' },
    { id: 'attunement', name: 'Attunement' },
    { id: 'between-adventures', name: 'Between Adventures' },
    { id: 'casting-a-spell', name: 'Casting a Spell' },
    { id: 'cover', name: 'Cover' },
    { id: 'damage-and-healing', name: 'Damage and Healing' },
    { id: 'diseases', name: 'Diseases' },
    {
      id: 'fantasy-historical-pantheons',
      name: 'Fantasy Historical Pantheons',
    },
    { id: 'madness', name: 'Madness' },
    { id: 'making-an-attack', name: 'Making an Attack' },
    { id: 'mounted-combat', name: 'Mounted Combat' },
    { id: 'movement', name: 'Movement' },
    { id: 'movement-and-position', name: 'Movement and Position' },
    { id: 'objects', name: 'Objects' },
    { id: 'poisons', name: 'Poisons' },
    { id: 'proficiency-bonus', name: 'Proficiency Bonus' },
    { id: 'resting', name: 'Resting' },
    { id: 'saving-throws', name: 'Saving Throws' },
    { id: 'sentient-magic-items', name: 'Sentient Magic Items' },
    { id: 'standard-exchange-rates', name: 'Standard Exchange Rates' },
    { id: 'the-environment', name: 'The Environment' },
    { id: 'the-order-of-combat', name: 'The Order of Combat' },
    { id: 'the-planes-of-existence', name: 'The Planes of Existence' },
    { id: 'time', name: 'Time' },
    { id: 'traps', name: 'Traps' },
    { id: 'underwater-combat', name: 'Underwater Combat' },
    { id: 'using-each-ability', name: 'Using Each Ability' },
    { id: 'wearing-and-wielding-items', name: 'Wearing and Wielding Items' },
    { id: 'what-is-a-spell', name: 'What is a Spell' },
  ];

  ruleForOneOption = [];

  ngOnInit() {
    this.getRulesByNameData(this.ruleName);
  }

  private handleData(data: RulesInterface) {
    if (typeof data.desc === 'string') {
      // Now TypeScript knows data.desc is a string here
      const processedDesc = data.desc
        .split('###')
        .map((part, index) =>
          index % 2 !== 0 ? `<span class="highlight">${part}</span>` : part
        )
        .join('');

      data.desc = [processedDesc];
    } else if (Array.isArray(data.desc)) {
      // Handle the case where desc is an array of strings
      // You might want to process each string in the array similarly
    }
    this.rulesData = data;
  }

  private handleError(error: any) {
    console.log('Error in API: ', error);
  }

  getRulesByNameData(rulesName: string) {
    this.rulesService.getRules(rulesName).subscribe({
      next: (data) => this.handleData(data),
      error: (error) => this.handleError(error),
    });
  }

  getRuleByName(ruleName: string) {
    this.rulesService.getOneRule(ruleName).subscribe({
      next: (data) => this.handleData(data),
      error: (error) => this.handleError(error),
    });
  }
}
