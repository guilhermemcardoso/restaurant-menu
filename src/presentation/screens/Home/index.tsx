import React, {useContext, useEffect} from 'react';
import {HomePageContainer, ContentContainer} from './styles';
import PageTitle from '../../components/PageTitle';
import Loading from '../../components/Loading';
import Divider from '../../components/Divider';
import MenuTitle from '../../components/MenuTitle';
import SectionList from '../../components/SectionList';
import MenuItemList from '../../components/MenuItemList';
import {secondaryDivider} from '../../../assets/colors';
import {RestaurantContext} from '../../../data/contexts/restaurant-context';
import ErrorHandler from '../../components/ErrorHandler';

const Home = () => {
  const {
    restaurant,
    loading,
    selectMenuItem,
    selectMenuSection,
    getRestaurant,
    menuSection,
    error,
  } = useContext(RestaurantContext);

  return loading ? (
    <Loading />
  ) : (
    <HomePageContainer>
      {error ? (
        <ErrorHandler message='Something went wrong' actionLabel='Try again' actionFunction={getRestaurant} />
      ) : (
        <>
          <PageTitle title={restaurant?.name} />
          <Divider />
          <ContentContainer>
            <MenuTitle title="MENU" />
            <Divider color={secondaryDivider} />
            <SectionList
              selectedSection={menuSection}
              onSelectItem={selectMenuSection}
              data={restaurant?.menus[0]?.sections || []}
            />
            <Divider color={secondaryDivider} />
            <MenuItemList
              onSelectItem={selectMenuItem}
              data={menuSection?.menuitems || []}
            />
          </ContentContainer>
        </>
      )}
    </HomePageContainer>
  );
};

export default Home;
