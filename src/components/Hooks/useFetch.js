import { useState, useEffect, useRef, useCallback } from 'react'

const cache = {}

const useFetch = (link) => {
  const [responseData, setResponseData] = useState()
  const fetchStatus = useRef('loading')
  const fetchData = useCallback(async () => {
    if (link) {
      try {
        if (link in cache) {
          fetchStatus.current = 'success'
          setResponseData(cache[link])
          return
        }

        const response = await fetch(link)
        if (!response.ok) {
          throw new Error(response.statusText)
        }

        const data = await response.json()
        cache[link] = data
        setResponseData(data)

        fetchStatus.current = 'success'
      } catch (error) {
        fetchStatus.current = 'failed'
      }
    }
  }, [link])

  useEffect(() => {
    if (!link) return

    fetchData()

    return () => {
      fetchStatus.current = 'loading'
    }
  }, [link, fetchData])

  return [responseData, fetchStatus]
}

export default useFetch
