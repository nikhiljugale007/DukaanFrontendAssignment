import CardComponent from "./MainComponent/CardComponent";
import OrderListTable from "./MainComponent/OrderListTable";
import TitleBar from "./MainComponent/TitleBar";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const MainComponent = () => {
  return (
    <div className="h-screen overflow-y-auto grow">
      <TitleBar />

      <div className="flex justify-between px-8 py-4 bg-main-page-bg">
        <p className="font-medium text-lg	">Overview</p>
        <button
          class="rounded-md px-4 py-2 text-center inline-flex items-center border"
          type="button"
        >
          <p>Last Month</p> <ChevronDownIcon className="w-4 h-4 ms-2" />
        </button>
      </div>
      <CardComponent />
      <div className=" px-8 py-4 font-semibold">Transaction | This month</div>
      <div className="mx-8 rounded-md bg-primary-background shadow-lg">
        <OrderListTable />
      </div>
    </div>
  );
};

export default MainComponent;
