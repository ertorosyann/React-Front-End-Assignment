import axios from "axios";
import Todo from "../../types";
import { v4 as uuid } from "uuid";


const API_URL = "https://jsonplaceholder.typicode.com/todos";

export const fetchToDos = async () => {
    const responce  = axios.get(API_URL);
    return (await responce).data;
}

export const createTodo = async (titlee: string) => {

    const newTodo = {
        userId: 1,
        id: uuid(), 
        title: titlee,
        completed: false
    };
    const response = await axios.post(API_URL, newTodo);
    return response.data
}

export const updateTodo = async (id: number, completed: boolean): Promise<Todo> => {
    const response = await axios.patch(`${API_URL}/${id}`, {
        completed: !completed
      });
      
      return response.data;
}

export const deleteTodo = async (id: number) => {
    await axios.delete(`${API_URL}/${id}`)
    return id;
}