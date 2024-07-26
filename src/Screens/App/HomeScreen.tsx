import { ActivityIndicator, SafeAreaView, Text, TouchableOpacity } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useAppContext } from "../../Hooks/useAppContext";
import { AppStackParams } from "../../Utils/types";

type Props = NativeStackScreenProps<AppStackParams, "HomeScreen">;

const HomeScreen = ({ navigation, route }: Props) => {
	const { toggleIsAuthenticated, loading } = useAppContext();
	return (
		<SafeAreaView className='bg-slate-200 dark:bg-slate-950 flex-1 justify-center items-center'>
			<Text className='text-5xl font-medium dark:text-white text-center -mt-20'>Home Screen</Text>
			<TouchableOpacity
				className='mt-10 border border-white w-10/12 items-center rounded-lg py-2.5'
				onPress={toggleIsAuthenticated}>
				{loading ? (
					<ActivityIndicator size={28} color={"white"} />
				) : (
					<Text className='text-xl capitalize font-bold text-slate-900 dark:text-slate-200'>{`Sign Out`}</Text>
				)}
			</TouchableOpacity>
		</SafeAreaView>
	);
};

export default HomeScreen;
