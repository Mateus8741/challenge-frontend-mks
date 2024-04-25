import { useStoreApi } from '@/api/storeApi'
import { renderHook, waitFor } from '@testing-library/react'
import { wrapper } from './mocks/tankStackProvier'

describe('Hook: getProducts', () => {
  it('should return an array of products', async () => {
    const { result } = renderHook(() => useStoreApi(), { wrapper })

    expect(result.current.isLoading).toBe(true)

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true)
    })
  })
})
