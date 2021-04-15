export default function Checkbox({ id, name, label, className }) {
  return (
    <div className="relative flex items-center">
      <div className="flex items-center h-6">
        <input
          id={id}
          name={name}
          type="checkbox"
          className={`${className} h-6 w-6 text-theme-violet bg-theme-very-dark-blue bg-opacity-[0.1035] border-none rounded-[3px] hover:bg-theme-violet hover:bg-opacity-25`}
        />
      </div>

      <div className="ml-4 text-body leading-normal">
        <label htmlFor={id} className="font-bold text-theme-very-dark-blue">
          {label}
        </label>
      </div>
    </div>
  );
}
