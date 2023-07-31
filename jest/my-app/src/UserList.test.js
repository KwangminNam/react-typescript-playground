import { render, screen } from "@testing-library/react";
import UserList from "./UserList";

describe('Check User List', () => {
  const users = ['km', 'ma', 'tr', 'kn'];
  test("ul이 있다", () => {
    render(<UserList users={users} />)
    const ulEl = screen.getByRole('list');
    expect(ulEl).toBeInTheDocument();

  })
  test("li가 4개가 있다", () => {
    render(<UserList users={[]} />)
    const liEl = screen.queryAllByRole('listitem');
    expect(liEl).toHaveLength(0);
  })

  //findByRole: return Promise
  test("Check heading", async () => {
    render(<UserList users={users}/>)
    const heading = await screen.findByRole('heading',{
      level:1
    },{
      timeout:2000
    });
    expect(heading).toBeInTheDocument();
  })

});
