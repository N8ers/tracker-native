import { useDispatch, useSelector } from "react-redux"
import { FlatList, SafeAreaView, View } from "react-native"
import { useEffect } from "react"

import { fetchWeights } from "../store/weights"

import DateRangeSelector from "../components/DateRangeSelector"
import ProgressTableRow from "../components/ProgressTableRow"
import ProgressTableHeaders from "../components/ProgressTableHeaders"

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
          <DateRangeSelector />

          <ProgressTableHeaders />

          <SafeAreaView>
            <FlatList
              data={weights}
              renderItem={({ item }) => (
                <ProgressTableRow
                  id={item.id}
                  date={item.date}
                  weight={item.weight}
                />
              )}
              keyExtractor={(item) => item.id}
            />
          </SafeAreaView>
        </View>
      )}
    </View>
  )
}
