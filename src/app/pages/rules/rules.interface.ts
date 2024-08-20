export interface RulesInterface {
  index: string;
  name: string;
  desc: string | string[];
  url: string;
}

export interface RuleSection {
  name: string;
  index: string;
  url: string;
}

export interface Rule {
  name: string;
  index: string;
  desc: string;
  subsections: RuleSection[];
  url: string;
}
