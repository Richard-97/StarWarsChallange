import React from 'react';
import { useAppState } from 'src/hooks/useAppState';
import { useSwapiStarShips } from 'src/hooks/useSwappi';
import { FlatListScreen } from 'src/components/FlatListScreen';
import { StarShipCard } from 'src/components/StarShipCard';

export const StarShips = () => {
  const { data, isLoading, refetch, fetchNextPage, hasNextPage } = useSwapiStarShips();

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
        <StarShipCard key={name} name={name} {...props} />
      )}
      refetch={refetch}
      canFetchMore={Boolean(hasNextPage)}
      onEndReached={async () => {
        await fetchNextPage();
      }}
    />
  );
};
