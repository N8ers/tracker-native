import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Text, View, StyleSheet, Modal, Button, TextInput } from "react-native"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

import {
  addTodaysWeight,
  getTodaysWeight,
  updateTodaysWeight,
} from "../store/weights"

export default function Today() {
  const todaysWeight = useSelector((state) => state.weight.todaysWeight)

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

  return (
    <View style={styles.pageContainer}>
      <View style={styles.container}>
        <Text style={styles.todaysDate}>{todaysDate}</Text>

        {todaysWeight ? (
          <View style={styles.checkMarkContainer}>
            <View style={styles.checkMark}>
              <MaterialCommunityIcons name="check" color="white" size="100" />
            </View>
            <View style={styles.textContainer}>
              <Text>You recorded today's weight!</Text>
              <Text>Todays weight: {todaysWeight}</Text>
            </View>

            <View style={styles.buttonContainer}>
              <Button
                title="update weight"
                onPress={() => setIsModalVisible(true)}
              />
            </View>
          </View>
        ) : (
          <View style={styles.notRecordedContainer}>
            <Text>Add Todays weight!</Text>
            <TextInput
              style={styles.numberInput}
              defaultValue={weight}
              onChangeText={(newWeight) => setWeight(newWeight)}
              keyboardType="numeric"
            />
            <Button title="add" onPress={addWeight} />
          </View>
        )}
      </View>

      <Modal animationType="slide" visible={isModalVisible}>
        <View style={styles.modalView}>
          <Text>Update todays weight.</Text>
          <Text>Current record for today is {todaysWeight} lbs.</Text>
          <TextInput
            style={styles.numberInput}
            defaultValue={weight}
            onChangeText={(newWeight) => setWeight(newWeight)}
            keyboardType="numeric"
          />

          <View style={styles.buttonGroup}>
            <Button title="cancel" onPress={() => setIsModalVisible(false)} />
            <Button title="update" onPress={updateWeight} />
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    paddingTop: 50,
    alignItems: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  notRecordedContainer: {
    flex: 1,
    alignItems: "center",
  },
  todaysDate: {
    fontSize: 20,
    marginBottom: 100,
  },
  textContainer: {
    marginTop: 10,
    flex: 1,
    alignItems: "center",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 150,
  },
  checkMarkContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  checkMark: {
    height: 100,
    width: 100,
    backgroundColor: "green",
    borderRadius: 50,
  },
  modalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    width: 100,
    textAlign: "center",
    fontSize: 32,
    borderBottomColor: "black",
    borderBottomWidth: 2,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
})
