/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {AppStackNavigator} from './js/navigators/AppNavigators';
import {name as appName} from './app.json';

const AppStackNavigatorContainer = createAppContainer(AppStackNavigator);
AppRegistry.registerComponent(appName, () => AppStackNavigatorContainer);
