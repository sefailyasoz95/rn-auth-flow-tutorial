import React, { useState } from "react";
import { AppContext } from "../Context/AppContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SplashScreen from "expo-splash-screen";

type Props = {
	children: React.ReactNode;
};

const AppProvider: React.FC<Props> = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState<boolean | undefined>(undefined);
	const [loading, setLoading] = useState(false);
	const checkUser = async () => {
		const user = await AsyncStorage.getItem("authenticated");
		console.log("user: ", user);

		setTimeout(() => {
			if (user && user === "true") {
				setIsAuthenticated(true);
			} else {
				setIsAuthenticated(false);
			}
			SplashScreen.hideAsync();
		}, 3000);
	};
	const toggleIsAuthenticated = async () => {
		setLoading(true);
		isAuthenticated
			? await AsyncStorage.setItem("authenticated", "false")
			: await AsyncStorage.setItem("authenticated", "true");
		setTimeout(() => {
			setIsAuthenticated(!isAuthenticated);
			setLoading(false);
		}, 3000);
	};
	return (
		<AppContext.Provider value={{ isAuthenticated, toggleIsAuthenticated, loading, checkUser }}>
			{children}
		</AppContext.Provider>
	);
};

export default AppProvider;
