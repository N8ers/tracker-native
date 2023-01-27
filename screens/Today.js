import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { View, StyleSheet, Modal } from "react-native"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

import { AppText } from "../components/AppText"
import { AppButton } from "../components/AppButton"
import { ContentWrapper } from "../components/ContentWrapper"

import { useThemes } from "../hooks/useThemes"

import {
  addTodaysWeight,
  getTodaysWeight,
  updateTodaysWeight,
} from "../store/weights"

export default function Today() {
  const todaysWeight = useSelector((state) => state.weight.todaysWeight)
  console.log({ todaysWeight })

  const themes = useThemes()

  const dispatch = useDispatch()

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [weight, setWeight] = useState(0)
  const [todaysDate, setTodaysDate] = useState("")

  const calculateTodaysDate = () => {
    let date = new Date()
    date = date.toLocaleDateString("default", {
      weekday: "long",
      day: "numeric",
      month: "long",
    })

    setTodaysDate(date)
  }

  useEffect(() => {
    calculateTodaysDate()
    dispatch(getTodaysWeight())
  }, [])

  const addWeight = () => {
    dispatch(addTodaysWeight({ weight }))
  }

  const updateWeight = () => {
    const trimmedWeight = weight.trim()
    if (trimmedWeight.length) {
      dispatch(updateTodaysWeight({ weight: trimmedWeight }))
      setIsModalVisible(false)
      setWeight(0)
    }
  }

  const openModal = () => {
    console.log("pressed!")
  }

  const NotRecoredMessage = (
    <AppText style={styles.text}>
      You haven't recorded todays weight yet.
    </AppText>
  )

  const RecoredMessage = (
    <View>
      <View style={styles.checkMark}>
        <MaterialCommunityIcons
          name="check-circle"
          color={themes.secondary.color}
          size="180"
        />
      </View>

      <AppText style={styles.text}>
        You recoreded todays weight as ___ (lbs)!!
      </AppText>
    </View>
  )

  const NotRecordedButton = (
    <AppButton title="Track Todays Weight" onPress={openModal} />
  )

  const UpdateButton = (
    <AppButton title="Change Todays Weight" onPress={openModal} />
  )

  return (
    <>
      <ContentWrapper>
        <AppText style={styles.todaysDate}>{todaysDate}</AppText>

        {todaysWeight ? RecoredMessage : NotRecoredMessage}
      </ContentWrapper>
      {todaysWeight ? UpdateButton : NotRecordedButton}
    </>
  )
}

const styles = StyleSheet.create({
  todaysDate: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  checkMark: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginTop: 20,
    fontWeight: "bold",
  },
})
