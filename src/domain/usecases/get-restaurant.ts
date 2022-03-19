import {Restaurant} from '../models/restaurant';

export interface GetRestaurant {
  get(params: GetRestaurant.Params): Promise<GetRestaurant.Response>;
}

export namespace GetRestaurant {
  export type Params = {
    restaurantId: string;
  };

  export type Response = {
    error: boolean;
    message: string;
    restaurant: Restaurant | undefined;
  };
}
