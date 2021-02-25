import React from 'react';
import { Button, View, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { MainStackParamList } from 'navigation/MainStackNavigator';
import { styles } from 'themes';

type HomeScreenNavigationProp = StackNavigationProp<MainStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

export default function Home({ navigation }: Props) {
  const { colors } = useTheme();

  return (
    <View style={styles.flexCenter}>
      <Text style={{ color: colors.text }}>Home Screen</Text>
      <Button
        onPress={() => navigation.navigate('Profile')}
        title="Open Profile"
      />
    </View>
  );
}
