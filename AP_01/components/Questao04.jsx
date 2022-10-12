import { View, Text, FlatList, Button } from "react-native"
import { useState, useEffect } from "react"
import React from 'react'


const Questao04 = ()=>{
  const [pais, setPais] = useState('')

  useEffect(
    ()=>{
      fetch('https://restcountries.com/v2/region/africa?fields=name,population')
      .then(
        (response)=>{
          return response.json()
          }
          )
      .then(
        (responseJson)=>{
            let ganhador = responseJson[0]
            responseJson.forEach(nome => {
              if(nome.population > ganhador.population){
                ganhador = nome
              }
            })

            setPais(ganhador)
            
        })
      .catch((error)=>{console.log(error)})
    }
    ,
    []
  )


  return(
    <View style={{flex:1, textAlign:'center', alaingItens: 'center', justifyContent: 'center', backgroundColor:'purple'}}>
    <Text style={{fontSize: 20, color:'white', fontWeight:'bold',}}>
      QUESTÃO 4
      </Text>
      <Text style={{fontSize: 20, color:'white'}}>
      A maior população é: {pais.name}
      </Text>
    </View>

    
    
  )

  
}

export default Questao04

