import { useDispatch, useSelector } from "react-redux"
import { FlatList, SafeAreaView, Text, View, StyleSheet } from "react-native"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

import { useThemes } from "../hooks/useThemes"

import { fetchWeights } from "../store/weights"
import { useEffect } from "react"

export default function ProgressTable() {
  const weights = useSelector((state) => state.weight.weights)
  const isLoading = useSelector((state) => state.weight.loading)

  const themes = useThemes()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchWeights())
  }, [])

  return (
    <View>
      {!isLoading && (
        <View>
          <View
            style={{
              borderRadius: 20,
              backgroundColor: themes.lightBackground,
              margin: 20,
              padding: 10,
              flexDirection: "row",
              marginTop: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", marginRight: 10 }}>MM/DD/YYY</Text>
            <MaterialCommunityIcons name="calendar" color="white" size="24" />
            <Text style={{ marginLeft: 20, marginRight: 20, fontSize: 20 }}>
              |
            </Text>
            <Text style={{ color: "white", marginRight: 10 }}>MM/DD/YYY</Text>
            <MaterialCommunityIcons name="calendar" color="white" size="24" />
          </View>

          <SafeAreaView>
            <FlatList
              data={weights}
              renderItem={({ item }) => (
                <View>
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
