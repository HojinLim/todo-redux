import uuid from "react-uuid";
// 모듈= state의 그룹

// Action value
const ADD_TODO = "ADD_TODO";

const DELETE_TODO = "DELETE_TODO";
// const ING_TODO = "ING_TODO";
// const DONE_TODO = "DONE_TODO";

// Action Creator
// payload : “N을 더해”
export const addTodo = (payload) => {
  return { type: ADD_TODO, payload };
};

export const deleteTodo = (id) => {
  return { type: DELETE_TODO, id };
};

// 진행 중인 Todo를 가져오는 함수

// export const get_ing_Todo = (state) => {
//   return { type: ING_TODO, state };
// };

// // 완료된 Todo를 가져오는 함수
// export const get_done_Todo = (state) => {
//   return { type: DONE_TODO, state };
// };

// initial State

const initialState = {
  todos: [
    {
      id: uuid(),
      title: "react를 배워봅시다! 얼쑤",
      contents: "30분",
      isDone: false,
    },
    {
      id: uuid(),
      title: "redux를 배워봅시다. 절쑤",
      contents: "20분",
      isDone: true,
    },
    {
      id: uuid(),
      title: "낮잠",
      contents: "스윗~ 드림",
      isDone: false,
    },
  ],
};

// Reducer  === 변화를 일으키는 함수  
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    // case ING_TODO:
    //   return {
    //     ...state,
        
    //     todos: state.todos.filter((todo) => !todo.isDone),
    //   };
    // case DONE_TODO:
    //   return {
    //     ...state,
    //     todos: state.todos.filter((todo) => todo.isDone),
    //   };
    default:
      return state;
  }
};

export default todos;
