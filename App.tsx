import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SocialMedia from './components/SocialMedia';
import Skills from './components/Skills';
import ImagemPerfil from './components/ImagemPerfil';

const Stack = createStackNavigator();

// Tela de Apresentação
const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Meu Perfil!</Text>
      <ImagemPerfil />
      <Text style={styles.description}>
        Sou um desenvolvedor apaixonado por tecnologia, com habilidades em diversas linguagens de programação e um interesse particular em desenvolvimento mobile e web.
      </Text>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonWrapper}>
          <Button
            title="Ver Habilidades"
            onPress={() => navigation.navigate('Skills')}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            title="Ver Redes Sociais"
            onPress={() => navigation.navigate('SocialMedia')}
          />
        </View>
      </View>
    </View>
  );
};

// Configuração da Navegação
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Perfil' }} />
        <Stack.Screen name="Skills" component={Skills} options={{ title: 'Habilidades' }} />
        <Stack.Screen name="SocialMedia" component={SocialMedia} options={{ title: 'Redes Sociais' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '80%',
    marginTop: 20,
  },
  buttonWrapper: {
    marginVertical: 10,  // Espaço vertical entre os botões
  },
});

export default App;
