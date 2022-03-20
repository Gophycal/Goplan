import React from 'react';
import styled from 'styled-components/native';
import Calendar from './Calendar';
import TodoListCreation from './TodoListCreation';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './theme';

const Container = styled.SafeAreaView`
  flex: 1;
`;

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Calendar"
            screenOptions={{
              headerShown: true,
            }}
          >
            <Stack.Screen name="Calendar" component={Calendar} />
            <Stack.Screen
              name="TodoListCreation"
              component={TodoListCreation}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Container>
    </ThemeProvider>
  );
};

export default App;
