import { envConfig } from "@/config";
import { IItem } from "@/types/item.type";

type FetchItemDetailParams = {
  id: number;
};
export const fetchItemDetail = async ({
  id,
}: FetchItemDetailParams): Promise<IItem> => {
  const res = await fetch(`${envConfig.API_ENDPOINT}/item/${id}.json`);
  if (!res.ok) {
    throw new Error("Failed to fetch item detail");
  }
  const result: IItem = await res.json();
  return result;
};
