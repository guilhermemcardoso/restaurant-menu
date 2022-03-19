import { ReactNode } from "react";
import { RemoteGetRestaurant } from "../../data/usecases/get-restaurant/remote-get-restaurant";

export interface RestaurantProviderProps {
  children: ReactNode;
  remoteGetRestaurant: RemoteGetRestaurant;
}
