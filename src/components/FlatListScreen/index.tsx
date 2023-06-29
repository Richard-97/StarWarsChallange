import React from 'react';
import styled from 'styled-components/native';
import { FlatList, ListRenderItem, RefreshControl, TouchableOpacity } from 'react-native';
import { Box } from 'src/components/Box';
import { Text } from 'src/components/Text';
import { Spinner } from 'src/components/Spinner';
import { FLAT_LIST_END_REACHED_THRESHOLD } from 'src/constants/common';
import { COLORS, SPACE } from 'src/theme';

const BOTTOM_PADDING = 8;

const Container = styled.SafeAreaView`
  height: 100%;
  background-color: ${COLORS.WHITE};
`;

const DataLoadSpinner = () => (
  <Box alignItems="center">
    <Spinner />
  </Box>
);

interface Props<T> {
  isLoading: boolean;
  canFetchMore: boolean;
  data?: T[];
  keyExtractor?: (item: T) => string;
  itemRenderer: ListRenderItem<T>;
  onEndReached: () => Promise<void>;
  refetch: () => void;
  noDataLabel: string;
}

export const FlatListScreen = <T extends Record<string, any>>({
  noDataLabel,
  isLoading,
  canFetchMore,
  data,
  keyExtractor = ({ id }) => id as string,
  itemRenderer,
  onEndReached,
  refetch,
}: Props<T>) => {
  return (
    <Box>
      <Container>
        {isLoading && !data ? (
          <DataLoadSpinner />
        ) : (
          <FlatList
            overScrollMode="never"
            ListEmptyComponent={
              isLoading ? (
                <DataLoadSpinner />
              ) : (
                <>
                  <Box as={TouchableOpacity} alignItems="center" onPress={() => refetch()}>
                    <Text>Refetching...</Text>
                  </Box>
                  <Text mb={SPACE.M} fontSize="M" textAlign="center">
                    {noDataLabel}
                  </Text>
                </>
              )
            }
            data={data}
            keyExtractor={keyExtractor}
            renderItem={itemRenderer}
            showsVerticalScrollIndicator={false}
            onEndReachedThreshold={FLAT_LIST_END_REACHED_THRESHOLD}
            onEndReached={async () => {
              if (canFetchMore) {
                await onEndReached();
              }
            }}
            {...(isLoading && canFetchMore && { ListFooterComponent: <DataLoadSpinner /> })}
            contentContainerStyle={{ paddingBottom: BOTTOM_PADDING }}
            refreshControl={
              <RefreshControl refreshing={isLoading} onRefresh={refetch} tintColor={COLORS.BLACK} />
            }
          />
        )}
      </Container>
    </Box>
  );
};
