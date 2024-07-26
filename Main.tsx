import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useAppContext } from "./src/Hooks/useAppContext";
import AppStack from "./src/Stacks/AppStack";
import AuthStack from "./src/Stacks/AuthStack";

type Props = {};

const Main = (props: Props) => {
	const { isAuthenticated, checkUser } = useAppContext();
	useEffect(() => {
		checkUser();
	}, []);

	return isAuthenticated ? <AppStack /> : <AuthStack />;
};

export default Main;
