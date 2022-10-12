import { Text, StyleSheet, View, TextInput, Button } from 'react-native'
import { useState } from 'react'


const Questao02 = () => {

  const [numero01, SetNumero01] = useState(0)
  const [numero02, SetNumero02] = useState(0)
  const [resultado, SetResultado] = useState(0)

  const somar = ()=> {
    let n1 = parseInt(numero01)
    let n2 = parseInt(numero02)
    SetResultado(n1 + n2);
  }

    const subtrair = ()=> {
    let n1 = parseInt(numero01)
    let n2 = parseInt(numero02)
    SetResultado(n1 - n2);
  }
    const multiplicar = ()=> {
    let n1 = parseInt(numero01)
    let n2 = parseInt(numero02)
    SetResultado(n1 * n2);
  }
    const dividir = ()=> {
    let n1 = parseInt(numero01)
    let n2 = parseInt(numero02)

    if( n2 == 0){
      alert('impossivel dividir por 0')
    }else{
      SetResultado(n1 / n2);
    }
    
  }

  return(
    <View style= {estilo.conteiner}>

      <View style= {{alignItems:'center'}}>
      <Text style= {estilo.textoGrande}>CALCULADORA</Text>
      </View>
      <View style= {estilo.linhas}>
      <TextInput placeholder= 'Número 1' style= {estilo.inputt} onChangeText = {(texto)=>SetNumero01(texto)}/>
      <TextInput placeholder= 'Número 2'style= {estilo.inputt} onChangeText = {(texto)=>SetNumero02(texto)}/>

      </View>

      <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>

      <Button title ='+' style= {estilo.botoes} onPress={somar}/>

      <Button  title = '-' style= {estilo.botoes} onPress={subtrair}/>
      <Button  title = '/' style= {estilo.botoes} onPress={dividir}/>
      <Button  title = '*' style= {estilo.botoes} onPress={multiplicar}/>
      
      </View>
      

      <View style= {{alignItems:'center'}}>
      <Text style= {estilo.textoGrande}>  O resultado é: {resultado}</Text>
      </View>

    </View>
  )

}
const estilo = StyleSheet.create({
  conteiner: {
    backgroundColor: '#042940',
    padding: 15,
    paddingBottom:40,
    fontFamily: 'arial'
  },
  textoGrande:{
    fontSize: 25,
    color:'white',
    padding: 20,
    fontWeight: 'bold',
  },
  linhas:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: '10vh',
    marginBottom:10
  },
  inputt:{
    margin: 3,
    padding: 12,
    border: 'solid 2px',
    borderRadius: '12px',
    color: '#DBF227',
    maxWidth: 140,
    textAlign:'center'

  },
  botoes:{
    padding: 10,
    margin:5
  }
})
export default Questao02