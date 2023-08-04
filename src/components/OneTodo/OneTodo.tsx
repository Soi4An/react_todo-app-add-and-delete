import React from 'react';
import classNames from 'classnames';
import { Todo } from '../../types/Todo';

type Props = {
  todo: Todo;
  loadingTodoId: number[];
  onDeleteTodo: (todoId: number[]) => void,
};

export const OneTodo: React.FC<Props> = ({
  todo, loadingTodoId, onDeleteTodo,
}) => {
  return (
    <div className={classNames(
      'todo', { completed: todo.completed },
    )}
    >
      <label className="todo__status-label">
        <input
          type="checkbox"
          className="todo__status"
        />
      </label>

      <span className="todo__title">{todo.title}</span>
      <button
        type="button"
        className="todo__remove"
        onClick={() => onDeleteTodo([todo.id])}
      >
        ×
      </button>

      <div className={classNames(
        'modal', 'overlay', { 'is-active': loadingTodoId?.includes(todo.id) },
      )}
      >
        <div className="modal-background has-background-white-ter" />
        <div className="loader" />
      </div>
    </div>
  );
};
