import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import TodoCount from './TodoCount/TodoCount';
import TodoList from './TodoList';
import TodoCreate from './TodoCreate';
import {useState, useEffect} from 'react';

const App = () => {
  const [list, setList] = useState([]);
  const [onLine, setOnLine] = useState([]);

  const handlePush = pushedInput => {
    setList(prevState => [...prevState, pushedInput]);
  };
  const handleSelectTodo = index => {
    if (onLine.includes(index)) {
      setOnLine(onLine.filter(todo => todo !== index));
    } else {
      setOnLine([...onLine, index]);
    }
  };
  return (
    <View style={styles.container}>
      <TodoCount list={list} />
      <View style={styles.list}>
        <FlatList
          data={list}
          renderItem={({item, index}) => (
            <TouchableOpacity onPress={() => handleSelectTodo(index)}>
              <TodoList item={item} isSelected={onLine.includes(index)} />
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={styles.create}>
        <TodoCreate handlePush={handlePush} />
      </View>
    </View>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#102027',
  },
  list: {
    flex: 3.5,
  },
  create: {
    flex: 1,
  },
});
