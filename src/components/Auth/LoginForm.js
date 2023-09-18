import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { useFormik} from "formik";
import * as Yup from "yup";
import { user, userDetails } from '../../utils/userDB';
import useAuth from '../../hooks/useAuth';

const LoginForm = () => {
    let [error,setError] = useState('');
    const {login,logout} = useAuth();
    logout()
    const formik = useFormik({
        initialValues:initialValues(),
        onSubmit: (formValue)=>{
            
            if(formValue.username === user.username && formValue.password === user.password){
              setError("");
              login(userDetails);
              
            }
            else{
              console.log(formValue,user,(formValue.username!==user.username || password!==user.password));
               setError("Usuario o contraseña incorrecta");
            }
        },
        validationSchema: Yup.object(validationSchema()),
        validateOnChange: false
    })


    return (
        <View>
          <Text style={styles.title}>Iniciar Sesión</Text>
          <TextInput placeholder="Usuario"
            style={styles.input}
            autoCapitalize='none'
            value={formik.values.username}
            onChangeText={(text)=> formik.setFieldValue('username',text) }
          />
          <TextInput placeholder="Contraseña"
            style={styles.input}
            secureTextEntry={true}
            value={formik.values.password}
            onChangeText={(text)=> formik.setFieldValue('password',text) }
          />
          <Button title="Enviar" onPress={formik.handleSubmit} style={styles.button} />

          <Text style={styles.error}>{formik.errors.username}</Text>
          <Text style={styles.error}>{formik.errors.password}</Text>
          <Text style={styles.error}>{error}</Text>
        </View>
      )
}


function initialValues(){
    return {
        username:"",
        password:""
    }
}

function validationSchema(){
    return {
        username: Yup.string().required("El usuario es obligatorio"),
        password: Yup.string().required("La contraseña es obligatoria")
    }
}

const styles = StyleSheet.create({
    title: {
      textAlign: 'center',
      fontSize: 28,
      fontWeight: 'bold',
      marginTop: 50,
      marginBottom: 20
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius: 10
    },
    button:{
        width: 20,
        height:20
    },
    error:{
        textAlign:"center",
        color: "#f00",
        marginTop:20
    }
  
})

export default LoginForm;
