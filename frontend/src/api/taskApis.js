import axios from "axios";

export const getTasks = async () => {
    const tasks = await axios.get(`/api/tasks`);
    return tasks;
};

export const addTask = async (title, description, status) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const response = await axios.post(`/api/tasks`, { title, description, status }, config);
    console.log(response)
    return response;
};