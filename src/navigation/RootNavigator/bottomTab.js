import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Movies, Favorites, Profile } from '../../screens';
import { Bookmark, BookmarkFill, Movie, MovieFill, ProfileIcon, ProfileFill } from '../../assets/Icons';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#0f0f1a',
          borderTopColor: '#0f0f1a',
          paddingVertical: 10,
        },
        tabBarShowLabel: false,
      }}
      initialRouteName="MoviesScreen"
    >
      <Tab.Screen
        name="MoviesScreen"
        component={Movies} // <-- this is the component we defined above
        options={{
          headerShown: false,
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
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            if (focused) return <BookmarkFill />;
            return <Bookmark />;
          },
        }}
      />

      <Tab.Screen
        name="ProfileScreen"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            if (focused) return <ProfileFill />;
            return <ProfileIcon />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
