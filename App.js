
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddToDo from './components/AddToDo';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' }
  ]);

  const pressHandler = (key)=> {
    setTodos((prev)=>{
      return prev.filter(todo => todo.key!==key);
    })
  }

  const submitHandler = (textt)=>{
    setTodos((prev)=>{
        return [
            {text:textt , key: Math.random().toString()},
            ...prev 
        ]
    })
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
      <AddToDo submitHandler={submitHandler}/>
        <View style={styles.list}>
          <FlatList
             data={todos}
             renderItem={({item}) => (
             <TodoItem item = {item} pressHandler = {pressHandler}/>
             )} 
          />
        </View>
      </View>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
    padding:40,
    flex:1,

  },
  list:{
    flex:1,
    marginTop:20,
  },
});
