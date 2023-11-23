import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.png";
import cellularLogo from "../../assets/icons/cellur-logo.png";
import { RedHeartIcon, GrayHeartIcon } from "./IconHover";
import newLogo from "../../assets/icons/new-logo.svg";
function Nav() {
  const [hover, setHover] = useState(false);
  return (
    <header className="py-5 bg-green">
      <nav className="container">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-[80px]">
            <img src={logo} alt="logo" width={161} height={46} />
            <div className="flex items-center space-x-[30px]">
              <Link className="font-primary text-[17px] font-medium leading-7 uppercase text-white">
                All Ads
              </Link>
              <Link className="font-primary text-[17px] font-medium leading-7 uppercase text-white">
                Car dealerships
              </Link>
            </div>
          </div>
          <div className="flex items-center flex-1 justify-end space-x-[30px]">
            <a
              href="tel:+1234567890"
              className="flex items-center space-x-[10px]"
            >
              <img
                src={cellularLogo}
                alt="cellular-Logo"
                width={24}
                height={24}
              />
              <p className="font-primary text-[17px] font-medium leading-7 uppercase text-white">
                (012)599-08-01
              </p>
            </a>
            <Link
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              className="flex items-center space-x-[10px] py-4 px-5 rounded-md bg-white "
              to={""}
            >
              {hover ? <RedHeartIcon /> : <GrayHeartIcon />}
              <p className="font-primary text-[16px] font-medium leading-[21px] text-secondary">
                Favorites
              </p>
            </Link>
            <Link
              to={""}
              className="flex items-center space-x-[10px] py-4 px-5 rounded-md bg-red"
            >
              <img src={newLogo} alt="add-Announcement" />
              <p className="font-primary text-[16px] font-medium leading-[21px] text-white ">
                New announcement
              </p>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
