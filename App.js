import React from 'react';

import { StyleSheet, TextInput } from 'react-native';
import { View } from 'react-native';
import { Text } from 'react-native';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';

const App: () => React$Node = () => {
  return (
    <>
      <View style={styles.screen}>

        <Image style={styles.logo}
        source={require('./assets/oliv4s.png')}/>
        <View style ={styles.emailbox}>
        <TextInput style={styles.emailtext}
        placeholder="Insira seu e-mail"
        fontSizer={20}
        keyboardType={'email-adress'}/>
        </View>

        <View style ={styles.senhabox}>
        <TextInput style={styles.senhatext}
        placeholder="Insira sua senha"
        secureTextEntry={true}
        fontSizer={20}/>
        </View>

        <View style={styles.loginbutton}>
          <TouchableOpacity>
            <Text style={styles.logintext}>Login</Text>
          </TouchableOpacity>
        </View>

      </View>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#333',
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    borderRadius: 500,
    marginTop: 50,
    flex: 1,
    width: 200,
    height: 0,
    resizeMode: 'contain'
  },
  emailbox: {
    backgroundColor: '#ddd',
    paddingHorizontal: 100,
    borderRadius: 10,
  },
  senhabox: {
    backgroundColor: '#ddd',
    marginTop: 20,
    marginBottom: 310,
    paddingHorizontal: 100,
    borderRadius: 10,
  },
  senhatext: {
    marginRight: -35,
  },
  loginbutton: {
    backgroundColor: '#38abab',
    paddingHorizontal: 60,
    paddingVertical: 20,
    borderRadius: 25,
    marginBottom: 10,
  },
  logintext: {
    color: '#fff',
    fontSize: 18,
  },
});

export default App;