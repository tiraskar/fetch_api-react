const Todos = ({ id, title, completed }) => {
  return (
    <div className='bg-cyan-100 border-2 border-black rounded-lg p-5 m-3'>
      <h2>Status Id: {id}</h2>
      <h2>Title: {title}</h2>
      <h2>Status: {completed}</h2>
    </div>
  )
}

export default Todos
