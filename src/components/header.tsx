import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";

const navOptions = [
  { title: "Home", url: "#" },
  { title: "Projetos", url: "#projects" },
  { title: "Habilidades", url: "#skills" },
  { title: "Sobre", url: "#about" },
  { title: "Contact", url: "#contact" },
];

const DESKTOP_BREAKPOINT = 768;

function Header() {
  const placeholderRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const [isFixed, setIsFixed] = useState(false);
  const [height, setHeight] = useState<number>();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [activeHash, setActiveHash] = useState<string>(
    () => window.location.hash || "#",
  );

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash || "#");
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useLayoutEffect(() => {
    const measure = () => {
      if (window.innerWidth < DESKTOP_BREAKPOINT) {
        setHeight(undefined);
        return;
      }
      setHeight(headerRef.current?.offsetHeight);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < DESKTOP_BREAKPOINT) {
        setIsFixed(false);
        return;
      }
      const top = placeholderRef.current?.getBoundingClientRect().top ?? 1;
      setIsFixed(top <= 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const handleNavClick = (url: string) => {
    setActiveHash(url);
    setMobileMenuOpen(false);
  };

  return (
    <div ref={placeholderRef} style={{ height }} className="w-full">
      <header
        ref={headerRef}
        className={`fixed inset-x-0 top-0 z-50 py-3 ${
          isFixed
            ? "md:fixed md:inset-x-0 md:top-0 md:bg-background/80 md:backdrop-blur md:py-3"
            : "md:static md:bg-transparent md:backdrop-blur-none md:py-0"
        }`}
      >
        <div
          className={`mx-auto w-[90%] ${isFixed ? "md:w-[75%]" : "md:w-full"}`}
        >
          {/* DESKTOP */}
          <NavigationMenu className="hidden md:flex max-w-full w-full">
            <NavigationMenuList className="justify-between">
              {navOptions.map(({ title, url }) => {
                const isActive = activeHash === url;

                return (
                  <NavigationMenuItem key={title}>
                    <NavigationMenuLink
                      render={
                        <a
                          href={url}
                          onClick={() => handleNavClick(url)}
                          data-active={isActive ? "true" : undefined}
                          className={`nav__item ${
                            isActive ? "bg-popover/50!" : ""
                          }`}
                        >
                          {title}
                        </a>
                      }
                    />
                  </NavigationMenuItem>
                );
              })}
              <NavigationMenuItem>
                <NavigationMenuLink
                  className="nav__item"
                  render={<a href="/">Currículo</a>}
                />
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* MOBILE: apenas o botão hambúrguer à esquerda */}
          <div className="relative flex md:hidden top-3 items-center justify-start z-100">
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={mobileMenuOpen}
              className="p-2 rounded-lg border border-foreground/15 bg-popover/70 text-foreground hover:bg-primary/20 hover:border-primary transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? (
                <HiX className="size-5" />
              ) : (
                <HiMenuAlt3 className="size-5" />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE: menu dropdown */}
        {mobileMenuOpen && (
          <nav className="md:hidden absolute h-screen inset-x-0 top-0 z-10  bg-background border-b border-foreground/15 shadow-lg">
            <ul className="flex flex-col gap-1 p-4 mx-auto mt-20 w-[90%]">
              {navOptions.map(({ title, url }) => {
                const isActive = activeHash === url;

                return (
                  <li key={title}>
                    <a
                      href={url}
                      onClick={() => handleNavClick(url)}
                      data-active={isActive ? "true" : undefined}
                      className={`nav__item block w-full py-2.5 px-4 rounded-lg transition-colors ${
                        isActive
                          ? "bg-popover/70! text-primary font-semibold"
                          : "hover:bg-popover/40"
                      }`}
                    >
                      {title}
                    </a>
                  </li>
                );
              })}
              <li className="pt-2 mt-1 border-t border-foreground/10">
                <a
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="nav__item block w-full py-2.5 px-4 rounded-lg hover:bg-popover/40"
                >
                  Currículo
                </a>
              </li>
            </ul>
          </nav>
        )}
      </header>
    </div>
  );
}

export default Header;
