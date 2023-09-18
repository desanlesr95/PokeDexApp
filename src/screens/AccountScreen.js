import React from 'react';
import { View } from 'react-native';
import UserData from '../components/Auth/UserData';
import LoginForm from '../components/Auth/LoginForm';
import useAuth from '../hooks/useAuth';


const AccountScreen = () => {
  const {auth} =  useAuth();
  console.log(useAuth());
  return (
    <View>
      {auth ? <UserData/> : <LoginForm/>}
    </View>
  );
}

export default AccountScreen;
