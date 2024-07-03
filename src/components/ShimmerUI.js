const ShimmerUI = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div className="flex gap-3 w-full overflow-x-auto scrollbar-none flex-nowrap">
      {array.map((number, index) => (
        <div key={index} className="flex-shrink-0 h-52 w-32 overflow-hidden bg-[#9A9498] opacity-50 text-[#9A9498]">
          <p>{number}</p>
        </div>
      ))}
    </div>
  );
}

export default ShimmerUI;
