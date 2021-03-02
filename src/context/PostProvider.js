import React from 'react';
import {fetchCategories} from '../actions/category';
import {useDispatch, useSelector} from 'react-redux';

export const PostContext = React.createContext({
  data: {},
  setData: () => {},
  setDataItem: () => {},
  categories: [],
});

const PostProvider = ({children}) => {
  const [data, setData] = React.useState({
    budget_type: 'negotiable',
    people: 1,
    location: 'USA',
  });
  const [categories, setCategories] = React.useState([]);

  const {categoryList} = useSelector(state => state.category);

  const dispatch = useDispatch();

  React.useEffect(() => {
    setCategories(categoryList);
  }, [categoryList]);

  React.useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const setDataItem = (name, value) => {
    setData({
      ...data,
      [name]: value,
    });
  };
  const value = React.useMemo(
    () => ({data, setData, setDataItem, categories}),
    [data, categories, categoryList],
  );
  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};

export default PostProvider;
