export function SkeletonLoading() {
  return (
    <div
      className="animate-pulse w-[20rem] h-[285] bg-white rounded-lg shadow-xl"
      id="skeleton-loading"
    >
      <div className=" flex flex-col p-5">
        <div className="rounded-lg h-48 bg-bg-price" />

        <div className="flex flex-row mt-5 items-center justify-between">
          <div className="h-4 bg-bg-price w-1/2" />
          <div className="h-4 bg-bg-price w-1/4" />
        </div>

        <div className="bg-bg-price h-4 mt-2" />
      </div>

      <div className="bg-bg-price h-10 rounded-b-lg" />
    </div>
  )
}
