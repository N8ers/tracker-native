import { FlatList, SafeAreaView, Text, View } from "react-native"

export default function Progress() {
  const data = []
  for (let i = 0; i <= 31; i++) {
    data.push({ id: i, value: `val - ${i}` })
  }
  console.log(data)

  return (
    <View>
      <Text>I am stats!</Text>

      <Text>I would be a drop down month selector</Text>

      <SafeAreaView>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View>
              <Text>{item.value}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </View>
  )
}
