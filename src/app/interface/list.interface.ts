export interface ListInterface {
  index: string;
  name: string;
  url: string;
}

export interface ListOfElementsInterface {
  count: number;
  results: ListInterface[];
}
