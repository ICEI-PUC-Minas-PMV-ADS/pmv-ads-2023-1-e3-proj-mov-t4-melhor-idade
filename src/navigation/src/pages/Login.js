import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';



export default function App() {
  return (
    <View style={styles.container}>
    <View style={styles.body}>
       <Text style={styles.text}>
        Login
      </Text>
      <TextInput style={styles.input}
      placeholder="Telefone"
      
    />
       <TextInput style={styles.input}
      placeholder="Senha"
      secureTextEntry
      right={<TextInput.Icon icon="eye" />}
    />


      <TouchableOpacity
      style={styles.button}
      onPress = {() => {}}
      >

      <Text style={styles.buttonText}>Entrar</Text>
      
      </TouchableOpacity>
    
    
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d5e6fa',
    padding: 8,
  },

  body:{
  alignItems:'center',
  marginBottom: 300,

  },
  
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4682B4',
  },
  button:{

  width: 250,
  height: 40,
  marginTop: 10,
  backgroundColor: '#679bd0',
  borderRadius: 5,
  alignItems: 'center',
  justifyContent: 'center',
  
},

input:{
 marginTop: 10,
 width: 250,
 height: 40,
 borderRadius: 4,
backgroundColor: '#fff',
},

buttonText:{

  fontSize: 16,
  fontWeight:'bold',
  color: '#fff'
}
});

