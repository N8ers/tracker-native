import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"

import { useThemes } from "../hooks/useThemes"

import Home from "../screens/Home"
import Today from "../screens/Today"
import Settings from "../screens/Settings"
import ProgressTable from "../screens/ProgressTable"
import ProgressChart from "../screens/ProgressChart"

const BottomTab = createBottomTabNavigator()
const TopTab = createMaterialTopTabNavigator()

function ProgressNavigator() {
  const themes = useThemes()

  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: themes.lightBackground,
        },
        tabBarLabelStyle: {
          paddingTop: 10,
          fontSize: 14,
          fontWeight: "bold",
        },
        tabBarActiveTintColor: themes.secondary.color,
        tabBarInactiveTintColor: "#FFF",
      }}
    >
      <TopTab.Screen name="Table" component={ProgressTable} />
      <TopTab.Screen name="Chart" component={ProgressChart} />
    </TopTab.Navigator>
  )
}

export default function AuthenticatedNavigator() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        initialRouteName="Today"
        sceneContainerStyle={{ backgroundColor: "#151718" }}
        screenOptions={{
          tabBarActiveTintColor: "#B3FFE0",
          tabBarInactiveTintColor: "#FFF",
          tabBarActiveBackgroundColor: "#282A2C",
          tabBarInactiveBackgroundColor: "#282A2C",
        }}
      >
        <BottomTab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Today"
          component={Today}
          options={{
            headerShown: false,
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
            headerShown: false,
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
            headerShown: false,

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
