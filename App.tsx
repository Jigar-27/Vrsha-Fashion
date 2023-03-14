import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './src/Home';
import Registration from './src/Registration';
import Login from './src/Login';
import Employee from './src/Employee'
import Customer from './src/Customer'
import WP from './src/Working-partner'



const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function Root() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Employee" component={Employee} />
      <Drawer.Screen name="Customer" component={Customer} />
      {/* <Drawer.Screen name="WP" component={WP} /> */}
    </Drawer.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        {/* <Stack.Screen name="Home" component={Root} /> */}
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

export default App;