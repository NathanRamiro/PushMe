import React from 'react'
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center'
    },
    botão: {
      margin: 20
    },
    baixo: {
      flex: 1,
      backgroundColor: 'transparent',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'flex-end'
    },
    alto: {
      flex: 1,
      backgroundColor: 'transparent',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'flex-start'
    },
    centro:{
      flex: 1,
      backgroundColor: 'transparent',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    botãoPush: {
      margin: 10,
      backgroundColor:'#007acc'
      
    },
    input:{
      height: 25, 
      borderColor: '#007acc', 
      borderWidth: 1 ,
      marginLeft:10  ,
      paddingHorizontal:5         
    },
    texto:{
      fontSize:20,
      margin:0,
      textAlign:'center'
    }/*,
    descricao:{
      textAlign:'center',

    }*/
  })

export default styles