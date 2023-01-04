import { useReducer } from "react";
import { StepReducer } from "providers/step/step-reducer";
import { StepContext, StepAction } from "providers/step/step-context";

export const StepProvider = ({ children }) => {
  const initialState = {
    step: 1,
  };

  const [state, dispatch] = useReducer(StepReducer, initialState);

  return (
    <StepContext.Provider value={{ ...state }}>
      <StepAction.Provider value={{ dispatch }}>{children}</StepAction.Provider>
    </StepContext.Provider>
  );
};
