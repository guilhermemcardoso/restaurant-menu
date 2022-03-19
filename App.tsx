import React, {useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import {HomeFactory} from './src/main/factories/screens/Home';

const App = () => {
  useEffect(() => {
    RNBootSplash.hide({fade: true});
  }, []);

  return <HomeFactory />;
};

export default App;
