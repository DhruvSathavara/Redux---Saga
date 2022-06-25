import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { getUesrsFetch } from './actions'

function App() {
  const dispatch = useDispatch()

  // USE SELECTOR jode apna State(ahiya apnu state 'users=[]' che) no current data store hoy che
  const users = useSelector(state => state.firstReducers.users)

  console.log(users, 'userss')

  return (
    <>
      <div className='app'>
        <button onClick={() => dispatch(getUesrsFetch())}>Get users</button>
        User:{users.map((user) => (<div>{user.name}</div>))}
      </div>

      {/* {
       users.map((data) => {
        // <div>{data}</div>
        {console.log(data)}
       })
      } */}
    </>
  )
}

export default App;