import AsyncStorage from '@react-native-community/async-storage';

let reactotron;
if (__DEV__) {
  console.log('******* reactotron');
  const Reactotron = require('reactotron-react-native').default;
  const {
    trackGlobalErrors,
    openInEditor,
    networking,
  } = require('reactotron-react-native');
  const { reactotronRedux } = require('reactotron-redux');
  reactotron = Reactotron.configure({
    name: 'exchanger_v0',
    //host: '192.168.31.96',
    host: '192.168.1.82',
  })
    // .useReactNative({ overlay: false })
    .useReactNative()
    .setAsyncStorageHandler(AsyncStorage)
    .use(trackGlobalErrors())
    .use(reactotronRedux())
    .use(networking())
    .use(openInEditor())
    .connect();
  global.Reactotron = Reactotron;
} else {
  global.Reactotron = {
    log: () => {},
    logImportant: () => {},
    warn: () => {},
    error: () => {},
  };
}

export const configuredReactotron = reactotron;
