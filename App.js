import * as React from 'react';
import { Button, View, Text, ImageBackground, Image, TextInput, ScrollView, KeyboardAvoidingView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SvgUri from 'react-native-svg-uri';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Ionicons } from '@expo/vector-icons';
import MaterialIcon from '@expo/vector-icons/MaterialIcons';
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import { createStore, applyMiddleware } from 'redux'
import AsyncStorage from '@react-native-async-storage/async-storage';

import LoginScreen from './src/screens/Login';
import SignUpScreen from './src/screens/Signup';
import ForgotPassScreen from './src/screens/ForgotPass';
import TestUpload from './src/screens/TestUpload';
import FirstTimeUpdateScreen from './src/screens/FirstTimeUpdate';
import MainScreen from './src/screens/Main';
import FirstTimeStep2Screen from './src/screens/FirstTimeStep2Screen';
import rootSaga from './src/sagas/rootSaga';
import allReducer from './src/reducers/allReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, allReducer)
const sagaMiddleware = createSagaMiddleware()
const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)
let persistor = persistStore(store)

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
            <Stack.Screen name="ForgotPass" component={ForgotPassScreen} options={{ headerShown: false }} />
            <Stack.Screen name="TestUpload" component={TestUpload} options={{ headerShown: false }} />
            <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
            <Stack.Screen name="FirstTimeUpdate" component={FirstTimeUpdateScreen} options={{ headerShown: false }} />
            <Stack.Screen name="FirstTimeStep2" component={FirstTimeStep2Screen} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
