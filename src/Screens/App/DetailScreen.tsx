import { SafeAreaView, Text, View } from "react-native";
import React from "react";
import Header from "../../Components/Header";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParams } from "../../Utils/types";

type Props = NativeStackScreenProps<AppStackParams, "DetailScreen">;

const DetailScreen = ({ navigation, route }: Props) => {
	return (
		<SafeAreaView className='bg-slate-200 dark:bg-slate-950 flex-1'>
			<Header title='Detail Screen' canGoBack={navigation.canGoBack()} />
			<Text className='text-slate-50 text-2xl'>{route.params.book.title}</Text>
		</SafeAreaView>
	);
};

export default DetailScreen;
