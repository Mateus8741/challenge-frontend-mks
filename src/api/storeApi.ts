import { useQuery } from '@tanstack/react-query'
import { getProducts } from './apiConfig'

export function useStoreApi() {
  const { data, isLoading, error, isSuccess } = useQuery({
    queryKey: ['store'],
    queryFn: async () => getProducts(),
  })

  return { data, isLoading, error, isSuccess }
}
