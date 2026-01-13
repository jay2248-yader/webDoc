import FieldError from "./FieldError";

export default function Select({
  label,
  value,
  onChange,
  options = [],
  placeholder = "ເລືອກ...",
  error,
  hasError = false,
  theme = "light",
}) {
  const isLight = theme === "light";

  const labelClass = isLight ? "text-gray-700" : "text-white";
  const selectBase = isLight
    ? "bg-white text-gray-700 border border-gray-300 shadow-sm focus:border-blue-400 focus:ring-blue-200 hover:border-blue-400"
    : "bg-white/20 text-white border border-white/40 focus:ring-white/60 hover:bg-white/30 hover:border-white/70";

  return (
    <div className="space-y-2">
      {label ? <label className={`block text-sm ${labelClass}`}>{label}</label> : null}

      <select
        value={value}
        onChange={onChange}
        className={`w-full rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 transition-all duration-200
          ${hasError ? "border-2 border-red-500 focus:ring-red-200" : ""}
          ${selectBase}
        `}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <FieldError error={error} />
    </div>
  );
}
