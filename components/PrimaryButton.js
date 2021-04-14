import Button from "./Button";

export default function PrimaryButton({
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
      className="bg-theme-violet text-white hover:bg-theme-light-violet"
    >
      {children}
    </Button>
  );
}
