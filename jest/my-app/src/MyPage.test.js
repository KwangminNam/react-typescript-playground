import { render, screen } from '@testing-library/react';
import MyPage from './MyPage';


test("제목이 있는지 체크",()=>{
  render(<MyPage/>)
  const input = screen.getByRole('textbox',{
    name:'내용'
  });
  const div = screen.getByTestId('mydiv')
  expect(input).toBeInTheDocument();
  expect(div).toBeInTheDocument()
})