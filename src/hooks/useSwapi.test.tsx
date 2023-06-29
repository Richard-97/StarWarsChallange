import React, { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react-native';
import { useSwapiPeople, useSwapiPlanets, useSwapiStarShips } from './useSwappi';
import { act } from 'react-test-renderer';

const queryClient = new QueryClient();

interface IWrapper {
  children: ReactNode;
}

const wrapper = ({ children }: IWrapper) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe('useSwapi', () => {
  it('useSwapiPeople', async () => {
    const { result, rerender } = renderHook(() => useSwapiPeople(), { wrapper });

    const hook = result.current;

    if (!hook) {
      throw new Error("useSwapiPeople didn't render");
    }

    const { data } = hook;

    expect(hook.isLoading).toBe(true);

    await act(() => {
      rerender({});

      waitFor(() => {
        expect(hook?.isLoading).toBe(false);
        expect(hook?.isSuccess).toBe(true);
        expect(data?.pages[0]?.results[0].name).toBeDefined();
        expect(data?.pageParams).toBeDefined();
        expect(data?.pages).toHaveProperty('length');
      });
    });
  });

  it('useSwapiPlanets', async () => {
    const { result, rerender } = renderHook(() => useSwapiPlanets(), { wrapper });

    const hook = result.current;

    if (!hook) {
      throw new Error("useSwapiPlanets didn't render");
    }

    const { data } = hook;

    expect(hook.isLoading).toBe(true);

    await act(() => {
      rerender({});

      waitFor(() => {
        expect(hook?.isLoading).toBe(false);
        expect(hook?.isSuccess).toBe(true);
        expect(data?.pages[0]?.results[0].name).toBeDefined();
        expect(data?.pageParams).toBeDefined();
        expect(data?.pages).toHaveProperty('length');
      });
    });
  });

  it('useSwapiStarShips', async () => {
    const { result, rerender } = renderHook(() => useSwapiStarShips(), { wrapper });

    const hook = result.current;

    if (!hook) {
      throw new Error("useSwapiStarShips didn't render");
    }

    const { data } = hook;

    expect(hook.isLoading).toBe(true);

    await act(() => {
      rerender({});

      waitFor(() => {
        expect(hook?.isLoading).toBe(false);
        expect(hook?.isSuccess).toBe(true);
        expect(data?.pages[0]?.results[0].name).toBeDefined();
        expect(data?.pageParams).toBeDefined();
        expect(data?.pages).toHaveProperty('length');
      });
    });
  });
});
