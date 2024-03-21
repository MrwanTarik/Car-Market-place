import { Link, useLocation } from "react-router-dom";
const links = [
  {
    name: "Help",
    href: "/help",
  },
  {
    name: "Law",
    href: "/law",
  },
  {
    name: "User agreement",
    href: "/user-agreement",
  },
  {
    name: "Privacy policy",
    href: "/privacy-policy",
  },
];
function Footer() {
  const location = useLocation();
  const isCarDetailsRoute = location.pathname.startsWith("/car-details/");
  return (
    <>
      <div
        className={`bg-[#E2E2E2]  py-5 ${
          isCarDetailsRoute ? "mt-[0px]" : "mt-[120px]"
        }`}
      >
        <div className="container">
          <div className="flex flex-wrap gap-[30px] items-center ">
            {links.map((link) => (
              <Link
                className="font-primary text-[16px] font-normal text-secondary"
                key={link.name}
                to={link.href}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-primary py-[30px]">
        <div className="container">
          <div className="flex items-center footer justify-between">
            <h2 className="font-primary text-[16px] font-bold leading-7 text-white max-w-[528px]">
              The Site Administration is not responsible for the content of
              advertising banners and posted announcements.
            </h2>
            <p className="font-primary text-[16px] font-normal text-white">
              2023-2023 Digital Classifieds LLC. TIN: 1305631664
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
