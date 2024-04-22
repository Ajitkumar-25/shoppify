import { Link } from "react-router-dom";
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "../assets/data";

function Footer() {
  return (
    <footer className="flexCenter pb-20 pt-28">
      <div className="maxx_padd_container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link to="/" className="mb-10 bold-20">
            Shoppe
          </Link>
          <div className="flex flex-wrap gap-8 sm:justify-between md:flex-1 ">
            {FOOTER_LINKS.map((col) => (
              <FooterColumn title={col.title} key={col.title}>
                <ul className="flex flex-col gap-4 regular-14 text-gray-20 ">
                  {col.links.map((text) => (
                    <Link title={text} key={text}>
                      {text}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}
            <div className="flex flex-col gap-5 ">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link
                    to={"/"}
                    key={link.label}
                    className="flex gap-4 md:flex-col lg:flex-row"
                  >
                    <p>{link.label}:</p>
                    <p className="medium-14">{link.value}</p>
                  </Link>
                ))}
              </FooterColumn>
            </div>
            <div className="flex">
              <FooterColumn>
                <ul className="flex gap-4">
                  {SOCIALS.links.map((temp) => (
                    <Link to={"/"} key={temp}>
                      <img
                        src={temp}
                        alt="socialization"
                        height={22}
                        width={22}
                      />
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>
        <div className="border bg-gray-20"></div>
        <p className="text-center regular-14 text-gray-30">
          2024 Shoppify | All rights reserved.
        </p>
      </div>
    </footer>
  );
}

const FooterColumn = ({ title, children }) => {
  return (
    <div>
      <h4>{title}</h4>
      {children}
    </div>
  );
};
export default Footer;
