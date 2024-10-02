import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const SocialMedia = () => {
    const openLink = (url) => {
        Linking.openURL(url).catch((err) => console.error("Couldn't load page", err));
    };

    return (
    <View style={styles.container}>
      {/* Containers com ícones e textos para cada rede social */}
      <TouchableOpacity style={styles.infoContainer} onPress={() => openLink('https://www.linkedin.com/in/diego-araujo-souza/')}>
        <Icon name="linkedin-square" size={24} color="#0e76a8" style={styles.icon} />
        <Text style={styles.textItem}>LinkedIn</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.infoContainer} onPress={() => openLink('https://www.instagram.com/di_ego.araujo/')}>
        <Icon name="instagram" size={24} color="#C13584" style={styles.icon} />
        <Text style={styles.textItem}>Instagram</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.infoContainer} onPress={() => openLink('https://wa.me/05544984230280')}>
        <Icon name="whatsapp" size={24} color="#25D366" style={styles.icon} />
        <Text style={styles.textItem}>WhatsApp</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.infoContainer} onPress={() => openLink('https://github.com/d13g025')}>
        <Icon name="github" size={24} color="#333" style={styles.icon} />
        <Text style={styles.textItem}>GitHub</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.infoContainer} onPress={() => openLink('mailto:diegoaraujo939@gmail.com')}>
        <Icon name="envelope" size={24} color="#333" style={styles.icon} />
        <Text style={styles.textItem}>E-mail</Text>
      </TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',  // Largura total da tela
        paddingHorizontal: 20,  // Espaçamento interno horizontal
        marginTop: 30,
    },
    infoContainer: {
        width: '100%',  // Contêiner ocupa 100% da largura disponível
        flexDirection: 'row',  // Ícone e texto alinhados horizontalmente
        alignItems: 'center',  // Ícone e texto alinhados verticalmente
        padding: 15,
        backgroundColor: '#ffffff',  // Fundo branco para o contêiner
        borderRadius: 10,  // Arredondamento do contêiner
        marginTop: 10,  // Espaçamento entre contêineres
        shadowColor: '#000',  // Sombra
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 3,  // Elevação para sombra no Android
      },
      textItem: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',  // Cor do texto
        marginLeft: 10,  // Espaçamento entre ícone e texto
      },
      icon: {
        marginRight: 10,  // Espaçamento ao redor do ícone
      },
});

export default SocialMedia;
