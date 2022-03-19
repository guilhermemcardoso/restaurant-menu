import React, {useEffect, useState} from 'react';
import {RESTAURANT_ID} from '@env';

import {GetRestaurant} from '../../../domain/usecases/get-restaurant';
import {Restaurant} from '../../../domain/models/restaurant';

import {HomePageContainer, ContentContainer} from './styles';
import PageTitle from '../../components/PageTitle';
import Loading from '../../components/Loading';
import Divider from '../../components/Divider';
import MenuTitle from '../../components/MenuTitle';
import SectionList from '../../components/SectionList';
import { Section } from '../../../domain/models/section';
import MenuItemList from '../../components/MenuItemList';
import { Menuitem } from '../../../domain/models/menuitem';
import { secondaryDivider } from '../../../assets/colors';

type Props = {
  getRestaurant: GetRestaurant;
};

const Home = ({getRestaurant}: Props) => {
  const [restaurant, setRestaurant] = useState<Restaurant>();
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedSection, setSelectedSection] = useState<Section>();

  useEffect(() => {
    async function loadRestaurantInfo() {
      setLoading(true);
      const response = await getRestaurant.get({restaurantId: RESTAURANT_ID});
      setRestaurant(response);
      setLoading(false);
    }

    loadRestaurantInfo();
  }, []);

  const onSelectSection = (section: Section) => {
    setSelectedSection(section)
  }

  const onSelectMenuitem = (menuitem: Menuitem) => {
    console.log('Clicked')
  }

  return loading ? (
    <Loading />
  ) : (
    <HomePageContainer>
      <PageTitle title={restaurant?.name} />
      <Divider />
      <ContentContainer>
        <MenuTitle title='MENU' />
        <Divider color={secondaryDivider} />
        <SectionList selectedSection={selectedSection} onSelectItem={onSelectSection} data={restaurant?.menus[0].sections || []} />
        <Divider color={secondaryDivider} />
        <MenuItemList 
          onSelectItem={onSelectMenuitem}
          data={selectedSection?.menuitems || []} 
        />
      </ContentContainer>
    </HomePageContainer>
  );
};

export default Home;
