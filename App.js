import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Text from './src/components/text';
import { colors } from './src/theme/colors'
import { spacing } from './src/theme/spacing'
import { typography } from './src/theme/typography'
import { useFonts } from 'expo-font';

export default function App() {

  //initialize fonts
  const [loaded] =  useFonts({
    'Antonio-Medium': require('./assets/fonts/Antonio-Medium.ttf'),
    'LeagueSpartan-Bold': require('./assets/fonts/LeagueSpartan-Bold.ttf'),
    'LeagueSpartan-Regular': require('./assets/fonts/LeagueSpartan-Regular.ttf'),
  })
  if (!loaded) {
    return <Text>oops nigga!</Text>;
  }

  return (
    <View style={styles.container}>
      <Text preset="h1">Open up App.js to start working on your app!</Text>
      <Text preset="h4" style={{marginTop: spacing[4]}}>hello there</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.orange,
    // backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
