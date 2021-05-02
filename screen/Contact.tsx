/** @format */

import React from 'react';
import {
	View,
	Text,
	ScrollView,
	StyleSheet,
	StatusBar,
	Image,
	TextInput,
	TouchableWithoutFeedback,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default function Contact(props: any): JSX.Element {
	return (
		<ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
			<StatusBar hidden showHideTransition="slide" />
			<View style={styles.header}>
				<TouchableWithoutFeedback onPress={() => props.navigation.navigate('Home')}>
					<Image source={require('../assets/icon.png')} style={styles.headerIcon} />
				</TouchableWithoutFeedback>
				<View style={styles.headerLeftSide}>
					<Ionicons name="search-outline" size={29} />
				</View>
			</View>
			<View style={{ marginBottom: 98 }}>
				<Text style={{ fontSize: 34 }}>Contact Us,</Text>
				<Text style={{ fontSize: 34, fontWeight: 'bold' }}>We want to</Text>
				<Text style={{ fontSize: 34, fontWeight: 'bold' }}>hear your voice</Text>
			</View>
			<View>
				<Text style={{ fontSize: 25 }}>Have you got any problem?</Text>
				<Text style={{ fontSize: 25, fontWeight: 'bold', marginBottom: 31 }}>
					Write Below!
				</Text>
				<View style={styles.inputContainer}>
					<TextInput placeholder="Name" style={styles.inputs} />
					<TextInput placeholder="Email" style={styles.inputs} />
				</View>
				<View>
					<Text style={styles.subjectStyle}>Subject</Text>
					<View style={{ flexDirection: 'row' }}>
						<TextInput style={styles.textArea} multiline placeholder="Type Something" />
						<View style={styles.lineChevronContainer}>
							<Ionicons name="chevron-forward-outline" size={20} />
						</View>
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
		marginBottom: 98.1,
	},
	headerIcon: {
		width: 34.89,
		height: 34.89,
	},
	headerLeftSide: {
		flexDirection: 'row',
	},
	inputContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 36,
	},
	inputs: {
		borderBottomColor: '#AFAFAF',
		borderBottomWidth: 2,
		borderStyle: 'solid',
		maxWidth: 142,
		width: '100%',
	},
	subjectStyle: {
		fontSize: 14,
		color: '#AFAFAF',
		marginBottom: 5,
	},
	textArea: {
		height: 112,
		borderColor: '#AFAFAF',
		borderWidth: 1.5,
		maxWidth: 300,
		width: '100%',
		padding: 10,
	},
	lineChevronContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#AFAFAF',
		width: 37,
	},
});
