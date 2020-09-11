import React, { useReducer } from "react";
//context
import CharacterContext from "./CharacterContext";
//reducer
import CharacterReducer from "./CharacterReducer";
import { CHARACTERS, PARAMETERS, ACTUAL_PAGES, PAGES } from "./types";

const CharacterState = (props) => {
  const initialState = {
    characters: [],
    parameters: "",
    pages: 0,
    actualPage: 1,
  };

  //   const [characters, setCharacters] = useState([]);
  //   const [parameters, setParameters] = useState("");
  //   const [pages, setPages] = useState(0);
  //   const [actualPage, setActualPage] = useState(1);

  const setCharacters = (valor) => {
    dispatch({
      type: CHARACTERS,
      payload: valor,
    });
  };
  const setParameters = (valor) => {
    dispatch({
      type: PARAMETERS,
      payload: valor,
    });
  };
  const setPages = (valor) => {
    dispatch({
      type: PAGES,
      payload: valor,
    });
  };
  const setActualPage = (valor) => {
    dispatch({
      type: ACTUAL_PAGES,
      payload: valor,
    });
  };

  const [state, dispatch] = useReducer(CharacterReducer, initialState);

  return (
    <CharacterContext.Provider
      value={{
        //state
        characters: state.characters,
        parameters: state.parameters,
        pages: state.pages,
        actualPage: state.actualPage,
        setCharacters,
        setParameters,
        setPages,
        setActualPage,
      }}
    >
        {props.children }
    </CharacterContext.Provider>
  );
};

export default CharacterState;
