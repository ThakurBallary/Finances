import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { AuthStackParamList } from 'navigation/AuthStackNavigator';
import { useAppDispatch } from 'hooks';
import { setToken } from 'features/auth';
import { styles } from 'themes';

type SignInNavigationProp = StackNavigationProp<AuthStackParamList, 'SignIn'>;

type Props = {
  navigation: SignInNavigationProp;
};

export default function SignIn({ navigation }: Props) {
  const { colors } = useTheme();
  const dispatch = useAppDispatch();

  function login() {
    dispatch(setToken('1'));
  }

  function signup() {
    navigation.navigate('SignUp');
  }

  return (
    <View style={styles.flexCenter}>
      <Text style={{ color: colors.text }} onPress={login}>Sign In</Text>
      <Text style={{ color: colors.text }} onPress={signup}>Sign Up</Text>
    </View>
  );
}
