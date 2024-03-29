import { View, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Text from './text'
import { spacing } from '../theme/spacing'
import { colors } from '../theme/colors'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

export default function PlanetHeader({ backBtn, title="THE PLANET" }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
    {
        backBtn && (
          <Pressable onPress={() => {navigation.goBack()}} style={{marginRight: spacing[4]}}>
            <AntDesign name="left" size={18} color="white" />
          </Pressable>
        )
      }
      <Text preset="h2">{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: spacing[5],
    borderBottomWidth: 0.2,
    borderBottomColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
  }
})