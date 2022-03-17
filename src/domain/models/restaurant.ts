import { Menu } from "./menu";

export type Restaurant = {
    id: number;
    name: string;
    priceRange: string;
    menus: Menu[];
  };  