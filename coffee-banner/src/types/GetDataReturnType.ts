import { Coffee } from "./Coffee";

export type GetDataReturnType = {
  data: Array<Coffee> | null;
  loading: boolean;
  error: string | null;
};
