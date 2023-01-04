import { createContext, useContext } from "react";

export const StepContext = createContext();
export const StepAction = createContext();

export const useStepContext = () => {
  return useContext(StepContext);
};
export const useStepAction = () => {
  return useContext(StepAction);
};
