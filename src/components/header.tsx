import { useEffect, useLayoutEffect, useRef, useState } from "react";
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

function Header() {
  const placeholderRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const [isFixed, setIsFixed] = useState(false);
  const [height, setHeight] = useState<number>();

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
    const measure = () => setHeight(headerRef.current?.offsetHeight);
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    const update = () => {
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

  return (
    <div ref={placeholderRef} style={{ height }} className="w-full">
      <header
        ref={headerRef}
        className={
          isFixed
            ? "fixed inset-x-0 top-0 z-50 bg-background/80 backdrop-blur py-3"
            : "w-full"
        }
      >
        <div className={isFixed ? "mx-auto w-[75%]" : "w-full"}>
          <NavigationMenu className="max-w-full w-full">
            <NavigationMenuList className="justify-between">
              {navOptions.map(({ title, url }) => {
                const isActive = activeHash === url;

                return (
                  <NavigationMenuItem key={title}>
                    <NavigationMenuLink
                      render={
                        <a
                          href={url}
                          onClick={() => setActiveHash(url)}
                          data-active={isActive ? "true" : undefined}
                          className={`nav__item ${
                            isActive ? " bg-popover/50!" : ""
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
        </div>
      </header>
    </div>
  );
}

export default Header;
