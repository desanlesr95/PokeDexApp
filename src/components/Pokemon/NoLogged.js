import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text,StyleSheet, Button } from 'react-native';

const NoLogged = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.content}>
      <Text style={styles.text}>Debes de iniciar sesión para tener esta funcionalidad</Text>
      <Button style={styles.button} title='Ir a login' onPress={ ()=> navigation.navigate('Account')}/>
    </View>
  );
}


const styles = StyleSheet.create({
    content:{
        marginTop: 15,
        paddingHorizontal:30
    },
    text:{
        textAlign:'center',
        marginBottom:10,
    },
    button:{
        width: 100
    }
})

export default NoLogged;
