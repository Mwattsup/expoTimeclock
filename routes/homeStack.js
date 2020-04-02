import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';
import DepartmentScreen from '../screens/DepartmentScreen';

const screens = {
    LoginScreen: {
        screen: LoginScreen
    },
    DepartmentScreen: {
        screen: DepartmentScreen
    },
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);