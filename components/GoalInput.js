import React from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = ({onCancel, isAddMode, enteredGoal, goalInputHandler, handleSubmit}) => {
  
  return (
    <Modal visible={isAddMode} animationType="slide">
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course Goal" style={styles.input} onChangeText={goalInputHandler}
        value={enteredGoal} />
      <View style={styles.buttonsContainer}>
        <View style={styles.button}>
          <Button title="ADD" onPress={handleSubmit} />
        </View>
        <View style={styles.button}>
          <Button title="CANCEL" color="red" onPress={onCancel}/>
        </View>
      </View>
    </View>
  </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#CCC",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "70%"
  },
  button: {
    borderColor: "black",
    borderWidth: 1,
    width: "40%"
  },
  input: {
    backgroundColor: "#fff",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    width: "80%"
  }
})

export default GoalInput;