export interface ISearchQuery {
  keyword: IKeywordQuery; // as word
}

export interface IKeywordQuery {
  ands: string;
  ors: string;
  nots: string;
}
