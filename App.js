import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { RecoilRoot } from 'recoil';
import Main from './src/Main';

export default function App() {
  return (
    <RecoilRoot>
      <Main />
      <StatusBar style="auto" />
    </RecoilRoot>
  );
}
