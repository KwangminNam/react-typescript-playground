export default function Hello({user}){
  return (
    <div>
      {user.name ? <div>Hello {user.name}</div> : <button>Login</button>}
    </div>
  )
}