import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../views/Home/Home';
import Detail from '../views/Detail/Detail';


// import RootStackParams from '../consts';

const Stack = createNativeStackNavigator();

const routeScreenDefault = {
    headerStyle: {
        backgroundColor: "#2C3E50",
    },
    headerTitleStyle: {
        color: "#fff",
    },
}

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} options={routeScreenDefault} />
                <Stack.Screen name="Detail" component={Detail} options={routeScreenDefault} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Routes;
