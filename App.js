import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'; // package to make all app navigable
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // package to use a specific navigator: Stack
import CategoriesScreen from './screens/CategoriesScreens';
import MealsOVerviewScreen from './screens/MealsOverviewScreen';
import MealsDetailScreen from './screens/MealsDetailScreen';

const Stack = createNativeStackNavigator(); 
  // Stack is an object with 2 objects inside: Stack.Navigator and Stack.Screen.
  // we can create outside the component function because we dont need to create it at each render.

export default function App() {
  return (
    <>
      <StatusBar style='dark'/>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ // setting styles for all screens
          headerStyle: { backgroundColor: '#ccc'},
          contentStyle: {backgroundColor: 'black'}
          }}
        > 
          {/* Adding initialRouteName prop in Stack.Navigator defines the default screen */}
          {/* If initialRouteName wasn't defined, first child in Stack.Navigator will be default screen */}
          <Stack.Screen
            name='MealsCategories'          
            component={CategoriesScreen}
            options={{
              title: 'All categories'
            }}
          />
          <Stack.Screen 
            name='MealsOverview'
            component={MealsOVerviewScreen}
            // options={({ route, navigation }) => { // adding a function to options allow us to set options dynamically
            // const catId = route.params.categoryId;
            //   return{
            //     title: catId
            //   }
            // }}
          />
          <Stack.Screen 
            name='MealsDetail'
            component={MealsDetailScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
    
  );
}

