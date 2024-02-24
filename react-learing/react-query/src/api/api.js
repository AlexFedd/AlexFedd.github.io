import axios from "axios";
const BASE_URL = "http://localhost:8080"

const instance = axios.create({ baseURL: BASE_URL });

export const getTodosIds = async () => {
    return (await instance.get('/todos')).data.map((todo) => {
        return todo.id;
    })
}

export const getTodoById = async (id) => {
    return (await instance.get(`/todos/${id}`)).data;
}

export const createTodo = async (data) => {
    await instance.post('/todos', data)
}

export const updateTodo = async (data) => {
    await instance.put(`/todos/${data.id}`, data)
}

export const deleteTodo = async (id) => {
    await instance.delete(`/todos/${id}`);
}

export const getProjects = async (page) => {
    return (await instance.get(`/projects?_page=${page}&_limit=3`)).data
}