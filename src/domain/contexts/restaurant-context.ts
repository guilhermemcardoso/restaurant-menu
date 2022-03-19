import {Menuitem} from '../models/menuitem';
import {Restaurant} from '../models/restaurant';
import {Section} from '../models/section';

export interface RestaurantContextData {
  restaurant: Restaurant | undefined;
  loading: boolean;
  error: boolean;
  message: string;
  menuSection: Section | undefined;
  menuItem: Menuitem | undefined;
  getRestaurant: () => void;
  selectMenuSection: (menuSection: Section) => void;
  selectMenuItem: (menuItem: Menuitem) => void;
}
