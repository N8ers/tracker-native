import { useDispatch, useSelector } from "react-redux"
import { FlatList, SafeAreaView, Text, View } from "react-native"

import { fetchWeights } from "../store/weights"
import { useEffect } from "react"

export default function ProgressChart() {
  const weights = useSelector((state) => state.weight.weights)
  const isLoading = useSelector((state) => state.weight.loading)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchWeights())
  }, [])

  return (
    <View>
      {!isLoading && (
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
      )}
    </View>
  )
}
