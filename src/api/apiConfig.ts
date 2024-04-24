'use client'

import axios from 'axios'

const apiConfig = axios.create({
  baseURL: 'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1',
  params: {
    page: 1,
    rows: 8,
    sortBy: 'id',
    orderBy: 'DESC',
  },
})

export function getProducts() {
  return apiConfig.get('/products')
}
