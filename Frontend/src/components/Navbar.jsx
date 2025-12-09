import { Link, useLocation } from "react-router";
import useAuthUser from "../hooks/useAuthUser";
import { BellIcon, LogOutIcon, ShipWheelIcon } from "lucide-react";
import ThemeSelector from "./ThemeSelector";
import useLogout from "../hooks/useLogout";

const Navbar = () => {
  const { authUser } = useAuthUser();
  const location = useLocation();
  const isChatPage = location.pathname?.startsWith("/chat");
  const { logoutMutation } = useLogout();

  return (
    <nav className="backdrop-blur bg-base-200/70 border-b border-base-300 sticky top-0 z-30 h-16 flex items-center shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between w-full">

          {/* LOGO - ONLY IN CHAT PAGE */}
          {isChatPage && (
            <Link to="/" className="flex items-center gap-2.5 hover:opacity-90 transition">
              <ShipWheelIcon className="size-9 text-primary drop-shadow-sm" />
              <span className="text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-wider">
                Streamify
              </span>
            </Link>
          )}

          <div className="flex items-center gap-3 sm:gap-4 ml-auto">

            {/* NOTIFICATION */}
            <Link to="/notifications">
              <button className="btn btn-ghost btn-circle hover:bg-base-300/50 transition">
                <BellIcon className="h-6 w-6 text-base-content opacity-70 hover:opacity-100 transition" />
              </button>
            </Link>

            {/* THEME SWITCH */}
            <ThemeSelector />

            {/* USER AVATAR */}
            <div className="avatar">
              <div className="w-9 rounded-full ring-2 ring-primary/40 ring-offset-1 ring-offset-base-200 transition">
                <img src={authUser?.profilePic} alt="User Avatar" />
              </div>
            </div>

            {/* LOGOUT */}
            <button
              className="btn btn-ghost btn-circle hover:bg-error/10 transition"
              onClick={logoutMutation}
            >
              <LogOutIcon className="h-6 w-6 text-error opacity-70 hover:opacity-100 transition" />
            </button>

          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
