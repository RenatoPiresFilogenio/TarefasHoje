import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Tarefa from "./Tarefa";
export default function Page() {

  const [tarefa, setTarefa] = useState("");

  const [list, setList] = useState([])
  function handleAdd(){
    if(tarefa === ''){
      return;
    }

    const dados = {
      key: Date.now(),
      item: tarefa
    }

    setList(ListArray => [dados,...ListArray]);

    setTarefa("")
  }

  function handleDelete(item){
    let delItem = list.filter((tarefa)=>{
      return (tarefa.item !== item)
    })
    setList(delItem)
  }

  return (
    <View  style={styles.container}>
        <Text style={styles.title}>Tarefas</Text>

         <View style={styles.containerInput}>
          <TextInput
          placeholder="Digite sua tarefa..."
          style={styles.input}
          value={tarefa}
          onChangeText={(text)=> setTarefa(text)}
          />

      <TouchableOpacity style={styles.button} onPress={handleAdd}>
        <FontAwesome name="plus" size={20} color={"#fff"}></FontAwesome>
      </TouchableOpacity>

         </View>

         <FlatList data={list}
          keyExtractor={(item)=> item.key }
          renderItem={({item}) =><Tarefa data={item} deleteItem={() => handleDelete(item.item)} />}
          style={styles.list}
         />


    </View>
  );
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#22272e",
    paddingTop:28,
   
  },
  title:{
    fontSize:24,
    fontWeight:'bold',
    color:"#fff",
    marginTop:"5%",
    paddingStart:"5%"
  },
  button:{
    backgroundColor:"#73f7ff",
    height:44,
    width:"15%",
    justifyContent:"center",
    alignContent:"center",
    alignItems:"center",  
    borderRadius:4,
    marginLeft:8,
  },
  input:{
    backgroundColor:"#fff",
    width:"75%",
    height:44,
    borderRadius:4,
    paddingHorizontal:8,
  },
  containerInput:{
    flexDirection:"row",
    width:"100%",
    height:44,
    alignItems:"center",
    justifyContent: "center",
    marginBottom:22,
  },
  list:{
    flex:1,
    backgroundColor:"#fff",
    paddingStart:"4%",
    paddingEnd:"4%"
  }
})