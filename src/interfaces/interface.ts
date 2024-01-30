// Типизация данных для использования в selector
export interface textForm {
  id: number;
  category: string;
  placeholder: string;
  unit: string;
  nameInput: string;
  input_article: string;
}
// Типизация характеристик рыбы для коммерческого разведения
export interface RiverFish {
  id: number;
  name: string;
  feed_ratio: number;
  temperature: number;
  sales_weight: number;
  stocking_density: number;
  growing_time: number;
}
// Реализация в Select
export interface universalTypeSelect {
  id: number;
  name: string;
}

// Типизация данных в интерфейсе mainNavbar
interface menu {
  id: number;
  name: string;
  router: string;
}
// Типизация данных для вывода меню в Navbar
export interface mainNavbar {
  id: number;
  name: string;
  route: string;
  pages?: Array<menu> | null;
  menu?: boolean | null;
}
// Константа для работы с фреймворком ReactQuill
export const modulesWord = {
  toolbar: [
    [{ font: [] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ script: "sub" }, { script: "super" }],
    ["blockquote", "code-block"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image", "video"],
    ["clean"],
  ],
};

// Типизация данных для работы с роутингом
export interface makeRoutes {
  id: string;
  element: JSX.Element;
  path: string;
  pages?: Array<makeRoutes>;
}
