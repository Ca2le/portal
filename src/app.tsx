
import { useSelector } from 'react-redux'
import Router from './routes/browser_router.component'
import './style/global.styles.css'
import { RootState } from './store/configureStore'
import Login from './components/login/login.component'
function App() {
  const userIsAuth = useSelector((state: RootState) => state.auth.isAuth)

  if (userIsAuth) {
    console.log(userIsAuth)
    return (
      <div style={{ height: '100vh', width: '100%', backgroundColor: '#F7F7F9', display: 'flex' }}>
        <Router />
      </div>
    )
  } else {
    return (
      <Login />
    )
  }
}
export default App
