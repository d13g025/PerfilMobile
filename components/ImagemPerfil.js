import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');  // Obtém a largura da tela do dispositivo

const ImagemPerfil = () => {
    const imageSize = width * 0.5;  // Definir o tamanho da imagem (50% da largura da tela)

    return (
        <View style={styles.imageContainer}>
            <Image
                source={require('../assets/perfil.png')}  // Corrigido para usar require()
                style={[styles.image, { width: imageSize, height: imageSize, borderRadius: imageSize / 2 }]} // Arredondando as bordas
                accessibilityLabel="Imagem de perfil"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    imageContainer: {
        marginVertical: 20,
    },
    image: {
        resizeMode: 'contain',  // Mantém a proporção
    },
});

export default ImagemPerfil;
