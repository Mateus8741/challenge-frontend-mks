import { useQuery } from '@tanstack/react-query'
import { getProducts } from './apiConfig'

export function useStoreApi() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['store'],
    queryFn: async () => getProducts(),
    maxPages: 1,
  })

  return { data, isLoading, error }
}
// ?page=1&rows=10&sortBy=id&orderBy=DESC
