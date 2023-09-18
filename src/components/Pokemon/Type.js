import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { capitalize } from 'lodash';
import getColorByPokemonType from '../../utils/getColorByPokemonType'

export default function Type({ types }) {
  //console.log("tipos",types);

  const color = (type) => getColorByPokemonType(type);
  return (
    <View style={styles.content}>
      {types.map(item => (
        <View
          key={item.name}
          style={{ backgroundColor: color(item.name), ...styles.pill }}
        >
          <Text>{capitalize(item.name)}</Text>
        </View>
      ))
      }
    </View >
  )
}

const styles = StyleSheet.create({
  content: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  pill: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 20,
    marginHorizontal: 10
  }
})
