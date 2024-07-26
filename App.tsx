import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "nativewind";
import Main from "./Main";
import AppProvider from "./src/Components/AppProvider";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();
export default function App() {
	const { colorScheme } = useColorScheme();

	return (
		<AppProvider>
			<NavigationContainer>
				<StatusBar animated style={colorScheme === "dark" ? "light" : "dark"} />
				<Main />
			</NavigationContainer>
		</AppProvider>
	);
}
