import { View, Text, FlatList, Button } from "react-native"
import { useState, useEffect } from "react"


const Questao03 = ()=>{
  const [id, setId] = useState(0)
  const [nome, setNome] = useState('')

  useEffect(
    ()=>{
      fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${id}`)
      .then(
        (response)=>{
          return response.json()
          }
          )
         
      .then(
        (responseJson)=>{
            setNome(responseJson.results)
        })
      .catch((error)=>{console.log(error)})
    }
    ,
    [id]
  )

  const subirId = () => {
    setId(id + 10)
  }

  return(
    <View>
      <View >
        <Text style={{fontSize: 20,fontWeight: 'bold', textAlign:'center', backgroundColor:'red', color:'white'}}>Pokédex</Text>
        <FlatList 

        data={nome}

        renderItem={

        ({item})=>{
          return(

            <View>
              <Text style={{textAlign:'center', padding:2, flexDirection:'row', color:'red', fontWeight: 'bold'}}> Nome: {item.name.toUpperCase()} </Text>
            </View>

          )

        }
        
      }
      />

        <Button title= 'Proximos pokemons' onPress={subirId}/>
      </View>


    </View>

    
    
  )

  
}

export default Questao03