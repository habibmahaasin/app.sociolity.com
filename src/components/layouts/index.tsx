import BottomNavigation from "./bottom-navigation";
import Header from "./header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-100">
      <div className="@sm bg-[#FEFEFE] w-full h-screen max-w-md shadow-xl scrollable-content">
        <Header />
        {children}
        <BottomNavigation />
      </div>
    </div>
  );
};

export default Layout;
