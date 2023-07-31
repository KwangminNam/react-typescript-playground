import { rest } from 'msw'

export const handlers = [
  // Match a GET request to a third-party server.
  rest.get('https://jsonplaceholder.typicode.com/todos', (req, res, ctx) => {
    return res(
    ctx.status(500),
    ctx.json([
      {
        id:1,
        title:'청',
        completed:true,
      },
      {
        id:2,
        title:'설거지',
        completed:true,
      },
      {
        id:3,
        title:'숙제',
        completed:true,
      },
    ])
    )
  })

  // Match a POST request issued against the same origin
  // as the current application.
]