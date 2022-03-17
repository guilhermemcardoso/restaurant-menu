import React, {useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import {SafeAreaView} from 'react-native';
import { HomeFactory } from './src/main/factories/screens/Home';

const App = () => {

  useEffect(() => {
    RNBootSplash.hide({fade: true});
  }, []);

  return (
    <SafeAreaView>
      <HomeFactory />
    </SafeAreaView>
  );
};

export default App;
