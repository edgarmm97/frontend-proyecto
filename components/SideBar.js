import { forwardRef } from "react";
import Link from "next/link";
import { HomeIcon, CreditCardIcon, UserIcon, HomeModernIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

const ItemMenu = ({ href, pathname, text, children }) => {

  return (
    <Link href={href}>
      <div
        className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${pathname == href
            ? "bg-orange-100 text-orange-500"
            : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
          }`}
      >
        <div className="mr-2">
          {children}
        </div>
        <div>
          <p>{text}</p>
        </div>
      </div>
    </Link>
  );
}

const SideBar = forwardRef(({ showNav }, ref) => {
  const router = useRouter();

  return (
    <div ref={ref} className="fixed w-56 h-full bg-white shadow-sm">
      <div className="flex justify-center mt-6 mb-14">
        <picture>
          <img
            className="w-32 h-auto"
            src="/ferox-transparent.png"
            alt="company logo"
          />
        </picture>
      </div>

      <div className="flex flex-col">

        <ItemMenu href="/organizacion" pathname={router.pathname} text='Organización'>
          <HomeModernIcon className="h-5 w-5" />
        </ItemMenu>

        <ItemMenu href="/botones" pathname={router.pathname} text='Areas'>
          <HomeModernIcon className="h-5 w-5" />
        </ItemMenu>

        <ItemMenu href="/tabla" pathname={router.pathname} text='Tabla'>
          <HomeModernIcon className="h-5 w-5" />
        </ItemMenu>

      </div>
    </div>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;
