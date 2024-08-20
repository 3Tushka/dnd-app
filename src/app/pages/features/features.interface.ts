interface Feature {
  index: string;
  name: string;
  url: string;
}
export interface FeatureList {
  count: number;
  results: Feature[];
}

export interface FeatureByIndexInterface {
  index: string;
  class: {
    index: string;
    name: string;
    url: string;
  };
  name: string;
  level: number;
  prerequisites: any[];
  desc: string[];
  url: string;
}
