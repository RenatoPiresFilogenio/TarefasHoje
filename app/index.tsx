import { Text, View , StyleSheet, TouchableOpacity, TextInput} from "react-native";
import {FontAwesome} from "@expo/vector-icons"
import React, {useState} from "react";
export default function Page() {

  const [tarefa, setTarefa] = useState("");

  function handleAdd(){
    alert(tarefa)
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
  }
})