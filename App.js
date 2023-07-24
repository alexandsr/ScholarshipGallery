import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, useColorScheme, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Search from './source/search.jsx';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';

const Stack = createStackNavigator();
export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const colorScheme = useColorScheme();
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const backgroundColor = isDarkMode ? '#081013' : '#DBE5E9';
  const textColor = isDarkMode ? '#DBE5E9' : '#081013';
  const [loaded] = useFonts({
    Ogreave: require('./assets/fonts/OgreaveBold-d5gl.ttf'),
  });

  return (
    <View style={styles.container}>

      {/* Control color & style of top bar. */}    
      <StatusBar backgroundColor={'#081013'} style={'light'}  />
    
      <Image
        source={require('./assets/cap_dark.png')}
        style={styles.image}
      />
              <Text style={styles.header}>scholarship{"\n"}gallery</Text>  

      <Button 
        title="Go"  
        onPress={() => console.log('button presed')}
      />
     <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Search" component={Search} />
      </Stack.Navigator>
    </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',  
    alignItems: 'center',
    marginTop: 0,
    backgroundColor: '#081013'
  },
  header: {
    fontSize: 40,
    textAlign: 'center',
    position: 'absolute',
    top: 80,
    fontFamily: 'Ogreave',
  },
  subtitle: {
    textAlign: 'center', 
    color: '#535353',
    marginBottom: 20
  },
  image: {
    width: 200,
    height: 200,
    top: 50,
    position: 'absolute',

  }
  
});