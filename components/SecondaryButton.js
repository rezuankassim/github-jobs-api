import Button from "./Button";

export default function SecondaryButton({
  children,
  padding = "px-4 py-4",
  type = "button",
  disabled = false,
}) {
  return (
    <Button
      padding={padding}
      type={type}
      disabled={disabled}
      className="bg-theme-violet bg-opacity-10 text-theme-violet hover:bg-theme-light-violet hover:bg-opacity-[0.35] dark:bg-white dark:bg-opacity-10 dark:text-white dark:hover:bg-white dark:hover:bg-opacity-[0.35]"
    >
      {children}
    </Button>
  );
}
