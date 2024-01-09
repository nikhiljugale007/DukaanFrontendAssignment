import {
  SpeakerWaveIcon,
  UserIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";

import { InformationCircleIcon } from "@heroicons/react/24/outline";

const TitleBar = () => {
  return (
    <div className="flex justify-between px-8 py-4 border-b  bg-primary-background">
      <div className="flex gap-6 items-center	">
        <p>Payments</p>
        <div className="flex gap-2 items-center">
          <InformationCircleIcon className="h-4 w-4" />
          <p className="text-xs	">info? How it works</p>
        </div>
      </div>

      <div class="relative">
        <input
          type="text"
          class="pl-10 pr-4 py-2 border rounded-md bg-light-gray w-96 outline-none"
          placeholder="Search feature, tutorials, etc."
        />
        <div
          class="absolute inset-y-0 left-0 pl-3  
                    flex items-center  
                    pointer-events-none"
        >
          <MagnifyingGlassIcon className="h-6 w-6" />
        </div>
      </div>
      <div className="flex gap-4">
        <button className="rounded-full bg-light-gray p-2">
          <SpeakerWaveIcon className="h-6 w-6 " />
        </button>
        <button className="rounded-full bg-light-gray p-2">
          <UserIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};
export default TitleBar;
