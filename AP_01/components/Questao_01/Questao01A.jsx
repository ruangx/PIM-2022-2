import { View, Text,StyleSheet } from 'react-native'

const Questao01A = () =>{
    return(
      <View >
        <Text style={estito01.textos}>Nome: Ruan</Text>
        <Text style={estito01.textos}>Sobrenome: Gabriel </Text>
        <Text style={estito01.textos}>Curso: DD</Text>
      </View>
    )

}

const estiloo = StyleSheet.create({
  
})

const estito01 = StyleSheet.create({
  textos:{
    fontWeight:'bold',
    alignItems:'center'
  }
})


export default Questao01A