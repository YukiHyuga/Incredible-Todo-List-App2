import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDolist";
import React from "react";
import { SafeAreaView } from "react-native";


const App = () => {
  return (
    <SafeAreaView>
    <ToDoList />
    <ToDoForm />
  </SafeAreaView>
    );
}
export default App;