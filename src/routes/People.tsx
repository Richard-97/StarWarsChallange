import React from 'react';
import { useAppState } from 'src/hooks/useAppState';
import { useSwapiPeople } from 'src/hooks/useSwappi';
import { HumanCard } from 'src/components/HumanCard';
import { FlatListScreen } from 'src/components/FlatListScreen';

export const People = () => {
  const { data, isLoading, refetch, fetchNextPage, hasNextPage } = useSwapiPeople();

  useAppState({
    onActive: () => {
      refetch();
    },
  });

  return (
    <FlatListScreen
      isLoading={isLoading}
      noDataLabel="No people found"
      data={data?.pages.map((page) => page.results).flat()}
      keyExtractor={({ name }) => name as string}
      // eslint-disable-next-line react/no-unstable-nested-components
      itemRenderer={({ item: { name, ...props } }) => (
        <HumanCard key={name} name={name} {...props} />
      )}
      refetch={refetch}
      canFetchMore={Boolean(hasNextPage)}
      onEndReached={async () => {
        await fetchNextPage();
      }}
    />
  );
};
