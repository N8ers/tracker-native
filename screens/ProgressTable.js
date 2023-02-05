import { useDispatch, useSelector } from "react-redux"
import { FlatList, SafeAreaView, Text, View, StyleSheet } from "react-native"

import { fetchWeights } from "../store/weights"
import { useEffect } from "react"

export default function ProgressTable() {
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
          <Text style={styles.rangeSelector}>
            I will be a drop down month selector
          </Text>

          <SafeAreaView>
            <FlatList
              data={weights}
              renderItem={({ item }) => (
                <View style={styles.listItemContainer}>
                  <Text style={styles.listItem}>
                    <Text style={styles.listItemDate}>
                      {item.date.split("T")[0]}
                    </Text>
                    <Text style={styles.listItemWeight}>{item.weight}</Text>
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

const styles = StyleSheet.create({
  rangeSelector: {
    padding: 20,
  },
  listItemContainer: {},
  listItem: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 5,
  },
  listItemDate: {},
  listItemWeight: {
    marginLeft: 50,
  },
})
