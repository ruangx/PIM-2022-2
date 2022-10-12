import { View, FlatList, Text, StyleSheet } from 'react-native'

const Questao01B = () =>{
  let matricula = [
    {disciplinas: 'CDP, Tópicos Especiais em Comunicação, Multimídia'},
  ]

  return(
    <View>
    <FlatList 

      data={matricula}

      renderItem={

      ({item})=>{
        return(

          <View>
            <Text style={estito01b.textos} >Disciplinas: {item.disciplinas}</Text>
          </View>

        )

      }
      
    }
    />
    </View>
  )


}

const estito01b = StyleSheet.create({
  textos:{
    fontWeight:'bold',
    alignItems:'center'
  }
})

export default Questao01B