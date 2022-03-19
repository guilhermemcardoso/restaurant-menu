import React, {useContext} from 'react';
import {HomePageContainer, ContentContainer} from './styles';
import PageTitle from '../../components/PageTitle';
import Loading from '../../components/Loading';
import Divider from '../../components/Divider';
import MenuTitle from '../../components/MenuTitle';
import SectionList from '../../components/SectionList';
import MenuItemList from '../../components/MenuItemList';
import {secondaryDivider} from '../../../assets/colors';
import {RestaurantContext} from '../../../data/contexts/restaurant-context';

const Home = () => {
  const {restaurant, loading, selectMenuItem, selectMenuSection, menuSection} =
    useContext(RestaurantContext);

  return loading ? (
    <Loading />
  ) : (
    <HomePageContainer>
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
    </HomePageContainer>
  );
};

export default Home;
