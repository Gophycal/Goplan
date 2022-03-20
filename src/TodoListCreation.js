import React, { useEffect, useState, useRef } from 'react';
import { Alert } from 'react-native';
import styled from 'styled-components/native';
import Input from './Input';

const View = styled.View``;
const Text = styled.Text``;
const Button = styled.Button``;

function TodoListCreation() {
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [day, setDay] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const [disabled, setDisabled] = useState(true);

  const refName = useRef(null);
  const refDay = useRef(null);

  const [newDate, setNewDate] = useState('');
  const [newName, setNewName] = useState('');
  const [newDay, setNewDay] = useState('');

  useEffect(() => {
    setDisabled(!(date && name && day && !errorMessage));
  }, [date, name, day, errorMessage]);

  const addItem = () => {
    if (newDate.length < 1 || newName.length < 1 || newDay.length < 1) {
      return;
    }
    const ID = Date.now().toString();
    const newItemObject = {
      [ID]: { id: ID, date: newDate, name: newName, day: newDay },
    };
    setNewDate('');
    setNewName('');
    setNewDay('');
    storeData({ ...tasks, ...newTaskObject });
  };

  const storeData = async (tasks) => {
    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
      setTasks(tasks);
    } catch (e) {
      //
    }
  };

  const _handleDateChange = (date) => {
    setDate(date);
    setErrorMessage(date.trim() ? '' : 'Please enter the date');
  };

  const _handleNameChange = (name) => {
    setName(name);
    setErrorMessage(name.trim() ? '' : 'Please enter the name');
  };

  const _handleDayChange = (day) => {
    setDay(day);
    setErrorMessage(day.trim() ? '' : 'Please enter the day');
  };

  const onSubmit = () => {
    return Alert.alert('Submitted!');
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>TodoListCreation</Text>
      <Input
        label="date"
        value={date}
        placeholder="date"
        returnKeyType="next"
        onChangeText={_handleDateChange}
        onSubmitEditing={() => refName.current.focus()}
      />
      <Input
        label="name"
        ref={refName}
        value={name}
        placeholder="name"
        returnKeyType="next"
        onChangeText={_handleNameChange}
        onSubmitEditing={() => refDay.current.focus()}
      />
      <Input
        label="day"
        ref={refDay}
        placeholder="day"
        onChangeText={_handleDayChange}
        onSubmitEditing={() => onSubmit()}
      />
      <Button
        title="Create"
        placeholder="name"
        disabled={disabled}
        onPress={() => {
          onSubmit();
        }}
      />
    </View>
  );
}

export default TodoListCreation;
