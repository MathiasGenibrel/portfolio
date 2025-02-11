import clsx from "clsx";
import { HamburgerMenu } from "./HamburgerMenu";
import { NavListItem } from "./nav-list/NavListItem";
import { Appointment } from "./nav-list/Appointment";
import { MadeWithLove } from "./MadeWithLove";
import { useMenuHeader } from "~/hooks/useMenuHeader";
import { CompanyLogoIcon } from "~/common/components/icons/company-logo.icon";

export const Header = () => {
  const [isOpen, toggle] = useMenuHeader();

  return (
    <>
      <div
        aria-hidden="true"
        className={clsx(
          "pointer-events-none fixed top-0 h-dvh w-dvh bg-stone-800/25 backdrop-blur-2xl",
          "transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 delay-150",
        )}
      />

      <header
        className={clsx(
          "z-40 m-4 p-2",
          "w-header fixed top-0 left-0 flex flex-col justify-between gap-2 rounded-2xl",
          "transition-all-quick-out duration-300",
          isOpen
            ? "h-calc-dvh-margin bg-background backdrop-blur-none"
            : "pointer-events-none h-14 bg-stone-200/75 backdrop-blur-2xl delay-200",
        )}
      >
        <section>
          <nav className="flex flex-col gap-2">
            <div className={"flex w-full items-center justify-between"}>
              <a
                href="/"
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
              </a>

              <HamburgerMenu handleClick={toggle} isOpen={isOpen} />
            </div>

            {/* Navigation Menu */}
            <ul
              className={clsx(
                "flex flex-col",
                "transition-all, duration-300",
                isOpen ? "opacity-100 delay-150" : "opacity-0",
              )}
            >
              <NavListItem>À propos</NavListItem>
              <NavListItem>Projets</NavListItem>
            </ul>
          </nav>
        </section>

        <section className={"mb-2 flex flex-col gap-4"}>
          <Appointment isOpen={isOpen} />

          <MadeWithLove isOpen={isOpen} />
        </section>
      </header>
    </>
  );
};
