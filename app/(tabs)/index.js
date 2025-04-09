import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import { router } from 'expo-router';
import { IconButton } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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
    ingredientes: [
      '500g de massa de lasanha',
      '400g de queijo mussarela',
      '400g de presunto',
      'Molho de tomate',
      'Orégano a gosto'
    ],
    preparo: [
      '1. Pré-aqueça o forno a 200°C.',
      '2. Unte um refratário e monte as camadas:',
      '   - Molho de tomate no fundo',
      '   - Massa de lasanha',
      '   - Presunto',
      '   - Queijo mussarela',
      '   - Repita até acabar os ingredientes',
      '3. Finalize com queijo e orégano.',
      '4. Asse por 20 minutos coberto e mais 10 minutos sem papel alumínio.'
    ],
    porcoes: 6
  },
  {
    id: '2',
    nome: '🧑‍🍳 João',
    receita: 'Torta de Frango',
    imagem: 'https://www.sabornamesa.com.br/media/k2/items/cache/51bfc9a1b080d1f314d0d70e4d86c1a1_M.jpg',
    ingredientes: [
      '2 xícaras de farinha',
      '1/2 xícara de óleo',
      '2 ovos',
      '1 xícara de leite',
      '1 peito de frango desfiado',
    ],
    preparo: [
      '1. Refogue cebola, alho e frango desfiado com temperos. Reserve.',
      '2. Bata no liquidificador: farinha, óleo, ovos, leite e fermento.',
      '3. Despeje metade da massa em uma forma untada.',
      '4. Adicione o recheio de frango.',
      '5. Cubra com o restante da massa.',
      '6. Asse por 35-40 minutos em forno a 180°C.'
    ],
    porcoes: 8
  },
  {
    id: '3',
    nome: '🧑‍🍳 Ana',
    receita: 'Panqueca Doce',
    imagem: 'https://www.sabornamesa.com.br/media/k2/items/cache/1d11e5ebeed3c42540f69555bbe34fb8_M.jpg',
    ingredientes: [
      '1 xícara de farinha',
      '1 ovo',
      '1 xícara de leite',
      '2 colheres de açúcar',
      'Doce de leite para rechear'
    ],
    preparo: ['1. Misture farinha, ovo, leite, açúcar e fermento até ficar homogêneo.',
      '2. Aqueça uma frigideira antiaderente com manteiga.',
      '3. Despeje uma concha da massa e espalhe em círculo fino.',
      '4. Frite 2 minutos de cada lado.',
      '5. Repita até acabar a massa.',
      '6. Recheie com doce de leite e enrole.'],
    porcoes: 4
  },
  {
    id: '4',
    nome: '🧑‍🍳 Paulo',
    receita: 'Macarrão ao Alho e Óleo',
    imagem: 'https://www.sabornamesa.com.br/media/k2/items/cache/6cc1906906242cb93fd96a345b4d3e52_M.jpg',
    ingredientes: [
      '250g de macarrão',
      '3 dentes de alho picado',
      'Azeite a gosto',
      'Sal e salsinha a gosto'
    ],
    preparo: [
      '1. Cozinhe o macarrão em água com sal até ficar "al dente".',
      '2. Reserve 1 xícara da água do cozimento.',
      '3. Refogue o alho picado no azeite em fogo baixo.',
      '4. Adicione o macarrão escorrido e misture bem.',
      '5. Use a água reservada se necessário para ajustar o ponto.',
      '6. Finalize com salsinha e pimenta-do-reino.'
    ],
    porcoes: 2
  },
  {
    id: '5',
    nome: '🧑‍🍳 Marina',
    receita: 'Brigadeiro Gourmet',
    imagem: 'https://www.sabornamesa.com.br/media/k2/items/cache/5003d452a8da016f3ed02a6385cf54e8_M.jpg',
    ingredientes: [
      '1 lata de leite condensado',
      '100g de chocolate meio amargo',
      '1 colher de manteiga',
      'Chocolate granulado para enrolar'
    ],
    preparo: [
      '1. Derreta o chocolate meio amargo em banho-maria.',
      '2. Misture com leite condensado e manteiga em uma panela.',
      '3. Cozinhe em fogo baixo, mexendo até desgrudar do fundo (10-15 min).',
      '4. Transfira para um prato untado e deixe esfriar.',
      '5. Unte as mãos com manteiga e enrole os brigadeiros.',
      '6. Passe no granulado e coloque em forminhas.'
    ],
    porcoes: '20 docinhos'
  }
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
          <TouchableOpacity onPress={() => router.push({
            pathname: './receitas/detalhes',
            params: {
              nome: item.receita,
              imagem: item.imagem,
              porcoes: item.porcoes,
              ingredientes: JSON.stringify(item.ingredientes),
              preparo: JSON.stringify(item.preparo)
            }
          })}>
            <IconButton icon="arrow-right-bold-circle-outline" iconColor="orange" />
          </TouchableOpacity>

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