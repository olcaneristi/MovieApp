import React from 'react';
import { Details, Favorites, Profile, Login, Signup } from '../../screens';
import RootNavigator from './bottomTab';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

const Stack = createSharedElementStackNavigator();

const options = {
  headerShown: false,
  cardStyleInterpolator: ({ current: { progress } }) => {
    return {
      cardStyle: {
        opacity: progress,
      },
    };
  },
};

const StackScreen = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen options={() => options} name="Movies" component={RootNavigator} />
      <Stack.Screen options={() => options} name="Details" component={Details} />
      <Stack.Screen options={() => options} name="Favorites" component={Favorites} />
      <Stack.Screen options={() => options} name="Profile" component={Profile} />
      <Stack.Screen options={() => options} name="Login" component={Login} />
      <Stack.Screen options={() => options} name="SignUp" component={Signup} />
    </Stack.Navigator>
  );
};

export default StackScreen;
