import { useQuery } from "react-query"

export const useGetCityMeteo = (
  city,
  params,
  enabled = false
) => {
  const { data, isLoading: loading, error, refetch, isSuccess } = useQuery(
    ["data", ...params, { useErrorBoundary: true }],
    () =>
      fetch(`https://weather-api.mathisbarre.com/${city}`).then((response) => {
        if (response.ok) {
          return response.json()
        } else throw new Error("Something went wrong")
      })
  )

  return {
    current: data?.currentConditions,
    nextFiveDays: data?.next5DaysConditions,
    loading,
    error,
    refetch,
    isSuccess,
  }
}
