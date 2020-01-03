import React from 'react'
import { StyleSheet, ScrollView, TouchableOpacity, View, Text } from 'react-native'

const s = StyleSheet.create({
  item: {
    width: 200,
    height: 50,
    backgroundColor: 'red',
    opacity: 0.2,
  },
})

const worksItemCount = 30
const worksOnVerticalOnlyItemCount = 120
const doesNotWorkItemCount = 150

const items = []
for (let id = 1; id <= doesNotWorkItemCount; id++) {
  items.push({ id, name: `Item ${id}` })
}

const Item = ({ name }) => (
  <TouchableOpacity activeOpacity={1.0} style={s.item}>
    <View>
      <Text>{name}</Text>
    </View>
  </TouchableOpacity>
)

const App = () => {
  return (
    <ScrollView horizontal={true}>
      {items.map(c => <Item key={c.id} name={c.name} />)}
    </ScrollView>
  )
}

export default App