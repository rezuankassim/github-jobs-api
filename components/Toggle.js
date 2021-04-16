import { Switch } from "@headlessui/react";
import classNames from "../utils/ClassNames";

export default function Toggle({
  state,
  setState,
  leftLabel,
  rightLabel,
  className,
}) {
  return (
    <Switch.Group
      as="div"
      className={classNames(className, "flex items-center space-x-4")}
    >
      {leftLabel && (
        <Switch.Label as="span" passive>
          {leftLabel}
        </Switch.Label>
      )}

      <Switch
        checked={state}
        onChange={setState}
        className="relative group inline-flex flex-shrink-0 p-[5px] h-6 w-12 bg-white rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none"
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={classNames(
            state ? "translate-x-5" : "translate-x-0",
            "pointer-events-none inline-block h-[14px] w-[14px] rounded-full bg-theme-violet shadow transform ring-0 transition ease-in-out duration-200 group-hover:bg-theme-light-violet"
          )}
        />
      </Switch>

      {rightLabel && (
        <Switch.Label as="span" passive>
          {rightLabel}
        </Switch.Label>
      )}
    </Switch.Group>
  );
}
