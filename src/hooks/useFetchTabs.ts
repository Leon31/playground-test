import { useEffect, useState, useRef } from 'react'

interface State<T> {
  status: 'init' | 'fetching' | 'error' | 'success'
  data?: T
  error?: string
}

interface Cache<T> {
  [tab: string]: T
}

export default function useFetch<T>(tab?: string,): State<T> {
  const cache = useRef<Cache<T>>({})

  const initialState: State<T> = {
    status: 'init',
    error: undefined,
    data: undefined,
  }

  const [state, setState] = useState(initialState);

  useEffect(() => {
    if (!tab) return
    const fetchData = async () => {
      setState((state: State<T>) => ({ ...state, status: 'fetching' }))
      if (cache.current[tab]) {
        setState((state: State<T>) => ({ ...state, status: 'success', data: cache.current[tab] }))
      } else {
        try {
          const response = await fetch(`/ajax/${tab}.json`)
          const data = await response.json()
          cache.current[tab] = data
          setState((state: State<T>) => ({ ...state, status: 'success', data: data }))
        } catch (error) {
          setState((state: State<T>) => ({ ...state, status: 'error', data: error.message }))
        }
      }
    }
    fetchData()
  }, [tab])

  return state
}