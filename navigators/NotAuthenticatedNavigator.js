import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import Auth from "../screens/Auth"
import Home from "../screens/Home"

const BottomTab = createBottomTabNavigator()

export default function NotAuthenticatedNavigator() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator>
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
          name="Auth"
          component={Auth}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="login" color={color} size={size} />
            ),
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  )
}
