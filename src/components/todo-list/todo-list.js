import React from 'react';

import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({ todos, onDeletedId,
                    onToggleImportantId,
                    onToggleDoneId}) => {

  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <li key={id} className="list-group-item">
        <TodoListItem
            {...itemProps }
            onDeleted={() => onDeletedId(id)}
            onToggleImportant={() => onToggleImportantId(id)}
            onToggleDone={() => onToggleDoneId(id)}
        />
      </li>
    );
  });

  return (
    <ul className="list-group todo-list">
      { elements }
    </ul>
  );
};

export default TodoList;
