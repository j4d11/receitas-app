import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';

const receitaPrincipal = {
  nome: 'Bolo de Chocolate',
  descricao: 'Bolo fofinho com cobertura de brigadeiro cremoso. Uma sobremesa perfeita para qualquer ocasião!',
  imagem: 'https://www.sabornamesa.com.br/media/k2/items/cache/3d9c691fd3a1e80f63a4a70c2a2e3155_M.jpg',
  tempo: '45 min',
  porcoes: 8,
  custo: 25.00,
  avaliacao: 4.8,
  data: '2023-09-14',
};

const autores = [
  {
    id: '1',
    nome: '🧑‍🍳 Carla',
    receita: 'Lasanha de Queijo',
    imagem: 'https://www.sabornamesa.com.br/media/k2/items/cache/bbc23ea5371c4c5a2e17973ee7e53a66_XL.jpg',
  },
  {
    id: '2',
    nome: '🧑‍🍳 João',
    receita: 'Torta de Frango',
    imagem: 'https://www.sabornamesa.com.br/media/k2/items/cache/51bfc9a1b080d1f314d0d70e4d86c1a1_M.jpg',
  },
  {
    id: '3',
    nome: '🧑‍🍳 Ana',
    receita: 'Panqueca Doce',
    imagem: 'https://www.sabornamesa.com.br/media/k2/items/cache/1d11e5ebeed3c42540f69555bbe34fb8_M.jpg',
  },
  {
    id: '4',
    nome: '🧑‍🍳 Paulo',
    receita: 'Macarrão ao Alho e Óleo',
    imagem: 'https://www.sabornamesa.com.br/media/k2/items/cache/6cc1906906242cb93fd96a345b4d3e52_M.jpg',
  },
  {
    id: '5',
    nome: '🧑‍🍳 Marina',
    receita: 'Brigadeiro Gourmet',
    imagem: 'https://www.sabornamesa.com.br/media/k2/items/cache/5003d452a8da016f3ed02a6385cf54e8_M.jpg',
  },
];

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Receita em Destaque</Text>
      
      <View style={styles.card}>
        <Image source={{ uri: receitaPrincipal.imagem }} style={styles.imagem} />
        <View style={styles.info}>
          <Text style={styles.nome}>{receitaPrincipal.nome}</Text>
          <Text style={styles.descricao}>{receitaPrincipal.descricao}</Text>
        </View>
      </View>

      <View style={[styles.card, styles.detalhes]}>
        <Text style={styles.texto}>⏱️ Tempo: {receitaPrincipal.tempo}</Text>
        <Text style={styles.texto}>🍽️ Porções: {receitaPrincipal.porcoes}</Text>
        <Text style={styles.texto}>💰 Custo: R$ {receitaPrincipal.custo.toFixed(2)}</Text>
        <Text style={styles.texto}>⭐ Avaliação: {receitaPrincipal.avaliacao}</Text>
        <Text style={styles.texto}>📅 Publicado: {receitaPrincipal.data}</Text>
      </View>

      <Text style={styles.tituloSecao}>Autores</Text>
      {autores.map((item) => (
        <View key={item.id} style={[styles.card, styles.cardAutor]}>
          <Image source={{ uri: item.imagem }} style={styles.imgAutor} />
          <View style={styles.infoAutor}>
            <Text style={styles.nomeReceita}>{item.receita}</Text>
            <Text style={styles.texto}>{item.nome}</Text>
          </View>
          <Text style={styles.seta}>{'>'}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#fffbe6',
  },
  titulo: {
    fontSize: 24,
    fontFamily: 'Poppins_400Regular',
    marginBottom: 16,
    fontWeight: 'bold',
    color: '#444',
  },
  tituloSecao: {
    fontSize: 20,
    fontFamily: 'Poppins_400Regular',
    marginBottom: 16,
    color: '#444',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  imagem: {
    width: '100%',
    height: 200,
  },
  info: {
    padding: 16,
  },
  nome: {
    fontSize: 20,
    fontFamily: 'Poppins_400Regular',
    marginBottom: 8,
    color: '#e07b00',
  },
  descricao: {
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    color: '#444',
    lineHeight: 20,
  },
  texto: {
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    color: '#444',
    marginVertical: 2,
  },
  detalhes: {
    padding: 16,
  },
  cardAutor: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  imgAutor: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  infoAutor: {
    flex: 1,
  },
  nomeReceita: {
    fontFamily: 'Poppins_400Regular',
    fontWeight: 'bold',
    color: '#e07b00',
    marginBottom: 4,
  },
  seta: {
    fontSize: 20,
    color: '#aaa',
  },
});