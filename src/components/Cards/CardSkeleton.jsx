
const CardSkeleton = ({ span = 4 }) => {
  return (
    <>
    {
        Array.from({ length: span }).map((_, i) => (
          <div className="card bordered rounded-none animate-pulse" key={i}>
            <div className="p-8 md:w-full">
              <div className="bg-gray-500 rounded h-48"></div>
            </div>
            <div className="card-body">
              <div className="space-y-2">
                <div className="h-4 bg-gray-500 rounded"></div>
                <div className="h-4 bg-gray-500 rounded"></div>
                <div className="h-4 bg-gray-500 rounded w-5/6"></div>
                <div className="h-4 bg-gray-500 rounded w-1/4"></div>
              </div>
            </div>
          </div>

        ))
    }
    </>
  )
}

export default CardSkeleton