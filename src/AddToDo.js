import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Button, Alert} from 'react-native';

export const  AddTodo = ({onSubmit}) => {
  const [value, setValue] = useState('')
  const pressHandler = () => {
    if (value.trim()){//.trim clear tabulations, проверка на пустую строку
      onSubmit(value)// add value to list
      setValue('')//clear input
    } else {
      //error
      Alert.alert('name of doing cannot be empty')
    }
    // onSubmit(value)// add value to list
    // setValue('')//clear input
  }

  return (
    <View style ={styles.block}>
      <TextInput 
        style={styles.input} 
        onChangeText={setValue}//text => setValue(text)}
        value={value}
        placeholder="Input name of do ..."//value before input tap
        autoCorrect={false}//автоисправление текста
        autoCapitalize="none"//исправляет маленькую букву на большую
        keyboardType='number-pad'//type of keyboard
      />
      <Button title='Добавить!!' onPress={pressHandler} /> 
    </View>
  )
}

const styles = StyleSheet.create({
  block:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15
  },
  input: {
    width: '70%',
    padding: 10,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#3949ab'
  }
})
 