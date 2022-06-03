import { StyleSheet, View, SafeAreaView, FlatList, Pressable  } from 'react-native'
import React from 'react'
import Text from '../components/text'
import SafeViewAndroid from '../components/SafeViewAndroid '
import PlanetHeader from '../components/planet-header'
import { colors } from '../theme/colors'
import { PLANET_LIST } from '../data/planet-list'
import { spacing } from '../theme/spacing'
import { AntDesign } from '@expo/vector-icons';

const Home = ({navigation}) => {

  const planetItems = ({ item, index }) => {
    const { name, color } = item;
    return (
      <Pressable onPress={() => {navigation.navigate("Details", {planet: item})}} style={styles.item}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={[styles.circle, { backgroundColor: color }]} />
          <Text preset="h4" style={[styles.itemName]}>{name}</Text>
        </View>
        <AntDesign name="right" size={18} color="white" />
      </Pressable>
    )
  }

  return (
    <SafeAreaView style={[SafeViewAndroid.AndroidSafeArea, styles.container]}>
      <PlanetHeader />
      <FlatList contentContainerStyle={styles.list}
        data={PLANET_LIST}
        keyExtractor={(item, index) => item.name}
        renderItem={planetItems}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: spacing[4],
    // borderWidth: 1,
    // borderColor: colors.white,
  },
  itemName: {
    textTransform: 'uppercase',
    marginLeft: spacing[4],
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  list: {
    padding: spacing[4],
    // borderWidth: 1,
    // borderColor: colors.white,
  },
  separator: {
    borderBottomColor: colors.white,
    borderBottomWidth: 0.5,
  }
})