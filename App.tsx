/** @format */

import 'react-native-gesture-handler';

import React, { FC } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Home, Product, Contact } from './screen';

const App: FC = (): JSX.Element => {
	const { Navigator, Screen } = createStackNavigator();

	return (
		<NavigationContainer>
			<Navigator screenOptions={{ headerShown: false }}>
				<Screen name="Home" component={Home} />
				<Screen name="Product" component={Product} />
				<Screen name="Contact" component={Contact} />
			</Navigator>
		</NavigationContainer>
	);
};
export default App;
