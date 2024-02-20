import { createContext, useContext, useState } from "react";

const DataContext = createContext([]);

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [todos, setTodos] = useState([
   
  ]);

  return (
    <DataContext.Provider value={{ todos , setTodos}}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
