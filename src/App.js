import React from 'react';
import styled from 'styled-components/native';
import Calendar from './Calendar';
import TodoListCreation from './TodoListCreation';
import TodoListUpdate from './TodoListUpdate';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './theme';
import { ItemProvider } from './ItemContext';

const Container = styled.SafeAreaView`
  flex: 1;
`;

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ItemProvider>
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
              <Stack.Screen name="TodoListUpdate" component={TodoListUpdate} />
            </Stack.Navigator>
          </NavigationContainer>
        </Container>
      </ItemProvider>
    </ThemeProvider>
  );
};

export default App;
