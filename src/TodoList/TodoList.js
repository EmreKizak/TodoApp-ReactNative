import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './TodoList.style';

const TodoList = ({item, isSelected}) => {
  return (
    <View style={[styles.container, isSelected && styles.container2]}>
      <Text style={[styles.text, isSelected && styles.text2]}>{item}</Text>
    </View>
  );
};

export default TodoList;
