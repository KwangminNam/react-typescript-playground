
import {render} from '@testing-library/react'
import Timer from "./Timer"

test('초 표시',()=> {
  Date.now = jest.fn(()=> 1234565)
  const el = render(<Timer/>)
  expect(el).toMatchSnapshot();
})