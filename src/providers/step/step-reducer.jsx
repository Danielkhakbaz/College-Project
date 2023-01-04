import { Actions } from "providers/step/step-actions";

export const StepReducer = (state, action) => {
  switch (action.type) {
    case Actions.NEXT_STEP: {
      return {
        ...state,
        step: state.step + 1,
      };
    }
    case Actions.PREV_STEP: {
      return {
        ...state,
        step: state.step - 1,
      };
    }
    default:
      return state;
  }
};
