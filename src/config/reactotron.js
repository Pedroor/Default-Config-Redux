import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { reactotronRedux } from 'reactotron-redux';

Reactotron.setAsyncStorageHandler(AsyncStorage)
  .configure({ host: '192.168.40.110' })
  .useReactNative()
  .use(reactotronRedux())
  .connect();

// console.tron.log()
console.tron = Reactotron;

export default Reactotron;
