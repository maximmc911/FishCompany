export interface putForm {
  unit: string;
  nameInput: string;
  meaning: number;
}
export interface textForm {
  id: number;
  category: string;
  placeholder: string;
  unit: string;
  nameInput: string;
  input_article: string;
}
export interface RiverFish {
  id: number,
  name: string,
  feed_ratio: number,
  temperature: number,
  sales_weight: number,
  stocking_density: number,
  growing_time: number,
}

export interface universalTypeSelect {
  id: number,
  name: string,
}