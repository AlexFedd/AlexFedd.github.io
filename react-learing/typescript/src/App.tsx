import { useEffect } from 'react'
import './App.css'
import { useAppDispatch, useAppSelector } from './hooks/redux'
import { fetchUsers } from './store/reducers/ActionCreators'

function App() {
  const dispatch = useAppDispatch()
  const {users, isLoading, error} = useAppSelector(state => state.userReducer)
  useEffect(() => {
    dispatch(fetchUsers())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ ])
  return (<div>
    <p>{JSON.stringify(users)}</p>
    <p>{JSON.stringify(error)}</p> 
    <p>{JSON.stringify(isLoading)}</p>
  </div>  )
}

export default App
