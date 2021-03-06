import React, {createContext, useState, useEffect} from 'react';
import {RestaurantContextData} from '../../domain/contexts/restaurant-context';
import {Restaurant} from '../../domain/models/restaurant';
import {Section} from '../../domain/models/section';
import {Menuitem} from '../../domain/models/menuitem';
import {RestaurantProviderProps} from '../../domain/contexts/restaurant-provider-props';
import { RESTAURANT_ID } from '@env';

export const RestaurantContext = createContext({} as RestaurantContextData);

export function RestaurantProvider({
  remoteGetRestaurant,
  children,
}: RestaurantProviderProps) {
  const [loading, setLoading] = useState(false);
  const [restaurant, setRestaurant] = useState<Restaurant>();
  const [menuSection, setMenuSection] = useState<Section>();
  const [menuItem, setMenuItem] = useState<Menuitem>();
  const [error, setError] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  function selectMenuSection(menuSection: Section) {
    setMenuSection(menuSection);
  }

  function selectMenuItem(menuItem: Menuitem) {
    setMenuItem(menuItem);
  }

  async function getRestaurant() {
    setLoading(true);
    const response = await remoteGetRestaurant.get({ restaurantId: RESTAURANT_ID});
    setRestaurant(response.restaurant);
    setError(response.error);
    setMessage(response.message);
    setLoading(false);
  }

  useEffect(() => {
    getRestaurant();
  }, []);

  return (
    <RestaurantContext.Provider
      value={{
        restaurant,
        loading,
        error,
        message,
        menuSection,
        menuItem,
        getRestaurant,
        selectMenuSection,
        selectMenuItem,
      }}>
      {children}
    </RestaurantContext.Provider>
  );
}
