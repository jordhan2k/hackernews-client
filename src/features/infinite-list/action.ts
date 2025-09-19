"use server";

import { envConfig } from "@/config";
import type { IGetIdBatch } from "@/types/item.type";

type FetchNewDataParams = {
  // prevCursor: number | null;
  start: number | null;
  size?: number;
  endpoint: string;
};

export const fetchNewData = async ({
  size = 20,
  start,
  endpoint,
}: FetchNewDataParams): Promise<IGetIdBatch> => {
  "use server";
  const response = await fetch(
    endpoint,
    // `https://hacker-news.firebaseio.com/v0/newstories.json`
  );

  if (!response.ok) {
    throw new Error("Data fetch issue");
  }
  const idList: number[] = await response.json();

  let firstIndex = 0;
  if (!!start) {
    firstIndex = idList.findIndex((id) => id === start);
  }
  if (firstIndex === -1) {
    return {
      data: [],
      next: null,
    };
  }

  const fetchDetailPromises = idList
    .slice(firstIndex, firstIndex + size)
    .map((id) => {
      return fetch(`${envConfig.API_ENDPOINT}/item/${id}.json`).then((res) =>
        res.json(),
      );
    });

  const detailList = (await Promise.all(fetchDetailPromises)) ?? [];

  return {
    data: detailList,
    next: idList?.[firstIndex + size] ?? null,
  };
};
