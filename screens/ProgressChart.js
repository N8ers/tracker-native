import { useSelector } from "react-redux"
import { Dimensions, View } from "react-native"
import { LineChart } from "react-native-chart-kit"

import DateRangeSelector from "../components/DateRangeSelector"

const screenWidth = Dimensions.get("window").width
const chartConfig = {
  color: (opacity = 0) => `rgba(179, 255, 224, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
}

/**
 * TODO
 * [ ] replace a lot of this manual date logic with date-fns
 * [ ] see if there are more chart options/ui stuff that we want to add
 *
 */

export default function ProgressChart() {
  const isLoading = useSelector((state) => state.weight.loading)
  const weightsDesc = useSelector((state) => state.weight.weights)
  const weights = weightsDesc.slice().reverse()

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
    datasets: [
      {
        data: justWeights,
        // color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
      },
    ],
    legend: ["Last 30 Weigh-ins"], // optional
  }

  return (
    <View>
      {!isLoading && (
        <View>
          <DateRangeSelector />

          <LineChart
            data={data}
            width={screenWidth}
            height={300}
            chartConfig={chartConfig}
            verticalLabelRotation={0}
            formatXLabel={(value) => {
              const month = value.split("-")[1]
              const monthAsDate = new Date(value)
              const monthName = monthAsDate.toLocaleString("default", {
                month: "short",
                day: "numeric",
              })
              return value === firstDateOfMonth[month] ? monthName : ""
            }}
          />
        </View>
      )}
    </View>
  )
}
