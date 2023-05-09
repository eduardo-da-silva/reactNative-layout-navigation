import { useSetRecoilState, useRecoilValue } from 'recoil';
import { StyleSheet, Button, Text, View } from 'react-native';

import { userState } from '../recoil/atoms/auth';

export default function HomeScreen() {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
