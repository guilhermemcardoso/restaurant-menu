import React, {useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import Router from './src/main/routes/router';

const App = () => {
  useEffect(() => {
    RNBootSplash.hide({fade: true});
  }, []);

  return <Router />;
};

export default App;
