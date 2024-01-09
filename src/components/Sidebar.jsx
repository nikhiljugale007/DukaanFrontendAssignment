import { ChevronDownIcon, HomeIcon, ClipboardIcon,Squares2X2Icon, TruckIcon,SpeakerWaveIcon,
ChartBarIcon, BanknotesIcon, WrenchIcon, CloudIcon, WalletIcon} from "@heroicons/react/24/outline";
import logo from "../Resources/Logo.jpg";
import { useState } from "react";

const Sidebar = () => {
    const [sidebarItems,setSidebarItems] = useState([
        {Icon:ClipboardIcon,Title:'Home'},
        {Icon:HomeIcon,Title:'Orders'},
        {Icon:Squares2X2Icon,Title:'Products'},
        {Icon:TruckIcon,Title:'Delivery'},
        {Icon:SpeakerWaveIcon,Title:'Marketing'},
        {Icon:ChartBarIcon,Title:'Analytics'},
        {Icon:BanknotesIcon,Title:'Payments'},
        {Icon:WrenchIcon,Title:'Tools'},
        {Icon:CloudIcon,Title:'Discounts'},
        {Icon:CloudIcon,Title:'Audience'},
        {Icon:CloudIcon,Title:'Appearance'},
        {Icon:CloudIcon,Title:'Plugins'}
    ]);

    const sidebarMenu = sidebarItems.map((item,index) => {
        const {Icon,Title} = item;
        return(
            <div key={index} className="flex gap-x-4 p-2">
                <Icon className="h-6 w-6"/>
                <p>{Title}</p>
            </div>
        );
    });
  return (
      <div className="col-span-2 bg-secondary-background text-secondary-txt-color h-screen flex flex-col justify-between p-4">
        <div className="flex flex-col">
          <div className="flex justify-between">
            <div className="flex flex-row gap-2">
              <img className="w-10 h-10 rounded-md " src={logo} alt="CompanyLogo"/>
              <div className="flex flex-col">
                <div>Nishyam</div>
                <div className="text-sm	underline">Visit Store</div>
              </div>
            </div>
            <button>
              <ChevronDownIcon className="h-6 w-6" />
            </button>
          </div>

          <div className="px-0 py-4">{sidebarMenu}</div>
        </div>
        <div className="flex items-center gap-2 bg-tertiory-background rounded-md">
            <div className=" p-2 rounded-md ">
                <WalletIcon className="h-8 w-8 bg-btn-background-faint-blue rounded-md"/>
            </div>
            <div className="text-sm">
                <p>Available credits</p>
                <p>222.10</p>
            </div>
        </div>
      </div>
  );
};
export default Sidebar;
