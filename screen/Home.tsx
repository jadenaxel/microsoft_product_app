/** @format */

import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
	View,
	Text,
	StatusBar,
	StyleSheet,
	Image,
	ScrollView,
	ImageBackground,
} from 'react-native';
import { TouchableHighlight, TouchableWithoutFeedback } from 'react-native-gesture-handler';

interface IProductData {
	id: number;
	title: string;
	image: string;
}

const productData1: IProductData[] = [
	{
		id: 1,
		title: 'Windows',
		image: require('../assets/images/Windows.png'),
	},
	{
		id: 2,
		title: 'Microsoft 365',
		image: require('../assets/images/365.png'),
	},
];
const productData2: IProductData[] = [
	{
		id: 1,
		title: 'Xbox',
		image: require('../assets/images/xbox.png'),
	},
	{
		id: 2,
		title: 'Surface',
		image: require('../assets/images/surface.png'),
	},
];

export default function Home(props: any): JSX.Element {
	return (
		<ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
			<StatusBar hidden showHideTransition="slide" />
			<View style={styles.header}>
				<Image source={require('../assets/icon.png')} style={styles.headerIcon} />
				<View style={styles.headerLeftSide}>
					<Ionicons name="search-outline" size={29} />
					<TouchableWithoutFeedback onPress={() => props.navigation.navigate('Contact')}>
						<Ionicons name="options-outline" size={29} style={{ marginLeft: 22 }} />
					</TouchableWithoutFeedback>
				</View>
			</View>
			<View style={{ marginBottom: 55 }}>
				<Text style={{ fontSize: 31 }}>Hello,</Text>
				<Text style={{ fontSize: 31, fontWeight: 'bold' }}>William</Text>
			</View>
			<View style={{ marginBottom: 35 }}>
				<View style={styles.productContainer}>
					{productData1.map(
						(data: IProductData): JSX.Element => {
							return (
								<TouchableHighlight
									key={data.id}
									onPress={() => props.navigation.navigate('Product', data)}
								>
									<ImageBackground source={data.image} style={styles.imageSize}>
										<View style={styles.blurImage}>
											<Text style={styles.imageText}>{data.title}</Text>
										</View>
									</ImageBackground>
								</TouchableHighlight>
							);
						}
					)}
				</View>
				<View style={styles.productContainer}>
					{productData2.map(
						(data: IProductData): JSX.Element => {
							return (
								<TouchableHighlight
									key={data.id}
									onPress={() => props.navigation.navigate('Product', data)}
								>
									<ImageBackground source={data.image} style={styles.imageSize}>
										<View style={styles.blurImage}>
											<Text style={styles.imageText}>{data.title}</Text>
										</View>
									</ImageBackground>
								</TouchableHighlight>
							);
						}
					)}
				</View>
			</View>
			<View>
				<Text style={styles.navigation}>Navigation</Text>
				<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
					<View>
						<Text>Developer</Text>
						<Text>Cargo Tracking</Text>
					</View>
					<View>
						<Text>Enterprise</Text>
						<Text>Help Center</Text>
					</View>
					<View>
						<Text>Education</Text>
						<Text>Careers</Text>
					</View>
				</View>
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
		marginBottom: 28.1,
	},
	headerIcon: {
		width: 34.89,
		height: 34.89,
	},
	headerLeftSide: {
		flexDirection: 'row',
	},
	imageSize: {
		width: 157,
		height: 157,
	},
	imageText: {
		color: 'white',
		fontSize: 12,
		marginTop: 123,
		marginLeft: 12,
	},
	blurImage: {
		width: 157,
		height: 157,
		backgroundColor: 'rgba(0,0,0,.40)',
	},
	navigation: {
		fontSize: 22,
		fontWeight: 'bold',
		marginBottom: 19,
	},
	productContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 20,
	},
});
