import { Component, Renderer2, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  FormControl,
} from "@angular/forms";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthService } from "@auth0/auth0-angular";
import {
  dndClasses,
  dndRaces,
  dndBackgrounds,
  dndRacialBonuses,
  classArchetypesWithSpells,
  classSkills,
  fightingStyles,
  equipment,
} from "./data";

@Component({
  selector: "app-creator",
  templateUrl: "./creator.component.html",
  styleUrls: ["./creator.component.scss"],
})
export class CreatorComponent implements OnInit {
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

  hasArchetypes: boolean = false;

  // Form and selected data
  characterCreationForm: FormGroup;
  filteredArchetypes: string[] = [];
  classAndBackgroundSkill: string[] = [];
  selectedSkills: string[] = [];
  selectedEquipment: string[] = [];

  constructor(
    private fb: FormBuilder,
    private renderer: Renderer2,
    private http: HttpClient,
    public auth: AuthService
  ) {
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
      archeTypes: [""],
      skills: this.fb.array([], Validators.required),
      equipment_choices: this.fb.array([]),
      standart_equipment: this.fb.array([]),
      sub: [""], // Add sub to the form
    });
  }

  ngOnInit(): void {
    // Retrieve the sub from the Auth0 token and set it in the form
    this.auth.user$.subscribe((user) => {
      if (user && user.sub) {
        this.characterCreationForm.patchValue({ sub: user.sub });
      }
    });
  }

  // Getters
  get skillsFormArray(): FormArray {
    return this.characterCreationForm.get("skills") as FormArray;
  }

  get equipmentFormArray(): FormArray {
    return this.characterCreationForm.get("equipment") as FormArray;
  }

  get equipmentChoicesControls() {
    return (this.characterCreationForm.get("equipment_choices") as FormArray)
      .controls;
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

  addInputValidation() {
    const abilityScoresGroup = this.characterCreationForm.get(
      "abilityScores"
    ) as FormGroup;
    Object.keys(abilityScoresGroup.controls).forEach((key) => {
      const control = abilityScoresGroup.get(key) as FormControl;
      const inputElement = document.querySelector(
        `input[formControlName="${key}"]`
      );
      if (inputElement) {
        this.renderer.listen(inputElement, "input", (event) => {
          const value = event.target.value;
          if (value < 1 || value > 20) {
            event.target.value = Math.max(1, Math.min(20, value));
            control.setValue(event.target.value);
          }
        });
      }
    });
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
            // control.markAsPristine();
            break;
          }
        }
      }
    } else {
      this.abilityPoints = this.maxAbilityPoints - totalPoints;
    }

    this.addInputValidation();
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
    const backgroundValue = this.characterCreationForm.get("background")?.value;
    const backgroundSkills = this.backgrounds[backgroundValue];

    if (event.target.checked) {
      if (
        this.selectedSkills.length <
        2 + (backgroundSkills ? backgroundSkills.length : 0)
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
      this.hasArchetypes = this.filteredArchetypes.length > 0;
    } else {
      const selectedArchetype = this.archetype.find(
        (archetype) => archetype.class === selectedClass
      );
      this.filteredArchetypes =
        selectedArchetype?.archetypes.map((archetype) => archetype.name) || [];
      this.hasArchetypes = this.filteredArchetypes.length > 0;
    }
  }

  selectEquipment() {
    const selectedClass = this.characterCreationForm.get("class")?.value;
    const selectedEquipment = equipment.find(
      (equip) => equip.class === selectedClass
    );

    const equipmentChoicesFormArray = this.characterCreationForm.get(
      "equipment_choices"
    ) as FormArray;
    equipmentChoicesFormArray.clear(); // Clear previous selections

    if (selectedEquipment) {
      selectedEquipment.equipment_choices.forEach((choice: any) => {
        equipmentChoicesFormArray.push(
          this.fb.group({
            item: [choice.item],
            alternate: [choice.alternate],
            itemDisabled: [{ value: false, disabled: false }],
            alternateDisabled: [{ value: false, disabled: false }],
            selected: [null],
          })
        );
      });
    }
  }

  onSelectionChange(index: number, type: "item" | "alternate") {
    const equipmentChoicesFormArray = this.characterCreationForm.get(
      "equipment_choices"
    ) as FormArray;
    const choiceGroup = equipmentChoicesFormArray.at(index) as FormGroup;

    if (type === "item") {
      choiceGroup.get("itemDisabled")?.enable();
      choiceGroup.get("alternateDisabled")?.disable();
      choiceGroup.get("selected")?.setValue(choiceGroup.get("item")?.value);
    } else {
      choiceGroup.get("itemDisabled")?.disable();
      choiceGroup.get("alternateDisabled")?.enable();
      choiceGroup
        .get("selected")
        ?.setValue(choiceGroup.get("alternate")?.value);
    }
  }

  onUncheck(index: number) {
    const equipmentChoicesFormArray = this.characterCreationForm.get(
      "equipment_choices"
    ) as FormArray;
    const choiceGroup = equipmentChoicesFormArray.at(index) as FormGroup;

    choiceGroup.get("itemDisabled")?.enable();
    choiceGroup.get("alternateDisabled")?.enable();
    choiceGroup.get("selected")?.setValue(null);
  }

  // Navigation methods
  nextStep() {
    this.selectArchetype();
    this.selectBackground();
    this.selectEquipment();
    this.getSkills();
    if (this.currentStep < 6) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  onSubmit() {
    if (this.characterCreationForm.valid) {
      this.nextStep();
      this.calculateRacialBonus();
      console.log("Form data:", this.characterCreationForm.value);
      this.saveFormDataToFile();
    } else {
      console.log(
        "Please fill out all required fields.",
        this.characterCreationForm
      );
    }
  }

  saveFormDataToFile() {
    const data = this.characterCreationForm.value;
    this.http.post("http://localhost:3000/character", data).subscribe(
      (response) => {
        console.log("Form data saved successfully:", response);
      },
      (error) => {
        console.error("Error saving form data:", error);
      }
    );
  }
}
