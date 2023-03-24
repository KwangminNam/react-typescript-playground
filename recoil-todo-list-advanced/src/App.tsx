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
  grid-template-columns: repeat(1, 1fr);
  width: 100%;
`;

const Board = styled.div`
  padding: 20px 10px;
  padding-top: 30px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 10px;
  min-height: 200px;
`;


function App() {
  const onDragEnd = ({ draggableId, destination, source }: DropResult) => {

    if(!destination) return;

    setToDo((oldTodos) => {
      const copyTodos = [...oldTodos];

      copyTodos.splice(source.index , 1);
      copyTodos.splice(destination?.index , 0 , draggableId);

      return copyTodos;
    });
  };
  const [todo, setToDo] = useRecoilState(todoSate);

  return (
    <Wrapper>
      <DragDropContext onDragEnd={onDragEnd}>
        <Boards>
          <Droppable droppableId="one">
            {(provided) => (
              <Board ref={provided.innerRef} {...provided.droppableProps}>
                {todo.map((item, idx) => (
                  <DraggableCard
                    idx={idx}
                    item={item}
                    key={idx}
                  />
                ))}
                {provided.placeholder}
              </Board>
            )}
          </Droppable>
        </Boards>
      </DragDropContext>
    </Wrapper>
  );
}

export default App;
