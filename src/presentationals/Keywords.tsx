import React from "react";
import { IKeywordQuery } from "../models/query";

interface IState {
  keyword: IKeywordQuery;
  onChange?: (event: IKeywordQuery) => void;
}

const Keywords = ({ keyword, onChange }: IState) => {
  const onValueChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange({ ...keyword, ...{ [e.target.name]: e.target.value } });
    }
  };

  return (
    <fieldset>
      <legend>キーワード</legend>
      <div className="form-group">
        <label htmlFor="ands">キーワードを全て含む</label>
        <input type="text" className="form-control" id="ands" name="ands" value={keyword.ands} onChange={onValueChanged} placeholder="キーワードを追加する" />
      </div>
      <div className="form-group">
        <label htmlFor="ors">キーワードのいずれかを含む</label>
        <input type="text" className="form-control" id="ors" name="ors" value={keyword.ors} onChange={onValueChanged} placeholder="キーワードを追加する" />
      </div>
      <div className="form-group">
        <label htmlFor="nots">キーワードを含まない</label>
        <input type="text" className="form-control" id="nots" name="nots" value={keyword.nots} onChange={onValueChanged} placeholder="キーワードを追加する" />
      </div>
    </fieldset>
  );
};

export default Keywords;
