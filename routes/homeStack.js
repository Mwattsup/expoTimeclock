import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';
import DepartmentScreen from '../screens/DepartmentScreen';

const screens = {
    LoginScreen: {
        screen: LoginScreen,
        navigationOptions: {
            headerShown: false
        },
    },
    DepartmentScreen: {
        screen: DepartmentScreen,
        navigationOptions: {
            headerShown: false
        },
    },
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);