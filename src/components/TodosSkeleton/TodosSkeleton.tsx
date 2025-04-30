export default function TodosSkeleton() {
  return (
    <div className="w-full bg-white animate-pulse overflow-hidden">
      <div className="flex justify-end gap-2 mb-4">
        <div className="w-[41] h-8 rounded bg-gray-200"></div>
        <div className="w-[94] h-8 rounded bg-gray-200"></div>
        <div className="w-[97] h-8 rounded bg-gray-200"></div>
      </div>

      <div className="space-y-2 overflow-hidden">
        {new Array(20).fill("").map((_, index) => (
          <div
            key={index}
            className="w-full h-5 my-6 rounded bg-gray-200"
          ></div>
        ))}
      </div>
    </div>
  );
}
