import { Link } from "react-router-dom";
const links = [
  {
    name: "Rules",
    href: "/rules",
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
  return (
    <div className="bg-[#E2E2E2] mt-[120px] py-5">
      <div className="container">
        <div className="flex flex-wrap gap-[30px] items-center ">
          {links.map((link) => (
            <Link className="font-primary text-[16px] font-normal text-secondary" key={link.name} to={link.href}>
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
