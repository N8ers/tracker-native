import { useSelector } from "react-redux"
import { Dimensions, View } from "react-native"
import { LineChart } from "react-native-chart-kit"

import { useThemes } from "../hooks/useThemes"

import DateRangeSelector from "../components/DateRangeSelector"

const screenWidth = Dimensions.get("window").width

export default function ProgressChart() {
  const isLoading = useSelector((state) => state.weight.loading)
  const weightsDesc = useSelector((state) => state.weight.weights)
  const weights = weightsDesc.slice().reverse()

  const themes = useThemes()

  const justDates = weights.map((weight) => weight.date)
  const justWeights = weights.map((weight) => weight.weight)

  const datesByMonth = {}
  const firstDateOfMonth = {}

  for (const date of justDates) {
    const month = date.split("-")[1]
    if (!datesByMonth.hasOwnProperty(month)) {
      datesByMonth[month] = []
    }
    datesByMonth[month].push(date)
  }

  for (const month in datesByMonth) {
    for (const date in datesByMonth[month]) {
      if (!firstDateOfMonth.hasOwnProperty(month)) {
        firstDateOfMonth[month] = datesByMonth[month][date]
      }
    }
  }

  const data = {
    labels: justDates,
    datasets: [{ data: justWeights }],
  }

  const chartConfig = {
    backgroundColor: themes.background,
    backgroundGradientFrom: themes.background,
    backgroundGradientTo: themes.background,
    decimalPlaces: 1,
    color: (opacity = 0) => `rgba(179, 255, 224, ${opacity})`,
    labelColor: (opacity = 0) => `rgba(179, 255, 224, ${opacity})`,
  }

  const calculateXAxisLabels = (value) => {
    const month = value.split("-")[1]
    const monthAsDate = new Date(value)
    const monthName = monthAsDate.toLocaleString("default", {
      month: "short",
      day: "numeric",
    })
    return value === firstDateOfMonth[month] ? monthName : ""
  }

  return (
    <View>
      {!isLoading && (
        <View>
          <DateRangeSelector />

          <LineChart
            data={data}
            width={screenWidth}
            height={350}
            chartConfig={chartConfig}
            verticalLabelRotation={0}
            formatXLabel={calculateXAxisLabels}
            style={{ marginTop: 25 }}
          />
        </View>
      )}
    </View>
  )
}
