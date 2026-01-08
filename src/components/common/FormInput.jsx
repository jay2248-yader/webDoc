import FieldError from './FieldError';
import EyeIcon from '../../assets/icon/eye-solid.svg';
import EyeSlashIcon from '../../assets/icon/eye-low-vision-solid.svg';

/**
 * FormInput component - Reusable input field with label, error handling, and optional password toggle
 * @param {Object} props
 * @param {string} props.label - Label text
 * @param {string} props.type - Input type (text, password, etc.)
 * @param {string} props.placeholder - Placeholder text
 * @param {string} props.value - Input value
 * @param {Function} props.onChange - Change handler
 * @param {Function} props.onKeyDown - KeyDown handler
 * @param {string} props.error - Error message
 * @param {boolean} props.hasError - Whether field has error
 * @param {number} props.maxLength - Maximum input length
 * @param {boolean} props.showPassword - For password fields - whether to show password
 * @param {Function} props.onTogglePassword - For password fields - toggle password visibility
 * @param {React.Ref} props.inputRef - Ref for the input element
 */
export default function FormInput({
  label,
  type = 'text',
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
}) {
  const isPasswordField = type === 'password';
  const actualType = isPasswordField && showPassword ? 'text' : type;

  return (
    <div className={isPasswordField ? 'relative' : ''}>
      <label className="block text-white text-xm mb-2">{label}</label>
      <input
        ref={inputRef}
        type={actualType}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        maxLength={maxLength}
        className={`w-full rounded-xl bg-white/20 px-5 py-4 text-white placeholder-white/60
          focus:outline-none focus:ring-2 transition-all duration-200
          hover:bg-white/30 hover:border-white/70
          ${isPasswordField ? 'pr-14' : ''}
          ${
            hasError
              ? 'border-2 border-red-500 focus:ring-red-500 hover:border-red-400'
              : 'border border-white/40 focus:ring-white/60'
          }
        `}
      />

      {isPasswordField && onTogglePassword && (
        <button
          type="button"
          onClick={onTogglePassword}
          className="absolute right-4 top-12 text-white/70 hover:text-white transition-all duration-200 ease-in-out transform hover:scale-110 cursor-pointer"
        >
          <img
            src={showPassword ? EyeSlashIcon : EyeIcon}
            alt={showPassword ? 'ຊ່ອນລະຫັດຜ່ານ' : 'ເບິ່ງລະຫັດຜ່ານ'}
            className="w-6 h-6 filter invert brightness-100"
          />
        </button>
      )}

      <FieldError error={error} />
    </div>
  );
}
