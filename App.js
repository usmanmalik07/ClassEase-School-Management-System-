// In App.js in a new project

import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/Home';
import StudentLogin from './src/StudentLogin';
import TeacherLogin from './src/TeacherLogin';
import AdminLogin from './src/AdminLogin';
import Practice from './src/Practice';
import dashboard from './src/Studentdashboard';
import AdminPortal from './src/adminDashboard';
import TeacherDashboard from './src/TeacherDashboard';
import StudentMarks from './src/Studentmarks.js';
import StudentTimetable from './src/StudentTimetable.js';
import AdminSyllabus from './src/AdminSyllabus.js';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="StudentLogin" component={StudentLogin} />
        <Stack.Screen name="TeacherLogin" component={TeacherLogin} />
        <Stack.Screen name="AdminLogin" component={AdminLogin} />
        <Stack.Screen name="Practice" component={Practice} />
        <Stack.Screen name="StudentDashboard" component={dashboard} />
        <Stack.Screen name="AdminDashboard" component={AdminPortal} />
        <Stack.Screen name="TeacherDashboard" component={TeacherDashboard} />
        <Stack.Screen name="StudentMarks" component={StudentMarks} />
        <Stack.Screen name="StudentTimetable" component={StudentTimetable} />
        <Stack.Screen name="AdminSyllabus" component={AdminSyllabus} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;