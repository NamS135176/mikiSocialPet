import * as React from "react";
import {
  Button,
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SvgUri from "react-native-svg-uri";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { Ionicons } from "@expo/vector-icons";
import MaterialIcon from "@expo/vector-icons/MaterialIcons";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { createStore, applyMiddleware } from "redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NativeBaseProvider, Box } from "native-base";
import { enableScreens } from "react-native-screens";

import LoginScreen from "./src/screens/Login";
import SignUpScreen from "./src/screens/Signup";
import ForgotPassScreen from "./src/screens/ForgotPass";
import TestUpload from "./src/screens/TestUpload";
import FirstTimeUpdateScreen from "./src/screens/FirstTimeUpdate";
import MainScreen from "./src/screens/Main";
import FirstTimeStep2Screen from "./src/screens/FirstTimeStep2Screen";
import rootSaga from "./src/sagas/rootSaga";
import allReducer from "./src/reducers/allReducer";
import TipsScreen from "./src/screens/TipsScreen";
import MapsScreen from "./src/screens/MapsScreen";
import ListLocScreen from "./src/screens/ListLocScreen";
import TipsDetailScreen from "./src/screens/TipsDetailScreen";
import SettingScreen from "./src/screens/SettingScreen";
import UpdateStep1 from "./src/screens/UpdateStep1";
import UpdateStep2 from "./src/screens/UpdateStep2";
import PostDetailScreen from "./src/screens/PostDetail";
import ProfileUserScreen from "./src/screens/ProfileUserScreen";
import PostDetailSecondScreen from "./src/screens/PostDetailSecond";
import NewsScreen from "./src/screens/NewsScreen";
import ListChat from "./src/screens/ListChat";
import ScreenChat from "./src/screens/ScreenChat";
import SearchScreen from "./src/screens/SearchScreen";
import NewsTagScreen from "./src/screens/NewsTag";
import EditPostScreen from "./src/screens/EditPost";
import PolicyScreen from "./src/screens/PolicyScreen";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, allReducer);
const sagaMiddleware = createSagaMiddleware();
const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
let persistor = persistStore(store);

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NativeBaseProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
              <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SignUp"
                component={SignUpScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ForgotPass"
                component={ForgotPassScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="TestUpload"
                component={TestUpload}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Main"
                component={MainScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="FirstTimeUpdate"
                component={FirstTimeUpdateScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="FirstTimeStep2"
                component={FirstTimeStep2Screen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Tips"
                component={TipsScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Maps"
                component={MapsScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ListLoc"
                component={ListLocScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="TipsDetail"
                component={TipsDetailScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Setting"
                component={SettingScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Step1"
                component={UpdateStep1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Step2"
                component={UpdateStep2}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PostDetail"
                component={PostDetailScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ProfileUser"
                component={ProfileUserScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PostDetailSecond"
                component={PostDetailSecondScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="News"
                component={NewsScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="EditPost"
                component={EditPostScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Search"
                component={SearchScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="NewsTag"
                component={NewsTagScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ListChat"
                component={ListChat}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ScreenChat"
                component={ScreenChat}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Policy"
                component={PolicyScreen}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </NativeBaseProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
