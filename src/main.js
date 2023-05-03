import * as React from 'react';
import * as SecureStore from 'expo-secure-store';

import { useRecoilValue, useSetRecoilState } from 'recoil';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Button, TextInput, Text, View } from 'react-native';

import { userState } from './recoil/atoms/auth';
const Stack = createNativeStackNavigator();

function HomeScreen() {
  const setUser = useSetRecoilState(userState);
  const currentUserState = useRecoilValue(userState);

  return (
    <View>
      <Text>Hello Home</Text>
      <Text>{currentUserState.userToken}</Text>
      <Button title="Logout" onPress={() => setUser({ loggedIn: false })} />
    </View>
  );
}

function LoginScreen() {
  const setUser = useSetRecoilState(userState);

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button
        title="Sign in"
        onPress={() => setUser({ loggedIn: true, userToken: 'dummy' })}
      />
    </View>
  );
}

export default function Main() {
  const currentUserState = useRecoilValue(userState);
  const setUser = useSetRecoilState(userState);

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await SecureStore.getItemAsync('userToken');
      } catch (e) {
        console.log(e);
      }
      console.log(userToken);
      setUser({ userToken });
    };

    bootstrapAsync();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {currentUserState.loggedIn ? (
          <Stack.Screen name="Home" component={HomeScreen} />
        ) : (
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
