// TodoList.test.js

import { render, screen } from '@testing-library/react';
import TodoList from './TodoList';
import { server } from './mocks/server';
import { rest } from 'msw'

describe('TodoList', () => {
  it('renders title "Todo"', () => {
    render(<TodoList />);
    const titleEl = screen.getByText('Todo');
    expect(titleEl).toBeInTheDocument();
  });
  test('리스트 잘 나옴', async () => {
    render(<TodoList />)
    const list = await screen.findAllByRole("listitem");
    expect(list).toHaveLength(3)
  })
  test('에러시 에러 표시', async() => {
    server.use(
      rest.get('https://jsonplaceholder.typicode.com/todos', (req, res, ctx) => {
        return res(
          ctx.status(500),
        )
      })
    );
    render(<TodoList/>)
    const error = await screen.findByText("에러 발생..");
    expect(error).toBeInTheDocument()
  })
});
