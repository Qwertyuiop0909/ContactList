import Loader from '../components/Loader/Loader'

const withQuery = (Component) => ({
  isLoading, isError, error, refetch, ...rest
}) => {
  if (isLoading) return <Loader />

  if (isError) {
    return (
      <div>
        <p className="mb-2">{error.message}</p>
        <button
          onClick={refetch}
          type="button"
          className="btn btn-primary "
        >
          Make request again
        </button>
      </div>
    )
  }
  return <Component {...rest} />
}

export default withQuery
