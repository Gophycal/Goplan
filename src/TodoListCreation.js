import React, { useEffect, useState, useRef, useContext } from 'react';
// import { Alert } from 'react-native';
import styled from 'styled-components/native';
import Input from './Input';
import ItemContext from './ItemContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const View = styled.View``;
const Text = styled.Text``;
const Button = styled.Button``;

function TodoListCreation() {
  const [index, setIndex] = useState(0);
  const [newDate, setNewDate] = useState('');
  const [newName, setNewName] = useState('');
  const [newDay, setNewDay] = useState('');
  const { items, setItems } = useContext(ItemContext);

  const [errorMessage, setErrorMessage] = useState('');

  const [disabled, setDisabled] = useState(true);

  const refName = useRef(null);
  const refDay = useRef(null);

  useEffect(() => {
    setDisabled(!(newDate && newName && newDay && !errorMessage));
  }, [newDate, newName, newDay, errorMessage]);

  const addItem = () => {
    if (newDate.length < 1 || newName.length < 1 || newDay.length < 1) {
      return;
    }
    const Date = newDate;
    const newItemObject = {
      [Date]: [{ name: newName, day: newDay }],
    };
    // const newItemObject = {
    //   index: [{ [Date]: [{ name: newName, day: newDay }] }],
    // };
    setNewDate('');
    setNewName('');
    setNewDay('');
    storeData({ ...items, ...newItemObject });
    // console.log('newItemObject: ', newItemObject);
    // console.log('items: ', items);
    // setIndex(index + 1);
    // console.log('Hi');
    console.log(index);
  };

  const storeData = async (items) => {
    try {
      await AsyncStorage.setItem('items', JSON.stringify(items));
      setItems(items);
    } catch (e) {
      console.log('TodoListCreation StoreData error: ', e);
    }
  };

  const _handleDateChange = (newDate) => {
    setNewDate(newDate);
    setErrorMessage(newDate.trim() ? '' : 'Please enter the date');
  };

  const _handleNameChange = (newName) => {
    setNewName(newName);
    setErrorMessage(newName.trim() ? '' : 'Please enter the name');
  };

  const _handleDayChange = (newDay) => {
    setNewDay(newDay);
    setErrorMessage(newDay.trim() ? '' : 'Please enter the day');
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>TodoListCreation</Text>
      <Input
        label="date"
        value={newDate}
        placeholder="date"
        returnKeyType="next"
        onChangeText={_handleDateChange}
        onSubmitEditing={() => refName.current.focus()}
      />
      <Input
        label="name"
        ref={refName}
        value={newName}
        placeholder="name"
        returnKeyType="next"
        onChangeText={_handleNameChange}
        onSubmitEditing={() => refDay.current.focus()}
      />
      <Input
        label="day"
        value={newDay}
        ref={refDay}
        placeholder="day"
        onChangeText={_handleDayChange}
        onSubmitEditing={addItem}
      />
      <Button title="Create" disabled={disabled} onPress={addItem} />
    </View>
  );
}

export default TodoListCreation;
