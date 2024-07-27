import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AppStackParams } from "../Utils/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type Props = {
	title: string;
	canGoBack: boolean;
};

const Header = ({ canGoBack, title }: Props) => {
	const navigation = useNavigation<NativeStackNavigationProp<AppStackParams>>();
	const handleBack = () => {
		canGoBack && navigation.goBack();
	};
	return (
		<View className='flex flex-row items-center justify-between px-5'>
			{canGoBack ? (
				<TouchableOpacity className='w-20' onPress={handleBack}>
					<Text className='text-slate-900 dark:text-slate-200'>Go Back</Text>
				</TouchableOpacity>
			) : (
				<View className='w-20' />
			)}
			<Text className='text-slate-900 dark:text-slate-200 text-3xl font-semibold'>{title}</Text>
			<View className='w-20' />
		</View>
	);
};

export default Header;
