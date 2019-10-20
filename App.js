import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

const App = () => {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]); 

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  const handleSubmit = () => {
    setCourseGoals(currentGoals => [...currentGoals, {key: Math.random().toString(), value: enteredGoal}]);
  }

  return (
    <View style={styles.screen}>
      <GoalInput enteredGoal={enteredGoal} goalInputHandler={goalInputHandler} handleSubmit={handleSubmit}/>
      <FlatList data={courseGoals} renderItem={itemData => <GoalItem title={itemData.item.value}/>}/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});

export default App;
