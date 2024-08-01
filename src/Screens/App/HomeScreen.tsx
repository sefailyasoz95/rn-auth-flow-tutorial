import { FlatList, Image, SafeAreaView, Text } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParams } from "../../Utils/types";
import { Books } from "../../Utils/DummyData";
import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../../Utils/constants";
import Animated, { FadeInDown } from "react-native-reanimated";

type Props = NativeStackScreenProps<AppStackParams, "HomeScreen">;

const HomeScreen = ({ navigation, route }: Props) => {
	return (
		<SafeAreaView className='bg-slate-200 dark:bg-slate-950 flex-1'>
			<Text className='text-slate-900 dark:text-slate-200 text-5xl font-semibold text-center'>
				Staggered Animation with ReAnimated
			</Text>
			<FlatList
				data={Books}
				renderItem={({ item, index }) => {
					return (
						<Animated.View entering={FadeInDown.delay(500 * index)} key={index} className='self-center my-2 rounded-lg'>
							<Image
								source={{ uri: item.image }}
								resizeMode='cover'
								className='self-center rounded-lg'
								style={{ width: DEVICE_WIDTH * 0.5, height: DEVICE_HEIGHT * 0.2 }}
							/>
						</Animated.View>
					);
				}}
			/>
		</SafeAreaView>
	);
};

export default HomeScreen;
