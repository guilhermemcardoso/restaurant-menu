import React from 'react';
import Home from '../../../../presentation/screens/Home';
import {RemoteGetRestaurant} from '../../../../data/usecases/get-restaurant/remote-get-restaurant';
import {HttpClient} from '../../../../infra/http/http-client';
import {RestaurantProvider} from '../../../../data/contexts/restaurant-context';

export const HomeFactory = () => {
  const httpClient = new HttpClient();
  const remoteGetRestaurant = new RemoteGetRestaurant(httpClient);

  return (
    <RestaurantProvider remoteGetRestaurant={remoteGetRestaurant}>
      <Home />
    </RestaurantProvider>
  );
};
