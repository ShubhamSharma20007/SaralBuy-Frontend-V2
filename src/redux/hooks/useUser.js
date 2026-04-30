import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../slices/user.slice";

export const useDispatchUser = () => {
  const dispatch = useDispatch();
  return () => dispatch(fetchUser());
};


export const useUserState =()=>{
    const user = useSelector((state)=>state.user)
    return user
}