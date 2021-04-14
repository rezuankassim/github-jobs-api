export default function Button({
  children,
  className,
  padding,
  type,
  disabled,
}) {
  return (
    <button
      type={type}
      className={`${className} rounded-[5px] font-bold text-[16px] leading-none disabled:opacity-40 disabled:cursor-not-allowed transition ease-in-out duration-300 ${padding}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
