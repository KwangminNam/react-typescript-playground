import { render, screen } from "@testing-library/react";
import Login from "./Login";
import userEvent from '@testing-library/user-event';
import { act} from 'react-dom/test-utils';

describe('Check Login test', () => {
  test("처음에는 로그인 버튼이 있다", () => {
    render(<Login/>);
    const btnEl = screen.getByRole('button');
    expect(btnEl).toHaveTextContent('login')
  })
});

// const user = userEvent.setup();
// test("한번 클릭하면 로그아웃 버튼이 된다", async () => {
//   render(<Login/>);
//   const btnEl = screen.getByRole('button');
//   await user.click(btnEl);
//   expect(btnEl).toHaveTextContent("logout");
// })

// test("tab space enter", async () => {
//   render(<Login/>);
//   const btnEl = screen.getByRole('button');
//   await user.click(btnEl);
//   expect(btnEl).toHaveTextContent("로그아웃");
// })