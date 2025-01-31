import React from "react";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Image,
} from "@heroui/react";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import { siteConfig } from "@/config/site";
import clsx from "clsx";
import { ThemeSwitch } from "./theme-switch";
import { useRouter } from "next/router";


export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const router = useRouter();

  return (
    <HeroUINavbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="pr-3" justify="center">
        <NavbarBrand className="space-x-1">
          <img src="../KWK.png" alt="" className="w-4 invert dark:invert-0" />
          <p className="font-bold text-inherit">KWK</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
      </NavbarContent>

      <NavbarContent justify="end" className="hidden sm:flex">
        <div className="hidden sm:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => {
            const isActive = router.pathname === item.href;
            return (
              <NavbarItem key={item.href}>
                <NextLink
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "data-[active=true]:text-primary",
                    isActive ? "border-b-2 border-zinc-800 dark:border-zinc-200 hover:border-zinc-500" : "text-foreground"
                  )}
                  color="foreground"
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              </NavbarItem>
            )
          })}
        </div>
      </NavbarContent>

      <NavbarMenu>
        {siteConfig.navMenuItems.map((item, index) => {
          const isActive = router.pathname === item.href;
          return (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary",
                isActive ? "border-b-2 border-zinc-800 dark:border-zinc-200 hover:border-zinc-500" : "text-foreground"
              )}
              href={item.href}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
          )
        })}
      </NavbarMenu>
    </HeroUINavbar>
  );
}

