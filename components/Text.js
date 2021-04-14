export default function Text({
  children,
  type = "text",
  name,
  id,
  placeholder,
  leadingIcon,
}) {
  return (
    <div className="relative w-full">
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className="px-[72px] pt-[31px] pb-[33px] bg-white border-none rounded-md text-[16px] leading-none text-theme-very-dark-blue placeholder-theme-very-dark-blue placeholder-opacity-50 dark:bg-theme-very-dark-blue dark:text-theme-white dark:placeholder-white dark:placeholder-opacity-50"
      />
      {leadingIcon && (
        <div className="absolute top-0 left-0 mt-7 ml-8">{leadingIcon}</div>
      )}
    </div>
  );
}
