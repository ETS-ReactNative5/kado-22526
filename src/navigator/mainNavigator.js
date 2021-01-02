import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen32189773Navigator from '../features/BlankScreen32189773/navigator';
import BlankScreen31189772Navigator from '../features/BlankScreen31189772/navigator';
import BlankScreen32186617Navigator from '../features/BlankScreen32186617/navigator';
import BlankScreen31186616Navigator from '../features/BlankScreen31186616/navigator';
import CopyOfBlankScreen25186615Navigator from '../features/CopyOfBlankScreen25186615/navigator';
import BlankScreen30186614Navigator from '../features/BlankScreen30186614/navigator';
import BlankScreen29186613Navigator from '../features/BlankScreen29186613/navigator';
import BlankScreen28186612Navigator from '../features/BlankScreen28186612/navigator';
import BlankScreen26186611Navigator from '../features/BlankScreen26186611/navigator';
import CopyOfBlankScreen14186609Navigator from '../features/CopyOfBlankScreen14186609/navigator';
import BlankScreen27186608Navigator from '../features/BlankScreen27186608/navigator';
import BlankScreen26186607Navigator from '../features/BlankScreen26186607/navigator';
import BlankScreen24186605Navigator from '../features/BlankScreen24186605/navigator';
import BlankScreen23186604Navigator from '../features/BlankScreen23186604/navigator';
import BlankScreen22186603Navigator from '../features/BlankScreen22186603/navigator';
import BlankScreen21186602Navigator from '../features/BlankScreen21186602/navigator';
import BlankScreen20186601Navigator from '../features/BlankScreen20186601/navigator';
import BlankScreen19186600Navigator from '../features/BlankScreen19186600/navigator';
import BlankScreen18186599Navigator from '../features/BlankScreen18186599/navigator';
import BlankScreen17186598Navigator from '../features/BlankScreen17186598/navigator';
import BlankScreen16186597Navigator from '../features/BlankScreen16186597/navigator';
import BlankScreen15186596Navigator from '../features/BlankScreen15186596/navigator';
import BlankScreen14186595Navigator from '../features/BlankScreen14186595/navigator';
import BlankScreen13186594Navigator from '../features/BlankScreen13186594/navigator';
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
import Settings171561Navigator from '../features/Settings171561/navigator';
import Settings171544Navigator from '../features/Settings171544/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen32189773: { screen: BlankScreen32189773Navigator },
BlankScreen31189772: { screen: BlankScreen31189772Navigator },
BlankScreen32186617: { screen: BlankScreen32186617Navigator },
BlankScreen31186616: { screen: BlankScreen31186616Navigator },
CopyOfBlankScreen25186615: { screen: CopyOfBlankScreen25186615Navigator },
BlankScreen30186614: { screen: BlankScreen30186614Navigator },
BlankScreen29186613: { screen: BlankScreen29186613Navigator },
BlankScreen28186612: { screen: BlankScreen28186612Navigator },
BlankScreen26186611: { screen: BlankScreen26186611Navigator },
CopyOfBlankScreen14186609: { screen: CopyOfBlankScreen14186609Navigator },
BlankScreen27186608: { screen: BlankScreen27186608Navigator },
BlankScreen26186607: { screen: BlankScreen26186607Navigator },
BlankScreen24186605: { screen: BlankScreen24186605Navigator },
BlankScreen23186604: { screen: BlankScreen23186604Navigator },
BlankScreen22186603: { screen: BlankScreen22186603Navigator },
BlankScreen21186602: { screen: BlankScreen21186602Navigator },
BlankScreen20186601: { screen: BlankScreen20186601Navigator },
BlankScreen19186600: { screen: BlankScreen19186600Navigator },
BlankScreen18186599: { screen: BlankScreen18186599Navigator },
BlankScreen17186598: { screen: BlankScreen17186598Navigator },
BlankScreen16186597: { screen: BlankScreen16186597Navigator },
BlankScreen15186596: { screen: BlankScreen15186596Navigator },
BlankScreen14186595: { screen: BlankScreen14186595Navigator },
BlankScreen13186594: { screen: BlankScreen13186594Navigator },
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
