import{createStackNavigator} from 'react-navigation-stack';
import{createAppContainer} from 'react-navigation';
import Page1 from '../screens/page1';
import Page2 from '../screens/page2';
const screens = {
    Page1:{
        screen: Page1
    },
    Page2: {
        screen: Page2

    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);