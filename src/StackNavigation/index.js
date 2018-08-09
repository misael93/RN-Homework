import { createStackNavigator } from 'react-navigation';
import Login from '../Models/Login';
import PlayerList from '../Models/PlayerList';
import Player from '../Models/Player';

const StackNavigation = createStackNavigator(
    {
        Login: { screen: Login },
        PlayerList: { screen: PlayerList },
        Player: { screen: Player }
    },
    {
        initialRouteName: 'Login',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#00529F'
            },
            headerTintColor: '#FFF',
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        }
    }
);

export default StackNavigation;