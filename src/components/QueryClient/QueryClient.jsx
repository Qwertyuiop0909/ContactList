import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

function QueryClientProv({ children }) {
  return (
    <QueryClientProvider client={client}>
      {children}
    </QueryClientProvider>
  )
}
export default QueryClientProv
