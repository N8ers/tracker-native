import { useState } from "react"
import { Text, View, StyleSheet, Modal, Button } from "react-native"

export default function Today() {
  const [isModalVisible, setIsModalVisible] = useState(false)

  return (
    <View>
      <Text>Add Todays Stats!</Text>

      <View style={styles.container}>
        <Button title="Add" onPress={() => setIsModalVisible(true)} />
      </View>

      <Modal animationType="slide" visible={isModalVisible}>
        <View style={styles.modalView}>
          <Text>hi, record todays weight</Text>
          <Button title="close" onPress={() => setIsModalVisible(false)} />
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  modalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})
