import { View, SafeAreaView } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'
import Text from '../components/text'
import PlanetHeader from '../components/planet-header'
import SafeViewAndroid from '../components/SafeViewAndroid '

export default function Details() {
  return (
    <SafeAreaView style={[SafeViewAndroid.AndroidSafeArea]}>
    <PlanetHeader backBtn={true}/>
    <View>
      <Text style={{color: colors.white}}>details</Text>
    </View>
    </SafeAreaView>
  )
}