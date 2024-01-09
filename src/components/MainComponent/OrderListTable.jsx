import {
  ArrowsUpDownIcon,
  ArrowDownOnSquareIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const OrderListTable = () => {
  const tableRowData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (
    <div className="px-2">
      <div className="flex flex-row justify-between">
        <div class="relative">
          <input
            type="text"
            class="pl-10 pr-4 py-2 border rounded-md  w-52 outline-none text-sm  text-primary-gray"
            placeholder="Search by order ID..."
          />
          <div
            class="absolute inset-y-0 left-0 pl-3  
                    flex items-center  
                    pointer-events-none"
          >
            <MagnifyingGlassIcon className="h-5 w-5 fill-primary-gray" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            class="rounded-md px-4 py-1.5 text-center inline-flex items-center bg-primary-background border"
            type="button"
          >
            <p>Sort</p> <ArrowsUpDownIcon className="w-4 h-4 ms-2" />
          </button>
          <button
            class="rounded-md px-2 py-2 text-center inline-flex items-center bg-primary-background border"
            type="button"
          >
            <ArrowDownOnSquareIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm table-auto">
                <thead className="bg-bg-light-gray rounded-md">
                  <tr>
                    <th scope="col" className="px-6 py-4 font-medium text-left">
                      Order ID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 font-medium w-1/4 text-center"
                    >
                      Order date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 font-medium w-1/4 text-center"
                    >
                      Order amount
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-4 font-medium text-right"
                    >
                      <div className="flex items-center gap-2 justify-center">
                        Transaction fees
                        <InformationCircleIcon className="h-4 w-4" />
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableRowData.map((item) => {
                    return (
                      <tr className="border-b" key={item}>
                        <td className="whitespace-nowrap px-6 py-4 font-medium text-tertiory-txt-color text-left">
                          #281209
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 w-1/4  text-center">
                          7 July, 2023
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 w-1/2 w-1/4 text-center">
                          ₹1,278.23
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-right">
                          ₹22
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              <div className="flex items-center justify-center w-full gap-5 py-2">
                <button
                  class="rounded-md px-4 py-1.5 text-center inline-flex items-center bg-primary-background border"
                  type="button"
                >
                  <ChevronLeftIcon className="w-4 h-4 me-2" />
                  <p>Previous</p>
                </button>
                <div className="flex gap-4 items-center text-primary-txt-color">
                  <p>1</p>
                  <p>...</p>
                  <p className="bg-tertiory-txt-color text-secondary-txt-color px-2 py-1 rounded-md">
                    10
                  </p>
                  <p>11</p>
                  <p>12</p>
                  <p>13</p>
                  <p>14</p>
                  <p>15</p>
                </div>
                <button
                  class="rounded-md px-4 py-1.5 text-center inline-flex items-center bg-primary-background border"
                  type="button"
                >
                  <p>Next</p> <ChevronRightIcon className="w-4 h-4 ms-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrderListTable;
