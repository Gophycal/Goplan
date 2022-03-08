import React from 'react';
import RNSchedule from 'rnschedule';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  flex: 1;
  /* align-items: center;
  justify-content: flex-start; */
`;

const data = [
  {
    title: 'Lunch Appointment',
    subtitle: 'With Harry',
    start: new Date(2018, 11, 2, 13, 20),
    end: new Date(2018, 11, 2, 14, 20),
    color: '#390099',
  },
];

const App = () => (
  <Container>
    <RNSchedule dataArray={data} onEventPress={(appt) => console.log(appt)} />
  </Container>
);

export default App;
