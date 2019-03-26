import { createAppContainer, createStackNavigator } from "react-navigation";

import Main from "./pages/Main";
import PodCast from "./pages/Podcast";

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      PodCast
    },
    {
      defaultNavigationOptions: { header: null }
    }
  )
);

export default Routes;
