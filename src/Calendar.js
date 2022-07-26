import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { Agenda, LocaleConfig } from 'react-native-calendars';
import { TouchableOpacity } from 'react-native';
import { Card, Paragraph, Avatar } from 'react-native-paper';
import ItemContext from './ItemContext';
import { useNavigation } from '@react-navigation/native';

const View = styled.View``;

const Text = styled.Text``;

const Button = styled.Button``;

LocaleConfig.locales['fr'] = {
  monthNames: [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ],
  monthNamesShort: [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ],
  dayNames: [
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
    '일요일',
  ],
  dayNamesShort: ['월', '화', '수', '목', '금', '토', '일'],
  today: '오늘',
};
LocaleConfig.defaultLocale = 'fr';

const renderItem = ({ item, navigation }) => {
  return (
    <TouchableOpacity
      style={{ marginRight: 10, marginTop: 17 }}
      onPress={() => {
        navigation.navigate('TodoListUpdate', { item });
      }}
    >
      <Card>
        <Card.Content>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Paragraph>{item.name}</Paragraph>
            <Paragraph>{item.height}</Paragraph>
            <Paragraph>{item.day}</Paragraph>
            <Avatar.Text label="승원" />
          </View>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};

const Calendar = ({ navigation }) => {
  const { items, setItems } = useContext(ItemContext);
  return (
    <>
      <Agenda
        // loadItemsForMonth={loadItems}
        items={items}
        selected={'2022-07-25'}
        renderItem={(item, firstItemInDay) =>
          renderItem({ item, firstItemInDay, navigation })
        }
        // Specify how agenda knob should look like
        renderKnob={() => {
          return (
            <View>
              <Text>아래로 내리세요</Text>
            </View>
          );
        }}
        // Specify what should be rendered instead of ActivityIndicator
        renderEmptyData={() => {
          return (
            <View>
              <Text> 오늘 할 일 </Text>
            </View>
          );
        }}
      />
      <Button
        style={{}}
        title="+"
        onPress={() => navigation.navigate('TodoListCreation')}
      />
    </>
  );
};

export default Calendar;
