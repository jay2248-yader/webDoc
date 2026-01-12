import FieldError from "./FieldError";
import EyeIcon from "../../assets/icon/eye-solid.svg";
import EyeSlashIcon from "../../assets/icon/eye-low-vision-solid.svg";

export default function FormInput({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  onKeyDown,
  error,
  hasError = false,
  maxLength = 20,
  showPassword,
  onTogglePassword,
  inputRef,
  theme = "dark",     // ✅ เพิ่ม
  rightIcon = null,   // ✅ เพิ่ม (สำหรับ search icon)
}) {
  const isPasswordField = type === "password";
  const actualType = isPasswordField && showPassword ? "text" : type;

  const isLight = theme === "light";

  const labelClass = isLight ? "text-gray-700" : "text-white";
  const inputBase = isLight
    ? "bg-white text-gray-700 placeholder-gray-400 border border-blue-200 shadow-sm focus:border-blue-400 focus:ring-blue-200 hover:border-blue-300"
    : "bg-white/20 text-white placeholder-white/60 border border-white/40 focus:ring-white/60 hover:bg-white/30 hover:border-white/70";

  return (
    <div className="space-y-2">
      {label ? <label className={`block text-sm ${labelClass}`}>{label}</label> : null}

      <div className="relative">
        <input
          ref={inputRef}
          type={actualType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          maxLength={maxLength}
          className={`w-full rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 transition-all duration-200
            ${(isPasswordField || rightIcon) ? "pr-10" : ""}
            ${hasError ? "border-2 border-red-500 focus:ring-red-200" : ""}
            ${inputBase}
          `}
        />

        {/* ✅ ไอคอนฝั่งขวา (เช่น Search) */}
        {rightIcon && !isPasswordField && (
          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-blue-500">
            {rightIcon}
          </span>
        )}

        {/* ✅ Toggle password */}
        {isPasswordField && onTogglePassword && (
          <button
            type="button"
            onClick={onTogglePassword}
            aria-label={showPassword ? "ຊ່ອນລະຫັດຜ່ານ" : "ເບິ່ງລະຫັດຜ່ານ"}
            className={`absolute right-4 top-1/2 -translate-y-1/2 transition-all duration-200 hover:scale-110 ${
              isLight ? "text-gray-500 hover:text-gray-700" : "text-white/70 hover:text-white"
            }`}
          >
            <img
              src={showPassword ? EyeSlashIcon : EyeIcon}
              alt=""
              className={`h-5 w-5 ${isLight ? "" : "invert"}`}
            />
          </button>
        )}
      </div>

      <FieldError error={error} />
    </div>
  );
}
