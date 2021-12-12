import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {IconFill, IconOutline} from '@ant-design/icons-react-native';

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <IconOutline name="user" size={25} color="#666" />
      <Text>Login Screen</Text>
      <Button
        title="Click Here"
        onPress={() => navigation.navigate('Signup')}
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
