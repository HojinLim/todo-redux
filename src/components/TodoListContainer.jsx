import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteTodo,
  getInProgressTodos,
  get_done_Todo,
  get_ing_Todo,
} from "../redux/modules/todos";
import styled from "styled-components";

const TodoListContainer = () => {
  //**컴포넌트에서 스토어를 조회할 때**
  //**`react-redux`에서 제공하는 `useSelector` 라는 훅을 사용**
  
  const { todos } = useSelector((state) => state.todos);
  // const todos = useSelector((state) => get_ing_Todo(state));
  // // const todos2 = useSelector((state) => get_done_Todo(state));
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <>
      <div>
        <h3>TODO 영역🌞</h3>
        <div>
          <h4>진행중인 TODO</h4>
          <StTodos>
            {todos.map((todo) => (
              <StTodo key={todo.id}>
                <StTitle>{todo.title}</StTitle>
                <StContents>{todo.contents}</StContents>
                <StIsDone>{todo.isDone.toString()}</StIsDone>
                <StButton>완료</StButton>
                <StButton onClick={() => handleDelete(todo.id)}>삭제</StButton>
              </StTodo>
            ))}
          </StTodos>
        </div>
        <div>
          <h4>완료된 TODO</h4>
        </div>
      </div>
    </>
  );
};

export default TodoListContainer;

const StTodos = styled.div`
  display: flex;

  gap: 12px;
  flex-wrap: wrap;
`;
const StTodo = styled.div`
  border: 1px solid #ddd;
  flex-direction: column;
  width: 20%;
  height: 250px;
  display: flex;
  align-items: center;
  padding: 0 24px;
  border-radius: 12px;
`;
const StTitle = styled.h3``;

const StContents = styled.p`
  align-items: center;
  gap: 12px;
`;
const StIsDone = styled.p`
  align-items: center;
  gap: 12px;
`;

const StButton = styled.button`
  align-items: center;
  gap: 12px;
`;
