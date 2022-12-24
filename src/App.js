import { DeleteIcon } from '@chakra-ui/icons';

import {
  Button,
  Heading,
  HStack,
  IconButton,
  Input,
  Spacer,
  VStack,
  useToast,
  Card,
} from '@chakra-ui/react';
import { nanoid } from 'nanoid';
import axios from 'axios';

import { useState, useEffect } from 'react';

function App() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();

    const newTodoObj = {
      id: nanoid(),
      task: task,
    };

    setTodos((prev) => [...prev, newTodoObj]);
    setTask('');
  };

  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <VStack>
      <Heading>Todo</Heading>
      <Spacer />

      <form onSubmit={(e) => addTodo(e)}>
        <HStack>
          <Input
            placeholder='enter todo'
            onChange={(e) => setTask(e.target.value)}
            value={task}
          />
          <Button type='submit'>Add</Button>
        </HStack>
      </form>
      <VStack width='20vw'>
        {/* {todos.map(({ task, id }) => (
          <IndividualTodo task={task} key={id} />
        ))} */}

        {todos.map((todo) => (
          <Card direction='column' width='full' px='4' py='2' key={todo.id}>
            <HStack justify='space-between' width='full'>
              <span>{todo.task}</span>
              <IconButton
                icon={<DeleteIcon />}
                isRound={true}
                colorScheme='red'
                onClick={() => handleDelete(todo.id)}
              />
            </HStack>
          </Card>
        ))}
      </VStack>
    </VStack>
  );
}

export default App;
