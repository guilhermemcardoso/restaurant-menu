import { Restaurant } from "../models/restaurant";

export interface GetRestaurant {
    get(params: GetRestaurant.Params): Promise<Restaurant | undefined>;
}

export namespace GetRestaurant {
    export type Params = {
        restaurantId: string;
    };
}