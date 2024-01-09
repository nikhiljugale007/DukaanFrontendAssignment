import {
  MagnifyingGlassIcon,
  ArrowDownCircleIcon,
  MegaphoneIcon
} from "@heroicons/react/24/solid";

import { QuestionMarkCircleIcon} from "@heroicons/react/24/outline";

const TitleBar = () => {
  return (
    <div className="flex justify-between px-8 py-4 border-b  bg-primary-background">
      <div className="flex gap-6 items-center	">
        <p className="text-lg">Payments</p>
        <div className="flex gap-1 items-center">
          <QuestionMarkCircleIcon className="h-4 w-4" />
          <p className="text-xs	">How it works</p>
        </div>
      </div>

      <div class="relative">
        <input
          type="text"
          class="pl-10 pr-4 py-2 border rounded-md bg-light-gray w-96 outline-none text-dark-gray-icon"
          placeholder="Search feature, tutorials, etc."
        />
        <div
          class="absolute inset-y-0 left-0 pl-3  
                    flex items-center  
                    pointer-events-none"
        >
          <MagnifyingGlassIcon className="h-6 w-6 fill-dark-gray-icon" />
        </div>
      </div>
      <div className="flex gap-4">
        <button className="rounded-full bg-light-gray p-2">
          <MegaphoneIcon className="h-6 w-6 fill-dark-gray-bg" />
        </button>
        <button className="rounded-full bg-light-gray p-2">
          <ArrowDownCircleIcon className="h-6 w-6 fill-dark-gray-bg" />
        </button>
      </div>
    </div>
  );
};
export default TitleBar;
