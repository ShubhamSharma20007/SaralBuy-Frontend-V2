import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../slices/category.slice";
export const useCategory = () => {
  const dispatch = useDispatch();
  return  ()=>dispatch(fetchCategories())
};

export const useCategoryState = () => {
  return useSelector((state) => state.category);
};
