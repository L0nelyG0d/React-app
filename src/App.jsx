import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { v4 as uuidv4 } from "uuid"; // Генерация уникальных id
import "./App.css"; // Подключение стилей

const App = () => {
    const [todos, setTodos] = useState([]);

    // ✅ Добавление новой задачи
    const addTask = (text) => {
        setTodos([...todos, { id: uuidv4(), text, completed: false }]);
    };

    // ✅ Переключение выполнения задачи
    const toggleComplete = (id) => {
        setTodos(
            todos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    // ✅ Удаление задачи
    const removeTask = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div className="app">
            <h1 className="todo-title">To-Do List</h1>
            <TodoForm addTask={addTask} />
            <TodoList todos={todos} toggleComplete={toggleComplete} removeTask={removeTask} />
        </div>
    );
};

export default App;