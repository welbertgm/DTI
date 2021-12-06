import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Movies from '../screens/Movies';
import Details from '../screens/Details';
import { Image } from 'react-native';

const Stack = createStackNavigator();

function LogoTitle() {
    return (
        <Image
            style={{ flex:1, height: 50, alignSelf: 'center' }}
            source={require('../../assets/imdb.png')}
            resizeMode={'center'}
        />
    );
}

export default () => (
    <Stack.Navigator
        initialRouteName="Movies"
        screenOptions={{
            headerShown: true,
        }}
    >

        <Stack.Screen name="Movies" component={Movies}
            options={{
                title: 'Filmes',
                headerTitle: (props) => <LogoTitle {...props} />,
                headerStyle: {
                    backgroundColor: '#f5c518',
                },
                headerStyle: {
                    backgroundColor: '#f5c518',
                },
                headerTintColor: '#000',
            }}
        />
        <Stack.Screen name="Details" component={Details}
            options={{
                title: 'Detalhes do Filme',
                headerStyle: {
                    backgroundColor: '#f5c518',
                },
                headerTintColor: '#000',
            }}
        />


    </Stack.Navigator>
);