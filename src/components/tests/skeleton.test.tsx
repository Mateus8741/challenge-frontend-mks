import { useStoreApi } from '@/api/storeApi'
import Home from '@/app/page'
import { render, renderHook } from '@testing-library/react'
import { wrapper } from '../../../__tests__/mocks/tankStack'

describe('Component: Skeleton', () => {
  it('should render Skeleton component', () => {
    const { result } = renderHook(() => useStoreApi(), { wrapper })

    const { isLoading } = result.current

    const { container } = render(<Home />, { wrapper })

    expect(isLoading).toBe(true)

    expect(container).toBeInTheDocument()
  })
})
