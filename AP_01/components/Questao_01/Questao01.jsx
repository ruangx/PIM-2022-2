import { View, StyleSheet, Text } from 'react-native'
import Questao01A from './Questao01A.jsx'
import Questao01B from './Questao01B.jsx'

const Questao01 = () =>{
  return(
    <View style={estilo011.container} >
    <Text style={{color:'white', fontWeight:'bold', fontSize:40, padding: 15}}>Questao01</Text>
      <Questao01A />
      <Questao01B />
    </View>
  )

}

const estilo011 = StyleSheet.create({
  container:{
    justifyContent: 'center',
    padding: 15,
    textAlign:'center',
    backgroundColor: '#598A27',
    paddingBottom:30
    }
})

export default Questao01