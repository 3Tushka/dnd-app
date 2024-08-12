import { Component } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  FormArray,
  FormControl,
} from "@angular/forms";
import {
  dndClasses,
  dndRaces,
  dndBackgrounds,
  dndRacialBonuses,
  classArchetypesWithSpells,
  classSkills,
  fightingStyles,
  classStartEquipment,
  EquipmentOption,
} from "./data";
import { ThisReceiver } from "@angular/compiler";

@Component({
  selector: "app-creator",
  templateUrl: "./creator.component.html",
  styleUrls: ["./creator.component.scss"],
})
export class CreatorComponent {
  // Step and points management
  currentStep = 1;
  abilityPoints = 27;
  maxAbilityPoints = 27;

  // Data sources
  classes = dndClasses;
  races = dndRaces;
  backgrounds = dndBackgrounds;
  racialBonuses = dndRacialBonuses;
  archetype = classArchetypesWithSpells;
  fightingStyles = fightingStyles;
  skills = classSkills;
  startEquipment = classStartEquipment;

  // Form and selected data
  characterCreationForm: FormGroup;
  filteredArchetypes: string[] = [];
  classAndBackgroundSkill: string[] = [];
  selectedSkills: string[] = [];
  selectedEquipment: EquipmentOption[] = [];
  selectedEquipmentOption: string[] = [];

