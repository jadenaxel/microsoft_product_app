/** @format */

import React, { useRef } from 'react';
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	StatusBar,
	Image,
	Animated,
	useWindowDimensions,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { TouchableHighlight, TouchableWithoutFeedback } from 'react-native-gesture-handler';

interface IData {
	id: number;
	image: string;
}

export default function Product(props: any): JSX.Element {
	const { width } = useWindowDimensions();
	const ConsoleX = useRef(new Animated.Value(0)).current;
	const dotPosition = Animated.divide(ConsoleX, width);

	let imageLink: string = require('../assets/images/xboxlogo.png');
	let dataImage: IData[] = [
		{ id: 1, image: require('../assets/images/xboxSlide1.png') },
		{ id: 2, image: require('../assets/images/xboxSeries.png') },
		{ id: 3, image: require('../assets/images/xboxSlide1.png') },
	];

	const itemNew = ({ item }: { item: IData }): JSX.Element => {
		return (
			<View style={{ width }}>
				<View
					style={{
						height: 360,
						alignItems: 'center',
						justifyContent: 'center',
						marginBottom: 36,
					}}
				>
					<Image source={item.image} />
				</View>
				<View
					style={{ backgroundColor: 'black', paddingHorizontal: 41, paddingVertical: 16 }}
				>
					<Text style={{ color: 'white', fontSize: 34, marginBottom: 2 }}>
						Xbox Series S
					</Text>
					<Text style={{ color: 'white', fontSize: 14, opacity: 0.4, marginBottom: 13 }}>
						Game Console
					</Text>
					<Text style={{ color: 'white', fontSize: 16, width: 335, marginBottom: 23 }}>
						The Xbox Series S is the smallest and most stylish Xbox console ever
						released. Experience the speed and performance of the all-digital
						next-generation console at an affordable price.
					</Text>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
						}}
					>
						<Text style={{ color: 'white', fontSize: 43 }}>$24.99/mo</Text>
						<TouchableHighlight
							style={{
								backgroundColor: 'white',
								width: 119,
								height: 46,
								alignItems: 'center',
								justifyContent: 'center',
								borderColor: 'white',
							}}
						>
							<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
								<Text style={{ fontSize: 18, color: 'black' }}>Buy Now</Text>
								<View
									style={{
										alignItems: 'center',
										justifyContent: 'center',
										marginLeft: 10,
									}}
								>
									<Ionicons name="chevron-forward-outline" size={10} />
								</View>
							</View>
						</TouchableHighlight>
					</View>
				</View>
			</View>
		);
	};
	return (
		<ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: '#E6E6E6' }}>
			<StatusBar hidden showHideTransition="slide" />
			<View style={styles.container}>
				<View style={styles.header}>
					<View style={styles.xBoxHeader}>
						<TouchableWithoutFeedback onPress={() => props.navigation.navigate('Home')}>
							<Image
								source={require('../assets/icon.png')}
								style={{ marginRight: 19.1, ...styles.headerIcon }}
							/>
						</TouchableWithoutFeedback>
						<View style={{ ...styles.headerLine, marginRight: 16.5 }}></View>
						<Image source={imageLink} style={styles.headerIcon} />
					</View>
					<View style={styles.headerLeftSide}>
						<Ionicons name="search-outline" size={29} />
						<TouchableWithoutFeedback
							onPress={() => props.navigation.navigate('Contact')}
						>
							<Ionicons name="options-outline" size={29} style={{ marginLeft: 22 }} />
						</TouchableWithoutFeedback>
					</View>
				</View>
			</View>
			<Animated.FlatList
				horizontal
				pagingEnabled
				showsHorizontalScrollIndicator={false}
				snapToAlignment="center"
				snapToInterval={width}
				data={dataImage}
				keyExtractor={(item: IData) => `Math.random${item.id}`}
				renderItem={itemNew}
				onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: ConsoleX } } }], {
					useNativeDriver: false,
				})}
			/>
			<View
				style={{
					flexDirection: 'row',
					alignSelf: 'center',
					position: 'absolute',
					bottom: 250,
				}}
			>
				{dataImage.map(
					(data: IData, i: number): JSX.Element => {
						const dotOpacity = dotPosition.interpolate({
							inputRange: [i - 1, i, i + 1],
							outputRange: [0.5, 1, 0.5],
							extrapolate: 'clamp',
						});

						return (
							<Animated.View
								key={data.id}
								style={{ ...styles.dotContainer, opacity: dotOpacity }}
							></Animated.View>
						);
					}
				)}
			</View>
		</ScrollView>
	);
}
const styles = StyleSheet.create({
	container: {
		padding: 40,
		backgroundColor: '#E6E6E6',
	},
	header: {
		marginTop: 60,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 43.5,
	},
	headerIcon: {
		width: 34.89,
		height: 34.89,
	},
	headerLeftSide: {
		flexDirection: 'row',
	},
	headerLine: {
		backgroundColor: 'black',
		width: 1,
		height: 34,
	},
	xBoxHeader: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	dotContainer: {
		width: 10,
		height: 10,
		backgroundColor: 'black',
		borderRadius: 50,
		marginRight: 5,
		marginLeft: 5,
	},
});
