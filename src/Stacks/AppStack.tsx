import React from "react";
import { createNativeStackNavigator, NativeStackNavigationOptions } from "@react-navigation/native-stack";
import HomeScreen from "../Screens/App/HomeScreen";
import { AppStackParams } from "../Utils/types";
import DetailScreen from "../Screens/App/DetailScreen";

const App = createNativeStackNavigator<AppStackParams>();
const options: NativeStackNavigationOptions = {
	headerShown: false,
};
const AppStack = () => {
	return (
		<App.Navigator screenOptions={options}>
			<App.Screen name='HomeScreen' component={HomeScreen} />
			<App.Screen name='DetailScreen' component={DetailScreen} />
		</App.Navigator>
	);
};

export default AppStack;
