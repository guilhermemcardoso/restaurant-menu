import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import {RESTAURANT_ID} from '@env';
// import { ButtonContainer, Header, WeatherContainer, MainContainer, Footer } from "./styles";

import {GetRestaurant} from '../../../domain/usecases/get-restaurant';
import {Restaurant} from '../../../domain/models/restaurant';

type Props = {
  getRestaurant: GetRestaurant;
};

const Home = ({getRestaurant}: Props) => {
  const [restaurant, setRestaurant] = useState<Restaurant>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadRestaurantInfo() {
        setLoading(true);
        console.log('before', restaurant)
        const response = await getRestaurant.get({ restaurantId: RESTAURANT_ID});
        console.log('after', restaurant)
        setRestaurant(response);
        setLoading(false);
    }
    
    loadRestaurantInfo();
  }, []);
  console.log('restaurant', restaurant)
  return <Text style={{color: '#000000', fontSize: 30, paddingTop: 30, textAlign: 'center', backgroundColor: '#ff0000'}}>Restaurant</Text>;
};

export default Home;
