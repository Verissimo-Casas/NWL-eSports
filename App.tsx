import { StatusBar } from 'react-native';

import { 
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black
 } from '@expo-google-fonts/inter';

import { HOME } from './src/screens/Home/index';
import { Background } from './src/components/Background';

export default function App() {
  const [fontLoaded] = useFonts({
    useFonts,
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  });

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontLoaded ?  <HOME />}
    </Background>
  );
}