import {render , screen} from '@testing-library/react';
import Hello from './Hello';


const user ={
  name:'kwangmin',
  age:30
}


const user2 ={
  age:30
}

test('snapshout',()=>{
  const el = render(<Hello user={user}/>);
  expect(el).toMatchSnapshot();
})

test('snapshout',()=>{
  const el = render(<Hello user={user2}/>);
  expect(el).toMatchSnapshot();
})

test("Hello check",()=>{
  render(<Hello user={user}/>)
  const helloEl = screen.getByText(/Hello/i);
  expect(helloEl).toMatchSnapShot();
})