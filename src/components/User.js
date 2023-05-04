const User = ({ name, username, email }) => {
  return (
    <div className='bg-cyan-100 border-2 border-black rounded-lg p-5 m-3'>
      <h2>Name: {name}</h2>
      <h3>User: {username}</h3>
      <h4>Email: {email}</h4>
    </div>
  )
}

export default User
