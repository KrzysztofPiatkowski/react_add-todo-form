import React from 'react';
import { Todo } from '../../api/types';
import { TodoInfo } from '../TodoInfo';
import usersFromServer from '../../api/users';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <div className="TodoList">
      {todos.map(todo => {
        const user = usersFromServer.find(u => u.id === todo.userId);

        if (!user) {
          throw new Error(`User with ID ${todo.userId} not found`);
        }

        return <TodoInfo key={todo.id} todo={todo} user={user} />;
      })}
    </div>
  );
};
