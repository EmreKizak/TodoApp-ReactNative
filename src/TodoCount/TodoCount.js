import {Text, View} from 'react-native';
import styles from './TodoCount.style';
import React, {useState, useEffect} from 'react';

const TodoCount = ({list}) => {
  const [count, setCount] = useState();
  useEffect(() => {
    setCount(list.length);
  }, [list]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Yapılacaklar</Text>
      <Text style={styles.count}>{count}</Text>
    </View>
  );
};

export default TodoCount;
