import { Modal, View, StyleSheet } from "react-native"
import { format } from "date-fns"

import { AppText } from "./AppText"
import { AppButton } from "./AppButton"
import { AppInput } from "./AppInput"
import { useState } from "react"

export default function ProgresssTableRowModal({
  isModalVisible,
  closeModal,
  id,
  weight,
  date,
}) {
  const [newWeight, setNewWeight] = useState(0)

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
          <View>
            <AppButton
              title="Delete"
              color="danger"
              onPress={() => console.log(`DELETE id: ${id}!`)}
            />
          </View>

          <AppText style={{ marginTop: 20, fontSize: 16 }}>
            Update the recorded weight for {format(new Date(date), "MMM dd, u")}
          </AppText>
          <AppText style={{ marginTop: 10, fontSize: 16 }}>
            Current value: {weight} (lbs)
          </AppText>

          <AppInput
            style={{ marginTop: 10 }}
            value={newWeight}
            onChangeText={(newValue) => setNewWeight(newValue)}
          />

          <View style={styles.buttonGroup}>
            <View>
              <AppButton
                title="Cancel"
                color="secondary"
                onPress={closeModal}
              />
            </View>
            <View>
              <AppButton
                title="Update"
                onPress={() =>
                  console.log(`UPDATE id: ${id} to be ${newWeight}`)
                }
              />
            </View>
          </View>
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
    width: 350,
    borderRadius: 20,
    padding: 10,
  },
  buttonGroup: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
})
