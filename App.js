import { useEffect } from "react"
import { StyleSheet } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

import Home from "./screens/Home"
import Today from "./screens/Today"
import Settings from "./screens/Settings"
import ProgressNumbers from "./screens/ProgressNumbers"
import ProgressChart from "./screens/ProgressChart"
import axios from "axios"

const BottomTab = createBottomTabNavigator()
const TopTab = createMaterialTopTabNavigator()

const isProd = false
const BASE_URL = isProd
  ? "https://tracker-api-production-ec2a.up.railway.app"
  : "http://localhost:4000"

function ProgressNavigator() {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Numbers" component={ProgressNumbers} />
      <TopTab.Screen name="Chart" component={ProgressChart} />
    </TopTab.Navigator>
  )
}

export default function App() {
  const fetchData = async () => {
    try {
      result = await axios.get(BASE_URL + "/weights/1")
    } catch (error) {
      console.log("error getting data ", error)
    }
  }

  useEffect(() => {
    fetchData()
  })

  return (
    <NavigationContainer>
      <BottomTab.Navigator initialRouteName="Today">
        <BottomTab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Today"
          component={Today}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="calendar-today"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <BottomTab.Screen
          name="Progress"
          component={ProgressNavigator}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="chart-timeline-variant-shimmer"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <BottomTab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="cog-outline"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
