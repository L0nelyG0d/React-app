import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import { format } from "date-fns";

const App = () => {
    const [selectedDate, setSelectedDate] = useState(format(new Date(), "yyyy-MM-dd"));
    const [todos, setTodos] = useState({});

    // ✅ Функция изменения даты
    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
    };

    // ✅ Добавление задачи для определенной даты
    const addTask = (text, date) => {
        if (!text.trim()) return;
        setTodos((prevTodos) => ({
            ...prevTodos,
            [date]: [...(prevTodos[date] || []), { id: uuidv4(), text, completed: false }],
        }));
    };

    // ✅ Переключение выполнения задачи
    const toggleComplete = (date, id) => {
        setTodos((prevTodos) => ({
            ...prevTodos,
            [date]: prevTodos[date]?.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            ) || [],
        }));
    };

    // ✅ Удаление задачи
    const removeTask = (date, id) => {
        setTodos((prevTodos) => ({
            ...prevTodos,
            [date]: prevTodos[date]?.filter((todo) => todo.id !== id) || [],
        }));
    };

    return (
        <div className="app">
            <h1>To-Do List</h1>
            <label>Choose a date: </label>
            <input type="date" value={selectedDate} onChange={handleDateChange} />

            <TodoForm addTask={addTask} selectedDate={selectedDate} />
            <TodoList todos={todos} toggleComplete={toggleComplete} removeTask={removeTask} selectedDate={selectedDate} />
        </div>
    );
};

export default App;