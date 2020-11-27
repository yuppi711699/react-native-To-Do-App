import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';


export const Todo = ({todo, onRemove}) => {
  // const londPressHandler = () => {
  //   onRemove(todo.id)
  // }
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={()=>console.log('Pressed', todo.id)}
      // onLongPress={londPressHandler}
      onLongPress={onRemove.bind(null, todo.id)}
    >
      <View style={styles.todo}>
        <Text>{todo.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  todo:{
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 5,
    marginBottom: 10
  }
})