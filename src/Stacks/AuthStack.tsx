import React from "react";
import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack";
import { AuthStackParams } from "../Utils/types";
import SignInScreen from "../Screens/Auth/SignInScreen";

const Auth = createStackNavigator<AuthStackParams>();
const options: StackNavigationOptions = {
	headerShown: false,
};
const AuthStack = () => {
	return (
		<Auth.Navigator screenOptions={options}>
			<Auth.Screen name='SignInScreen' component={SignInScreen} />
		</Auth.Navigator>
	);
};

export default AuthStack;
