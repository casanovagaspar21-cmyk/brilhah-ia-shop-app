import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
      <View style={styles.container}>
            <Text style={styles.title}>BRILHAH IA SHOP</Text>
                  <Text style={styles.subtitle}>App gerada automaticamente ✅</Text>
                      </View>
                        );
                        }

                        const styles = StyleSheet.create({
                          container: {
                              flex: 1,
                                  justifyContent: 'center',
                                      alignItems: 'center',
                                          backgroundColor: '#000',
                                            },
                                              title: {
                                                  fontSize: 28,
                                                      fontWeight: 'bold',
                                                          color: '#00eaff',
                                                            },
                                                              subtitle: {
                                                                  fontSize: 16,
                                                                      color: '#fff',
                                                                          marginTop: 10,
                                                                            },
                                                                            });