export function SkeletonLoading() {
  return (
    <div
      className="animate-pulse w-[20rem] h-[285] bg-white rounded-lg shadow-xl"
      data-testid="skeleton-loading"
    >
      <div className=" flex flex-col p-5">
        <div className="rounded-lg h-48 bg-gray-400" />

        <div className="flex flex-row mt-5 items-center justify-between">
          <div className="h-4 bg-gray-400 w-1/2" />
          <div className="h-4 bg-gray-400 w-1/4" />
        </div>

        <div className="bg-gray-400 h-4 mt-2" />
        <div className="bg-gray-400 h-4 mt-2" />
        <div className="bg-gray-400 h-4 mt-2" />
      </div>

      <div className="bg-gray-400 h-10 rounded-b-lg" />
    </div>
  )
}
