import React from 'react';
import { useAppState } from 'src/hooks/useAppState';
import { useSwapiPlanets } from 'src/hooks/useSwappi';
import { FlatListScreen } from 'src/components/FlatListScreen';
import { PlanetCard } from 'src/components/PlanetCard';

export const Planets = () => {
  const { data, isLoading, refetch, fetchNextPage, hasNextPage } = useSwapiPlanets();

  useAppState({
    onActive: () => {
      refetch();
    },
  });

  return (
    <FlatListScreen
      isLoading={isLoading}
      noDataLabel="No planets found"
      data={data?.pages.map((page) => page.results).flat()}
      keyExtractor={({ name }) => name as string}
      // eslint-disable-next-line react/no-unstable-nested-components
      itemRenderer={({ item: { name, ...props } }) => (
        <PlanetCard key={name} name={name} {...props} />
      )}
      refetch={refetch}
      canFetchMore={Boolean(hasNextPage)}
      onEndReached={async () => {
        await fetchNextPage();
      }}
    />
  );
};
