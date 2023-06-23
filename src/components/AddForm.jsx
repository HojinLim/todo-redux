import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/modules/todos";
import styled from "styled-components";
import uuid from "react-uuid";


const AddForm = () => {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (title === "" || contents==="") return; // 아무것도 입력하지 않았을 때 dispatch 하지 않음

    dispatch(
      addTodo({
        id: uuid(),
        title,
        contents,
        isDone: false
      })
    );
    

    // 빈 값으로 초기화
    setTitle("");
    setContents("");
  };

  return (
    <StFormContainer>
      <form onSubmit={onSubmitHandler}>
        <label>Todo를 입력하세요</label>
        <StTitleInput
          type="text"
          value={title}
          placeholder="제목"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <StContentsInput
          type="text"
          placeholder="내용"
          value={contents}
          onChange={(e) => {
            setContents(e.target.value);
          }}
        />

        <StButton>추가하기</StButton>
      </form>
    </StFormContainer>
  );
};

export default AddForm;

const StFormContainer = styled.div`
  display: flex;
  gap: 24px;
  padding: 30px;
`;

const StButton = styled.button`
  border: none;
  background-color: #eee;
  height: 25px;
  cursor: pointer;
  width: 120px;
  border-radius: 12px;
`;

const StTitleInput = styled.input`
  border: 1px solid #eee;
  margin: 0 24px;
  height: 25px;
  width: 300px;
  border-radius: 12px;
  outline: none;
  padding: 0 10px;
`;

const StContentsInput = styled.input`
  border: 1px solid #eee;
  margin: 0 24px;
  height: 25px;
  width: 300px;
  border-radius: 12px;
  outline: none;
  padding: 0 10px;
`;
