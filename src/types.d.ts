export type Order = {
  label: string;
  valueToOrderBy: string;
};

export type Movie = {
  id: number;
  type: string;
  rank: number;
  synopsis: string;
  title: string;
  imageUrl: string;
  releaseDate: number;
};

export type Components = {
  type: string;
  items: Order[] | Movie[];
};
