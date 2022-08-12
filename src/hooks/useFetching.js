import React from "react"

export const useFetching = (callback) => {
  
  const [isLoading, setIsLoading] = React.useState(true)
  const [error, setError] = React.useState('')
  
  const fetching = async () => {
    try {
      setIsLoading(true)
      await callback()
    } catch(e) {
      setError(e)
    } finally {
      setIsLoading(false)
    }
  }

  return [fetching, isLoading, error]
}