import React from 'react';
import styled from 'styled-components/native';
import { Agenda, LocaleConfig } from 'react-native-calendars';
import { TouchableOpacity } from 'react-native';
import { Card, Paragraph, Avatar } from 'react-native-paper';

const View = styled.View``;

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

// const timeToString = (time) => {
//   const date = new Date(time);
//   return date.toISOString().split('T')[0];
// };

const renderItem = (item) => {
  return (
    <TouchableOpacity style={{ marginRight: 10, marginTop: 17 }}>
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
  // const [items, setItems] = useState({});

  // const loadItems = (day) => {
  //   setTimeout(() => {
  //     for (let i = -15; i < 85; i++) {
  //       const time = day.timestamp + i * 24 * 60 * 60 * 1000;
  //       const strTime = timeToString(time);

  //       if (!items[strTime]) {
  //         items[strTime] = [];

  //         const numItems = Math.floor(Math.random() * 3 + 1);
  //         for (let j = 0; j < numItems; j++) {
  //           items[strTime].push({
  //             name: 'Item for ' + strTime + ' #' + j,
  //             height: Math.max(50, Math.floor(Math.random() * 150)),
  //             day: strTime,
  //           });
  //         }
  //       }
  //     }

  //     const newItems = {};
  //     Object.keys(items).forEach((key) => {
  //       newItems[key] = items[key];
  //     });
  //     setItems(newItems);
  //   }, 1000);
  // };

  // const renderItem = (item) => {
  //   return (
  //     <TouchableOpacity style={{ marginRight: 10, marginTop: 17 }}>
  //       <Card>
  //         <Card.Content>
  //           <View
  //             style={{
  //               flexDirection: 'row',
  //               justifyContent: 'space-between',
  //               alignItems: 'center',
  //             }}
  //           >
  //             <Paragraph>{item.name}</Paragraph>
  //             <Avatar.Text label="G" />
  //           </View>
  //         </Card.Content>
  //       </Card>
  //     </TouchableOpacity>
  //   );
  // };
  return (
    <>
      <Agenda
        // items={items}
        // loadItemsForMonth={loadItems}
        items={{
          '2022-03-22': [{ name: '교생실습 준비', height: 10, day: '1234' }],
          '2022-03-23': [{ name: '졸업파티', height: 80 }],
          '2022-03-24': [],
          '2022-03-25': [
            { name: '생일 선물 사러 가기' },
            { name: '적금 만기일' },
          ],
        }}
        selected={'2022-03-22'}
        renderItem={renderItem}
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
