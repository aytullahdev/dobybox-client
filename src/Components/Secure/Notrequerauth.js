import {  useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import { useAuthState} from 'react-firebase-hooks/auth';
const Notrequerauth = ({children}) => {
    const {user,loading}=useAuthState(auth);
    const navigate= useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
   if(!loading){
       if(user){
            return navigate(from,{replace:true});
       }
       return children;
   }
};

export default Notrequerauth;