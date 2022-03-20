import React, {useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import RouterFactory from './src/main/factories/routes/router';

const App = () => {
  useEffect(() => {
    RNBootSplash.hide({fade: true});
  }, []);

  return <RouterFactory />;
};

export default App;
