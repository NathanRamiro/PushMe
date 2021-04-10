import React from 'react';
import { Text, View, SafeAreaView, Button, TextInput} from 'react-native';
import * as Permissions from 'expo-permissions'
import * as Notifications from 'expo-notifications'

import Cabecalho from './components/Cabecalho/index'
import styles from './styles'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      <Cabecalho titulo='PushMe' />

      <View style={styles.centro}>

        <View style={styles.baixo}>

          <Text style={styles.texto}>Titulo:</Text>
          <TextInput
            style={styles.input}
            placeholder='O Titulo Da Sua Notificação'
            maxLength={30}
          />

        </View>

        <View style={styles.baixo}>

          <Text style={styles.texto}>Texto:</Text>
          <TextInput
            style={styles.input}
            placeholder='O Texto Da Sua Notificação'
            maxLength={60}
          />

        </View>

      </View>

      <View style={styles.baixo}>
        <Button title='Enviar Notificação' color={styles.botãoPush.backgroundColor} style={styles.botãoPush} onPress={()=> alert('button pressed')} />
        <br></br>
      </View>

    </SafeAreaView>
  );
}

