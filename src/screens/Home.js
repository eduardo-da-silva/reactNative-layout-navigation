import { useSetRecoilState, useRecoilValue } from 'recoil';
import { StyleSheet, Button, Text, View } from 'react-native';
import * as SecureStore from 'expo-secure-store';

import { userState } from '../recoil/atoms/auth';

export default function HomeScreen() {
  const setUser = useSetRecoilState(userState);
  const currentUserState = useRecoilValue(userState);

  const logout = async () => {
    setUser({ loggedIn: false, access_token: null, refresh_token: null });
    await SecureStore.deleteItemAsync('access_token');
  };

  return (
    <View>
      <Text>Hello Home</Text>
      <Text>{currentUserState.access_token}</Text>
      <Button title="Logout" onPress={() => logout()} />
    </View>
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
