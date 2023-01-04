import { createContext, useContext } from "react";

export const DataContext = createContext();
export const DataAction = createContext();

export const useDataContext = () => {
  return useContext(DataContext);
};
export const useDataAction = () => {
  return useContext(DataAction);
};