  constructor(private fb: FormBuilder) {
    this.characterCreationForm = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(1)]],
      race: ["", Validators.required],
      class: ["", Validators.required],
      background: ["", Validators.required],
      abilityScores: this.fb.group({
        strength: [
          8,
          [Validators.required, Validators.min(1), Validators.max(20)],
        ],
        dexterity: [
          8,
          [Validators.required, Validators.min(1), Validators.max(20)],
        ],
        constitution: [
          8,
          [Validators.required, Validators.min(1), Validators.max(20)],
        ],
        intelligence: [
          8,
          [Validators.required, Validators.min(1), Validators.max(20)],
        ],
        wisdom: [
          8,
          [Validators.required, Validators.min(1), Validators.max(20)],
        ],
        charisma: [
          8,
          [Validators.required, Validators.min(1), Validators.max(20)],
        ],
      }),
      archeTypes: ["", Validators.required],
      skills: this.fb.array([], Validators.required),
      equipment: this.fb.array([], Validators.required),
    });
  }

  // Getters
  get skillsFormArray(): FormArray {
    return this.characterCreationForm.get("skills") as FormArray;
  }

  get equipmentFormArray(): FormArray {
    return this.characterCreationForm.get("equipment") as FormArray;
  }

  // Utility methods
  calculatePoints(): number {
    const scores = this.characterCreationForm.get("abilityScores")?.value;
    let totalPoints = 0;

    for (let key in scores) {
      const baseScore = scores[key];
      const score = baseScore;

      if (score > 13) {
        totalPoints += (score - 13) * 2 + 5;
      } else {
        totalPoints += score - 8;
      }
    }

    return totalPoints;
  }

  calculateRacialBonus() {
    const selectedRace = this.characterCreationForm.get("race")?.value;
    const characterAbilitiesData =
      this.characterCreationForm.get("abilityScores")?.value;
    const racialBonus =
      this.racialBonuses.find((bonus) => bonus.race === selectedRace)
        ?.bonuses || {};

    for (const [key, value] of Object.entries(racialBonus)) {
      if (characterAbilitiesData[key] !== undefined) {
        characterAbilitiesData[key] += value;
      } else {
        characterAbilitiesData[key] = value;
      }
    }

    return characterAbilitiesData;
  }

  // Event handlers
  onAbilityScoreChange() {
    const totalPoints = this.calculatePoints();
    if (totalPoints > this.maxAbilityPoints) {
      alert("You have exceeded the maximum ability points!");
      const abilityScores = this.characterCreationForm.get("abilityScores");
      if (abilityScores) {
        for (let key in abilityScores.value) {
          const control = abilityScores.get(key);
          if (control && control.dirty) {
            control.setValue(control.value - 1);
            control.markAsPristine();
            break;
          }
        }
      }
    } else {
      this.abilityPoints = this.maxAbilityPoints - totalPoints;
    }
  }

  selectBackground() {
    const selectedBackground =
      this.characterCreationForm.get("background")?.value;
    const backgroundSkills = this.backgrounds[selectedBackground] || [];
    const newSkills = backgroundSkills.filter(
      (skill) => !this.classAndBackgroundSkill.includes(skill)
    );

    this.classAndBackgroundSkill = [
      ...this.classAndBackgroundSkill,
      ...newSkills,
    ];

    backgroundSkills.forEach((skill) => {
      if (!this.selectedSkills.includes(skill)) {
        this.selectedSkills.push(skill);
        this.skillsFormArray.push(new FormControl(skill));
      }
    });

    console.log("Background skills:", this.classAndBackgroundSkill);
  }

  getSkills() {
    const selectedClass = this.characterCreationForm.get("class")?.value;
    const selectSkills = this.skills.find(
      (skill) => skill.class === selectedClass
    );
    this.classAndBackgroundSkill = selectSkills?.skills || [];
  }

  onSkillChange(event: any, skill: any) {
    if (event.target.checked) {
      if (
        this.selectedSkills.length <
        2 +
          this.backgrounds[this.characterCreationForm.get("background")?.value]
            .length
      ) {
        this.selectedSkills.push(skill);
        this.skillsFormArray.push(new FormControl(skill));
      } else {
        event.target.checked = false;
        console.log("You can only select 2 skills.");
      }
    } else {
      const index = this.selectedSkills.indexOf(skill);
      if (index !== -1) {
        this.selectedSkills.splice(index, 1);
      }
    }
  }

  selectArchetype() {
    const selectedClass = this.characterCreationForm.get("class")?.value;

    if (selectedClass === "Fighter") {
      this.filteredArchetypes = this.fightingStyles.map((style) => style.name);
    } else {
      const selectedArchetype = this.archetype.find(
        (archetype) => archetype.class === selectedClass
      );
      this.filteredArchetypes =
        selectedArchetype?.archetypes.map((archetype) => archetype.name) || [];
    }
  }

  selectEquipmentOption() {
    const selectedClass = this.characterCreationForm.get("class")?.value;
    const selectedEquipment = this.startEquipment.find(
      (equipment) => equipment.class === selectedClass
    );

    this.selectedEquipment = selectedEquipment?.equipment || [];

    if (this.selectedEquipment.length > 0) {
      this.selectedEquipment.forEach((equipment) => {
        if (equipment.items) {
          equipment.items.forEach((item) => {
            this.selectedEquipmentOption.push(item);
          });
        }
      });
    }

    console.log("Selected equipment options:", this.selectedEquipmentOption);
  }

  onCheckboxChangeEquipment(event: any, equipment: any) {
    if (event.target.checked) {
      if (this.selectedEquipmentOption.length < 2) {
        this.selectedEquipmentOption.push(equipment);
        this.equipmentFormArray.push(new FormControl(equipment));
      } else {
        event.target.checked = false;
        console.log("You can only select 2 items.");
      }
    } else {
      const index = this.selectedEquipmentOption.indexOf(equipment);
      if (index !== -1) {
        this.selectedEquipmentOption.splice(index, 1);
      }
    }
  }

  // Navigation methods
  nextStep() {
    if (this.currentStep < 3) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  // Form submission
  onGetTwoButtons() {
    this.getSkills();
    this.selectBackground();
    this.selectEquipmentOption();
  }

  onSubmit() {
    if (this.characterCreationForm.valid) {
      this.selectArchetype();
      this.nextStep();
      this.calculateRacialBonus();
      console.log("Form data:", this.characterCreationForm.value);
    } else {
      console.log(
        "Please fill out all required fields.",
        this.characterCreationForm
      );
    }
  }
}
