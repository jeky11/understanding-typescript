import React from "react";

interface TodoListProps {
    items: { id: string, text: string }[]
}

const TodoList: React.FC<TodoListProps> = ({items}) => {
    const renderedTodos = items.map(todo => <li key={todo.id}>{todo.text}</li>);

    return (
        <ul>
            {renderedTodos}
        </ul>
    );
};

export default TodoList;