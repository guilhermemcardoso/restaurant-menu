import { ReactNode } from "react";
import { GetRestaurant } from "../usecases/get-restaurant";

export interface RestaurantProviderProps {
  children: ReactNode;
  remoteGetRestaurant: GetRestaurant;
}
