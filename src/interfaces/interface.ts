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
interface menu {
  id: number,
  name: string,
  router: string,
}
export interface mainNavbar{
  id: number,
  name: string,
  route: string,
  pages? : Array<menu> | null,
  menu? : boolean | null,
  
}
export const  modulesWord  = {
  toolbar: [
      [{ font: [] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ script:  "sub" }, { script:  "super" }],
      ["blockquote", "code-block"],
      [{ list:  "ordered" }, { list:  "bullet" }],
      ["link", "image", "video"],
      ["clean"],
  ],
};

export interface makeRoutes{
  id: string,
  element:  JSX.Element,
  path: string,
  pages?: Array<makeRoutes>,
}