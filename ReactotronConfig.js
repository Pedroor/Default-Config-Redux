import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import AsyncStorage from '@react-native-community/async-storage';

// then add it to the plugin list
if (__DEV__) {
  const reactotron = Reactotron.configure({ name: 'React Native Demo' })
    .useReactNative()
    .use(reactotronRedux()) //  <- here i am!
    .connect(); //Don't forget about me!
}

export default reactotron;
