import PropTypes from "prop-types";

const ToDoItem = ({ todo, toggleComplete, removeTask }) => {
    return (
        <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={toggleComplete}
                className="checkBox"
            />
            <span>{todo.text}</span>
            <button onClick={removeTask} className="delete-btn">X</button>
        </div>
    );
};

ToDoItem.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
    }).isRequired,
    toggleComplete: PropTypes.func.isRequired,
    removeTask: PropTypes.func.isRequired,
};

export default ToDoItem;