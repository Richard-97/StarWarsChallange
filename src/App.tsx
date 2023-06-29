import React, { Suspense } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { People } from 'src/routes/People';
import { StarShips } from 'src/routes/StarShips';
import { Planets } from 'src/routes/Planets';

const Tab = createBottomTabNavigator();

const queryClient = new QueryClient();

const App = () => (
  <Suspense>
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <Tab.Navigator initialRouteName="People">
          <Tab.Screen name="People" component={People} />
          <Tab.Screen name="Spaceships" component={StarShips} />
          <Tab.Screen name="Planets" component={Planets} />
        </Tab.Navigator>
      </QueryClientProvider>
    </NavigationContainer>
  </Suspense>
);

export default App;
