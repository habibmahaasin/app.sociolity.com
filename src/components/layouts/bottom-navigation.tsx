import { Icon } from "@iconify/react/dist/iconify.js";
import { MENU_ITEMS } from "../../utils/constants/bottom-menu-data";

export default function BottomNavigation() {
  return (
    <nav className="h-16 bg-white w-full fixed bottom-0 z-10 max-w-md shadow-t-lg px-4 md:px-6 flex flex-col justify-center shadow-[0_-4px_6px_rgba(0,0,0,0.04)]">
      <div className="w-full h-12 grid grid-cols-5 gap-4">
        {MENU_ITEMS.map((item) =>
          item.isFloating ? (
            <div key={item.id} className="h-full w-full relative">
              <div className="h-24 w-full absolute -top-[3.2rem] flex flex-col items-center justify-center">
                <div className="w-18 h-18 rounded-full bg-gradient-to-r from-[#01E965] via-[#00CD89] to-[#02ABA6] text-white shadow-[0_-4px_6px_rgba(0,0,0,0.1)] flex justify-center items-center">
                  <Icon
                    icon={item.icon}
                    width="36"
                    height="36"
                    className="ml-1 mt-1 text-white"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div
              key={item.id}
              className={`h-full w-full flex flex-col items-center justify-center ${
                item.isActive ? "text-secondary" : item.inactiveColor
              }`}
            >
              <Icon icon={item.icon} width="28" height="28" />
            </div>
          )
        )}
      </div>
    </nav>
  );
}
