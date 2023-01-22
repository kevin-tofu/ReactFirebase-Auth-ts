import { useEffect } from 'react'
// import { Navigate } from 'react-router-dom'
import { redirect } from "react-router-dom";
import { useAuth } from '../context/AuthContext'
interface Props {
  // children: string | JSX.Element | JSX.Element[] | () => JSX.Element
  children: string | JSX.Element | JSX.Element[]
}

// function PrivateRoute({ children: React.ReactNode }) {
function PrivateRoute({ children } : Props){  
  const { currentUser } = useAuth()
  // const history = useNavigate()

  
  useEffect(() => {
    if (currentUser) {
    } else {
      redirect('/login');
    }
  });

  return (
    <div>
      { currentUser ? children : <></> }
    </div>
  );
  // return currentUser ? children : <Redirect to='/login' />;
  


}
export default PrivateRoute;