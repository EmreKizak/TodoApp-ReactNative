import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './TodoCreate.style';
import React, {useState, useEffect} from 'react';

const TodoCreate = ({handlePush}) => {
  const [input, setInput] = useState();

  const onChange = text => {
    setInput(text);
  };
  const handlePress = () => {
    handlePush(input);
  };
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={onChange}
        style={styles.input}
        placeholder="Todo Giriniz..."
      />
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.text}>Kaydet</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoCreate;
