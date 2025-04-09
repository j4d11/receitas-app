import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function Detalhes() {
  const { nome, imagem, porcoes, ingredientes, preparo } = useLocalSearchParams();
  const listaIngredientes = JSON.parse(ingredientes || '[]');
  const listaModoPreparo = JSON.parse(preparo || '[]');

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: imagem }} style={styles.imagem} />

      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.porcoes}>🍽️ Porções: {porcoes}</Text>

      <Text style={styles.titulo}>🧂 Ingredientes</Text>
      {listaIngredientes.map((item, i) => (
        <Text key={i} style={styles.texto}>• {item}</Text>
      ))}

      <Text style={styles.titulo}>👨‍🍳 Modo de Preparo</Text>
      {listaModoPreparo.map((item, i) => (
        <Text key={i} style={styles.texto}>{item}</Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fffef0',
  },
  imagem: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 16,
  },
  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#e07b00',
    marginBottom: 8,
  },
  porcoes: {
    fontSize: 16,
    marginBottom: 16,
    color: '#444',
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 8,
    color: '#333',
  },
  texto: {
    fontSize: 14,
    color: '#333',
    marginBottom: 6,
    lineHeight: 20,
  },
});
