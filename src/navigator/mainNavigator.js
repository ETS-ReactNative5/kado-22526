import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen4186585Navigator from '../features/BlankScreen4186585/navigator';
import BlankScreen3186584Navigator from '../features/BlankScreen3186584/navigator';
import BlankScreen2186583Navigator from '../features/BlankScreen2186583/navigator';
import BlankScreen1186582Navigator from '../features/BlankScreen1186582/navigator';
import BlankScreen0186581Navigator from '../features/BlankScreen0186581/navigator';
import Settings171561Navigator from '../features/Settings171561/navigator';
import Settings171544Navigator from '../features/Settings171544/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen4186585: { screen: BlankScreen4186585Navigator },
BlankScreen3186584: { screen: BlankScreen3186584Navigator },
BlankScreen2186583: { screen: BlankScreen2186583Navigator },
BlankScreen1186582: { screen: BlankScreen1186582Navigator },
BlankScreen0186581: { screen: BlankScreen0186581Navigator },
Settings171561: { screen: Settings171561Navigator },
Settings171544: { screen: Settings171544Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
