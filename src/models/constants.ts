export interface SearchOption {
  readonly label: string;
  readonly value: string;
}

export const types: SearchOption[] = [
  { label: "イラスト・マンガ・うごくイラスト", value: "" },
  { label: "イラスト", value: "illust" },
  { label: "マンガ", value: "manga" },
  { label: "うごくイラスト", value: "ugoira" }
];

// prettier-ignore
export const modes: SearchOption[] = [
  { label: "タグ", value: "" },
  { label: "タグ (完全一致)", value: "s_tag_full" },
  { label: "タイトル・キャプション", value: "s_tc" }
];

export const orders: SearchOption[] = [
  { label: "新しい順", value: "date_d" },
  { label: "古い順", value: "date" },
  { label: "全体の人気順", value: "popular_d" },
  { label: "男子の人気順", value: "popular_male_d" },
  { label: "女子の人気順", value: "popular_female_d" }
];

// prettier-ignore
export const ratios: SearchOption[] = [
  { label: "すべての縦横比", value: "" },
  { label: "横長", value: "0.5" },
  { label: "縦長", value: "-0.5" },
  { label: "正方形", value: "0" }
];
