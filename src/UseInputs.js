import { useCallback, useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        [action.name]: action.value
      };
    case "RESET_INPUT":
      return action.initialForm;
    default:
      throw new Error("Unhandled Action");
  }
}

function UseInputs(initialForm) {
  const [state, dispatch] = useReducer(reducer, initialForm);
  const onChange = useCallback(e => {
    const { name, value } = e.target;
    dispatch({
      type: "CHANGE_INPUT",
      name,
      value
    });
  }, []);

  const reset = useCallback(() => {
    dispatch({
      type: "RESET_INPUT",
      initialForm 
    });
  }, [initialForm]);

  return [state, onChange, reset];
}

export default UseInputs;