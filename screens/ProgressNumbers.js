import { useSelector } from "react-redux"
import { FlatList, SafeAreaView, Text, View } from "react-native"

export default function ProgressChart() {
  const weights = useSelector((state) => state.weight.weights)

  return (
    <View>
      <Text>I would be a drop down month selector</Text>

      <SafeAreaView>
        <FlatList
          data={weights}
          renderItem={({ item }) => (
            <View>
              <Text>
                {item.date.split("T")[0]} - {item.weight}
              </Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </View>
  )
}
