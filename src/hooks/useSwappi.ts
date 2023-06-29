import { useInfiniteQuery } from '@tanstack/react-query';
import { SwapiHuman, SwapiPlanet, SwapiStarShip } from 'src/interfaces/swapi';

const SWAPI_URL = 'https://swapi.dev/api';

type SwapiType = 'planets' | 'people' | 'starships';

interface SwapiData {
  count: number;
  next: string | null;
  previous: string | null;
}

export interface SwapiPeopleData extends SwapiData {
  results: SwapiHuman[];
}

export interface SwapiPlanetsData extends SwapiData {
  results: SwapiPlanet[];
}

export interface SwapiStarShipsData extends SwapiData {
  results: SwapiStarShip[];
}

interface SwapiFetchParams {
  pageParam: string | null;
  type: SwapiType;
}

const fetchSwapiByType = async ({ pageParam = null, type }: SwapiFetchParams) => {
  const response = await fetch(pageParam || `${SWAPI_URL}/${type}`);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};

export const useSwapiPeople = () => {
  const useQuery = useInfiniteQuery<SwapiPeopleData>({
    queryKey: ['people'],
    getNextPageParam: (lastPage) => {
      return lastPage.next;
    },
    queryFn: ({ pageParam }) => fetchSwapiByType({ pageParam, type: 'people' }),
  });

  return useQuery;
};

export const useSwapiPlanets = () => {
  const useQuery = useInfiniteQuery<SwapiPlanetsData>({
    queryKey: ['planets'],
    getNextPageParam: (lastPage) => {
      return lastPage.next;
    },
    queryFn: ({ pageParam }) => fetchSwapiByType({ pageParam, type: 'planets' }),
  });

  return useQuery;
};

export const useSwapiStarShips = () => {
  const useQuery = useInfiniteQuery<SwapiStarShipsData>({
    queryKey: ['starships'],
    getNextPageParam: (lastPage) => {
      return lastPage.next;
    },
    queryFn: ({ pageParam }) => fetchSwapiByType({ pageParam, type: 'starships' }),
  });

  return useQuery;
};
