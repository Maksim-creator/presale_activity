import React from 'react';
import {TouchableOpacity} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MainScreen from '../features/users/screens/MainScreen';
import {screenNames} from './screenNames';
import UserDetails from '../features/users/screens/UserDetails';
import {actions} from '../features/users';

const Navigation = () => {
  const Stack = createNativeStackNavigator();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <Stack.Navigator initialRouteName={screenNames.MAIN}>
      <Stack.Screen
        name={screenNames.MAIN}
        component={MainScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={screenNames.USER_DETAILS}
        component={UserDetails}
        options={{
          headerLeft: props => (
            <TouchableOpacity
              {...props}
              onPress={() => {
                dispatch(actions.clearUserData());
                navigation.goBack();
              }}>
              <Icon name={'chevron-left'} size={30} />
            </TouchableOpacity>
          ),
          headerBackTitleVisible: false,
          title: ' ',
        }}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
