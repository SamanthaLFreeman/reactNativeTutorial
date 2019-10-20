import React from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = ({ isAddMode, enteredGoal, goalInputHandler, handleSubmit}) => {
  
  return (
    <Modal visible={isAddMode} animationType="slide">
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course Goal" style={styles.input} onChangeText={goalInputHandler}
        value={enteredGoal} />
      <Button title="ADD" onPress={handleSubmit} />
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