import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Text, View, StyleSheet, Modal, Button, TextInput } from "react-native"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

import { addTodaysWeight, getTodaysWeight } from "../store/weights"

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
    // setIsModalVisible(false)
  }

  const updateWeight = (weight) => {
    // TODO
    console.log("new weight ", weight)
  }

  return (
    <View style={styles.pageContainer}>
      <View style={styles.container}>
        <Text>{todaysDate}</Text>
        <Text>TodaysWeight: {todaysWeight}</Text>

        {todaysWeight ? (
          <View>
            <Text>You recorded today's weight!</Text>
            <View style={styles.checkMark}>
              <MaterialCommunityIcons name="check" color="white" size="100" />
            </View>

            <View style={styles.buttonContainer}>
              <Button
                title="update weight"
                onPress={() => setIsModalVisible(true)}
              />
            </View>
          </View>
        ) : (
          <View>
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
          <Text>hi, record todays weight</Text>
          <TextInput
            style={styles.numberInput}
            defaultValue={weight}
            onChangeText={(newWeight) => updateWeight(newWeight)}
            keyboardType="numeric"
          />

          <View style={styles.buttonGroup}>
            <Button title="cancel" onPress={() => setIsModalVisible(false)} />
            <Button title="add" onPress={addWeight} />
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
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 20,
  },
  checkMark: {
    height: 100,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
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
