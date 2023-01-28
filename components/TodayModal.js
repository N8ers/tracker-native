import { Modal, View, StyleSheet } from "react-native"

import { AppText } from "./AppText"
import { AppButton } from "./AppButton"

import { useThemes } from "../hooks/useThemes"

export function TodayModal({ isModalVisible, closeModal, todaysWeight }) {
  const themes = useThemes()

  const UpdateWeight = (
    <View>
      <AppText>Today's weight is currently {todaysWeight} (lbs)</AppText>
      <AppText>____input goes here____</AppText>
      <View>
        <AppButton title="Cancel" onPress={closeModal} />
        <AppButton title="Update" />
      </View>
    </View>
  )

  const RecordWeight = (
    <View>
      <AppText>Record todays weight!</AppText>
      <AppText>____input goes here____</AppText>
      <View>
        <AppButton title="Cancel" onPress={closeModal} />
        <AppButton title="Record" />
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
          {!todaysWeight ? UpdateWeight : RecordWeight}
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
})
