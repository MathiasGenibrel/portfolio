import clsx from "clsx";
import { HamburgerMenu } from "./HamburgerMenu";
import { NavListItem } from "./nav-list/NavListItem";
import { Appointment } from "./nav-list/Appointment";
import { MadeWithLove } from "./MadeWithLove";
import { useMenuHeader } from "~/hooks/useMenuHeader";
import { CompanyLogoIcon } from "~/common/components/icons/company-logo.icon";
import { Link } from "react-router";
import { MouseEventHandler } from "react";

export const Header = () => {
  const [isOpen, toggle] = useMenuHeader();

  const clickHandler: MouseEventHandler<HTMLAnchorElement> = (e) => {
    isOpen && toggle();
  };

  return (
    <>
      <div
        aria-hidden="true"
        className={clsx(
          "pointer-events-none fixed top-0 z-20 h-dvh w-dvw bg-stone-800/25 backdrop-blur-2xl",
          "transition-opacity duration-300",
          isOpen ? "opacity-100 md:opacity-0" : "opacity-0 delay-150",
        )}
      />

      <header
        className={clsx(
          "z-40 m-4 p-2",
          "w-header fixed top-0 right-0 left-0 flex flex-col justify-between gap-2 rounded-2xl",
          "md:mx-auto md:max-w-4xl md:flex-row md:items-start md:justify-between",
          "transition-all-quick-out duration-300",
          isOpen
            ? "h-auto-dvh bg-background backdrop-blur-none md:h-16! md:bg-stone-200/75 md:backdrop-blur-2xl"
            : "pointer-events-none h-16 bg-stone-200/75 backdrop-blur-2xl delay-200",
        )}
      >
        <section className={"flex w-full"}>
          <nav className="flex w-full flex-col gap-2 md:flex-row md:justify-between">
            <div
              className={"flex min-h-12 w-full items-center justify-between"}
            >
              <Link
                to={"/"}
                onClick={clickHandler}
                title="Back to home"
                className={"pointer-events-auto flex items-center"}
              >
                <CompanyLogoIcon className={"h-10 w-10"} />
                <span
                  className={clsx(
                    "font-display text-sm font-bold text-stone-700",
                  )}
                >
                  MG Studio
                </span>
              </Link>

              <HamburgerMenu handleClick={toggle} isOpen={isOpen} />
            </div>

            {/* Navigation Menu */}
            <ul
              className={clsx(
                "flex flex-col md:flex-row",
                "transition-all, duration-300",
                isOpen ? "opacity-100 delay-150" : "opacity-0 md:opacity-100",
              )}
            >
              <NavListItem toggleMenu={toggle} href={"#about"}>
                À propos
              </NavListItem>
              <NavListItem toggleMenu={toggle} href={"#works"}>
                Projets
              </NavListItem>
            </ul>
          </nav>
        </section>

        <section
          className={
            "mb-2 flex flex-col gap-4 transition-opacity duration-200 md:hidden"
          }
        >
          <Appointment isOpen={isOpen} />

          <MadeWithLove isOpen={isOpen} />
        </section>
      </header>
    </>
  );
};
