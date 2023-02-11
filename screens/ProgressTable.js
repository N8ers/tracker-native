import { useDispatch, useSelector } from "react-redux"
import {
  FlatList,
  SafeAreaView,
  View,
  StyleSheet,
  Dimensions,
} from "react-native"
import { useEffect, useState } from "react"

import { fetchWeights } from "../store/weights"

import { useThemes } from "../hooks/useThemes"

import DateRangeSelector from "../components/DateRangeSelector"
import ProgressTableRow from "../components/ProgressTableRow"
import ProgressTableHeaders from "../components/ProgressTableHeaders"
import ProgresssTableRowModal from "../components/ProgressTableRowModal"

export default function ProgressTable() {
  const weights = useSelector((state) => state.weight.weights)
  const isLoading = useSelector((state) => state.weight.loading)

  const themes = useThemes()

  const dispatch = useDispatch()

  const screenHeight = Dimensions.get("window").height

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedRow, setSelectedRow] = useState({
    id: null,
    date: null,
    weight: null,
  })

  const setSelectedItemData = ({ date, id, weight }) => {
    setSelectedRow({ date, id, weight })
    setIsModalVisible(true)
  }

  useEffect(() => {
    dispatch(fetchWeights())
  }, [])

  return (
    <View>
      {!isLoading && (
        <View>
          <DateRangeSelector />

          <View
            style={[
              styles.tableContainer,
              { backgroundColor: themes.lightBackground },
            ]}
          >
            <ProgressTableHeaders />

            <SafeAreaView>
              <FlatList
                style={{
                  height: screenHeight - 265,
                }}
                data={weights}
                renderItem={({ item }) => (
                  <ProgressTableRow
                    id={item.id}
                    date={item.date}
                    weight={item.weight}
                    onPress={setSelectedItemData}
                  />
                )}
                keyExtractor={(item) => item.id}
              />
            </SafeAreaView>
          </View>

          {isModalVisible && (
            <ProgresssTableRowModal
              id={selectedRow.id}
              date={selectedRow.date}
              weight={selectedRow.weight}
              isModalVisible={isModalVisible}
              closeModal={() => setIsModalVisible(false)}
            />
          )}
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  tableContainer: {
    borderWidth: 1,
    marginLeft: 20,
    marginRight: 20,
    padding: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
})
