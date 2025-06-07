import React from 'react';
import { Text, View } from 'react-native';
import useAuth from '../hooks/useAuth';

const LoginScreen = () => {
   const {user}=useAuth()
   console.log(user)
    return (
        <View>
            <Text>I am login page</Text>
        </View>
    );
};

export default LoginScreen;