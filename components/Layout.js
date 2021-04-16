import DesktopHeader from "./icons/DesktopHeader";
import Logo from "./icons/Logo";
import Moon from "./icons/Moon";
import Sun from "./icons/Sun";
import Toggle from "./Toggle";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Layout({ children }) {
  const { theme, setTheme } = useTheme();
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setDark(theme === "dark");
  }, []);
  useEffect(() => setTheme(dark === true ? "dark" : "light"), [dark]);

  return (
    <div>
      <div className="relative h-[162px] w-full">
        <div className="container mx-auto max-w-[1100px] pt-[45px] pb-11">
          <div className="flex items-center justify-between">
            <Logo className="z-10" />

            <Toggle
              state={dark}
              setState={setDark}
              leftLabel={<Sun />}
              rightLabel={<Moon />}
              className="z-10"
            />
          </div>
        </div>

        <div className="absolute w-full h-[162px] bottom-0">
          <DesktopHeader />
        </div>
      </div>

      <div className="relative w-full -mt-10">
        <div className="absolute h-full inset-0">{children}</div>
      </div>
    </div>
  );
}
