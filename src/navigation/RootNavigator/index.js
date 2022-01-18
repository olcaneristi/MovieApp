import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Movies, Favorites } from '../../screens';
import { FavoritesIcon, FavoritesFill, Movie, MovieFill } from '../../assets/Icons';

const Tab = createBottomTabNavigator();

const tabBarOptions = {
  tabBarShowLabel: false,
  activeTintColor: '#9381ff',
};

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={tabBarOptions} initialRouteName="MoviesScreen">
        <Tab.Screen
          name="MoviesScreen"
          component={Movies}
          options={{
            headerTitle: 'Movies',
            tabBarActiveTintColor: '#000',
            tabBarIcon: ({ focused }) => {
              if (focused) return <MovieFill />;
              return <Movie />;
            },
          }}
        />

        <Tab.Screen
          name="FavoritesScreen"
          component={Favorites}
          options={{
            headerTitle: 'Favorites',
            tabBarActiveTintColor: '#000',
            tabBarIcon: ({ focused }) => {
              if (focused) return <FavoritesFill />;
              return <FavoritesIcon />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
