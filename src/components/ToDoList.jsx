import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleComplete, removeTask, selectedDate }) => {
    const tasksForDate = todos[selectedDate] || [];

    return (
        <div className="todo-list">
            <h2>Tasks for {selectedDate}</h2>
            {tasksForDate.length === 0 ? (
                <p>No tasks for this day.</p>
            ) : (
                tasksForDate.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        toggleComplete={() => toggleComplete(selectedDate, todo.id)}
                        removeTask={() => removeTask(selectedDate, todo.id)}
                    />
                ))
            )}
        </div>
    );
};

TodoList.propTypes = {
    todos: PropTypes.object.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    removeTask: PropTypes.func.isRequired,
    selectedDate: PropTypes.string.isRequired,
};

export default TodoList;