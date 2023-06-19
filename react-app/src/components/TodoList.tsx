import React from "react";

interface TodoListProps {
    items: { id: string, text: string }[];
    onDeleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = props => {
    const renderedTodos = props.items.map(todo => (
        <li key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={props.onDeleteTodo.bind(null, todo.id)}>DELETE</button>
        </li>
    ));

    return (
        <ul>
            {renderedTodos}
        </ul>
    );
};

export default TodoList;