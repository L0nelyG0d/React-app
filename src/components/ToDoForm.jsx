import { useState } from "react";
import PropTypes from "prop-types";

const TodoForm = ({ addTask }) => {
    const [task, setTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!task.trim()) return;
        addTask(task);
        setTask("");
    };

    return (
        <form onSubmit={handleSubmit} className="todo-form">
            <input
                type="text"
                placeholder="Add a task..."
                value={task}
                onChange={(e) => setTask(e.target.value)}
                className="input-field"
            />
            <button type="submit" className="add-btn">✔</button>
        </form>
    );
};

TodoForm.propTypes = {
    addTask: PropTypes.func.isRequired,
};

export default TodoForm;