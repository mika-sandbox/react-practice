import React, { useState } from "react";

import { ISearchQuery, IKeywordQuery } from "../models/query";
import Keywords from "../presentationals/Keywords";

const initialState: ISearchQuery = {
  keyword: { ands: "", ors: "", nots: "" },
};

const Form = () => {
  const [state, setState] = useState(initialState);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {};
  const onKeywordChanged = (keyword: IKeywordQuery) => {
    setState({ ...state, ...{ keyword } });
  };

  return (
    <form onSubmit={onSubmit}>
      <Keywords keyword={state.keyword} onChanged={onKeywordChanged} />
      <Keywords keyword={state.keyword} onChange={onKeywordChanged} />

      <button className="btn btn-primary" type="submit">
        検索する
      </button>
    </form>
  );
};

export default Form;
