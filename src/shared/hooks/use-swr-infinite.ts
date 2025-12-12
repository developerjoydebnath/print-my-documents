import axios from "@/shared/lib/axios";
import { buildQueryParams } from "@/shared/utils/buildQueryParams";
import useSWRInfiniteFetcher, { SWRInfiniteConfiguration } from "swr/infinite";

type Meta = {
  page: number;
  limit: number;
  totalPages: number;
  total: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
};

export const useSWRInfinite = (
  url: string | null,
  query?: Record<string, any>,
  opts?: SWRInfiniteConfiguration,
) => {
  // Generate SWR key for each page
  const getKey = (pageIndex: number, previousPageData: any) => {
    if (!url) return null;

    // If no more data or invalid previous page, stop fetching
    if (previousPageData && !previousPageData.data?.data?.data?.length) {
      return null;
    }

    const nextCursor = previousPageData?.data?.data?.data.at(-1)?.id || null;

    const params = buildQueryParams({
      ...query,
      cursor: nextCursor,
    });

    return `${url}?${params.toString()}`;
  };

  // Fetch paginated data
  const { data, isLoading, ...rest } = useSWRInfiniteFetcher(
    getKey,
    axios.get,
    {
      shouldRetryOnError: false,
      revalidateOnFocus: false,
      revalidateFirstPage: false,
      ...opts,
    },
  );

  // Flatten items across all fetched pages
  const flatData = data
    ? data.flatMap((page: any) => page?.data?.data?.data || [])
    : [];

  // Get meta info from the last page
  const lastPageMeta: Meta = data?.[data.length - 1]?.data?.data?.meta || {
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 0,
    hasNextPage: false,
    hasPreviousPage: false,
  };

  const markedSeen = data?.[data.length - 1]?.data?.data?.markedSeen || 0;
  const counterPart = data?.[data.length - 1]?.data?.data?.counterPart || 0;

  return {
    data: { messages: flatData, markedSeen, counterPart },
    meta: lastPageMeta,
    isLoading,
    ...rest,
  };
};
