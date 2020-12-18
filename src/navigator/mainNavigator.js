import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen12186593Navigator from '../features/BlankScreen12186593/navigator';
import BlankScreen11186592Navigator from '../features/BlankScreen11186592/navigator';
import BlankScreen10186591Navigator from '../features/BlankScreen10186591/navigator';
import BlankScreen9186590Navigator from '../features/BlankScreen9186590/navigator';
import BlankScreen8186589Navigator from '../features/BlankScreen8186589/navigator';
import BlankScreen7186588Navigator from '../features/BlankScreen7186588/navigator';
import BlankScreen6186587Navigator from '../features/BlankScreen6186587/navigator';
import BlankScreen5186586Navigator from '../features/BlankScreen5186586/navigator';
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
BlankScreen12186593: { screen: BlankScreen12186593Navigator },
BlankScreen11186592: { screen: BlankScreen11186592Navigator },
BlankScreen10186591: { screen: BlankScreen10186591Navigator },
BlankScreen9186590: { screen: BlankScreen9186590Navigator },
BlankScreen8186589: { screen: BlankScreen8186589Navigator },
BlankScreen7186588: { screen: BlankScreen7186588Navigator },
BlankScreen6186587: { screen: BlankScreen6186587Navigator },
BlankScreen5186586: { screen: BlankScreen5186586Navigator },
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
