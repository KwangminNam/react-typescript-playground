import React from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult
} from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { todoSate } from "./atom";
import Board from "./components/Board";
import DraggableCard from "./components/DraggableCard";

const Wrapper = styled.div`
  display: flex;
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  gap:10px;
`;




function App() {
  const onDragEnd = ({ draggableId, destination, source }: DropResult) => {

    if(!destination) return;

    // setToDo((oldTodos) => {
    //   const copyTodos = [...oldTodos];

    //   copyTodos.splice(source.index , 1);
    //   copyTodos.splice(destination?.index , 0 , draggableId);

    //   return copyTodos;
    // });
  };
  const [todo, setToDo] = useRecoilState(todoSate);

  return (
    <Wrapper>
      <DragDropContext onDragEnd={onDragEnd}>
        <Boards>
          {Object.keys(todo).map(item => <Board toDo={todo[item]} boardId={item} key={item}/>)}
        </Boards>
      </DragDropContext>
    </Wrapper>
  );
}

export default App;
