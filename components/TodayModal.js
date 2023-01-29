import { Modal, View, StyleSheet, Button } from "react-native"

import { AppText } from "./AppText"
import { AppButton } from "./AppButton"

import { AppInput } from "./AppInput"
import { useState } from "react"

export function TodayModal({ isModalVisible, closeModal, todaysWeight }) {
  const [weight, setWeight] = useState(todaysWeight)

  const UpdateWeight = (
    <View>
      <AppText>Today's weight is currently {todaysWeight} (lbs)</AppText>
      <AppInput value={todaysWeight} />

      <View style={styles.buttonGroup}>
        <View>
          <AppButton title="Cancel" color="secondary" onPress={closeModal} />
        </View>
        <View>
          <AppButton title="Update" />
        </View>
      </View>
    </View>
  )

  const RecordWeight = (
    <View>
      <AppText style={{ fontSize: 24 }}>Record todays weight!</AppText>
      <AppInput
        value={weight}
        onChangeText={(newValue) => setWeight(newValue)}
      />

      <View style={styles.buttonGroup}>
        <View>
          <AppButton title="Cancel" color="secondary" onPress={closeModal} />
        </View>
        <View>
          <AppButton title="Record" />
        </View>
      </View>
    </View>
  )

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.")
        closeModal
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {todaysWeight ? UpdateWeight : RecordWeight}
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: "rgba(21, 23, 24, .8)",
  },
  modalView: {
    backgroundColor: "#282A2C",
    margin: 20,
    width: 300,
    borderRadius: 20,
    padding: 35,
  },
  buttonGroup: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
})
