import { Provider } from "react-redux"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

import { store } from "./store/store"

import Home from "./screens/Home"
import Today from "./screens/Today"
import Settings from "./screens/Settings"
import ProgressNumbers from "./screens/ProgressNumbers"
import ProgressChart from "./screens/ProgressChart"
import ScreensWrapper from "./screens/ScreensWrapper"

const BottomTab = createBottomTabNavigator()
const TopTab = createMaterialTopTabNavigator()

function ProgressNavigator() {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Numbers" component={ProgressNumbers} />
      <TopTab.Screen name="Chart" component={ProgressChart} />
    </TopTab.Navigator>
  )
}

export default function App() {
  return (
    <Provider store={store}>
      <ScreensWrapper>
        <NavigationContainer>
          <BottomTab.Navigator initialRouteName="Today">
            <BottomTab.Screen
              name="Home"
              component={Home}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                    name="home"
                    color={color}
                    size={size}
                  />
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
      </ScreensWrapper>
    </Provider>
  )
}
