import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
function Protected({ children, next }){
    const { token } = useSelector(store => store.user);
  if (!token) {
    return <Navigate to={{
      pathname : '/login',
      search : '?next='+next
    }} replace />;
  }
//   if((next === 'admin' || next === 'AllProfiles' || next === 'AddProfiles') && localStorage.getItem('role') !== 'admin'){
//     toast.error('You are not logged in as admin', {
//       duration : 2000
//     });
//     return <Navigate to={`/faculty`} replace/>
//   }
  return children;
};
export default Protected;