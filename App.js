import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import Tasks from './components/Tasks';

export default function App() {

const [task, setTask] = useState();
const [taskItems, setTaskItems] = useState([]);

const handleAddTask = () =>{
  Keyboard.dismiss();
  setTaskItems([...taskItems, task])
  setTask(null);
}

const completeTask = (index) => {
  let itemsCopy =[...taskItems];
  itemsCopy.splice(index, 1);
  setTaskItems(itemsCopy);

}

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper} >
        <Text style={styles.sectonTitle}>Today's tasks</Text>

        <View style={styles.items}>
          {
            taskItems.map((item, index) => {
              return(
                <TouchableOpacity key={index}  onPress={() =>completeTask(index)}>
                    <Tasks text={item}/>
                </TouchableOpacity>
              )
              
            })
          }
          {/* <Tasks text={'Task 1'} />
          <Tasks text={'Task 2'}/> */}
        </View>
      </View>
      <KeyboardAvoidingView behavior={Platform.OS ==="ios" ? "padding" : "height"}
      style={styles.writeTaskWrapper}>
          <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)}/>
          <TouchableOpacity onPress={() =>handleAddTask()}>
            <View style={styles.addWrapper}>
                <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    
  },
  tasksWrapper:{
    paddingTop: 75,
    paddingHorizontal:20,
  },
  sectonTitle:{
    fontSize:20,
    fontWeight: 'bold',
  },
  items:{
    marginTop: 30,
  },
  writeTaskWrapper:{
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input:{
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
    
  },
  addWrapper:{
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText:{},
});
