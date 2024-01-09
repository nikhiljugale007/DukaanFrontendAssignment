const CardComponent = () => {
  return (
    <div className="flex w-full	px-8 gap-4">
      <div className="grow flex flex-col gap-2 shadow-md p-4 rounded-md">
        <p className="">Online orders</p>
        <p className="text-4xl font-semibold">231</p>
      </div>
      <div className="grow flex flex-col gap-2 shadow-md p-4 rounded-md">
        <p className="">Amount received</p>
        <p className="text-4xl font-semibold">₹ 23,92,312.19</p>
      </div>
    </div>
  );
};

export default CardComponent;
