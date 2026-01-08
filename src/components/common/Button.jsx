/**
 * Button component with loading and disabled states
 * @param {Object} props
 * @param {React.ReactNode} props.children - Button content
 * @param {boolean} props.loading - Loading state
 * @param {boolean} props.disabled - Disabled state
 * @param {Function} props.onClick - Click handler
 * @param {string} props.type - Button type (submit, button, etc.)
 * @param {string} props.variant - Button variant (primary, secondary, etc.)
 * @param {string} props.className - Additional CSS classes
 */
export default function Button({
  children,
  loading = false,
  disabled = false,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
}) {
  const isDisabled = loading || disabled;

  return (
    <button
      type={type}
      disabled={isDisabled}
      onClick={onClick}
      className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-200 ease-in-out
        ${
          isDisabled
            ? 'bg-white/40 text-white cursor-not-allowed'
            : 'bg-white text-blue-700 hover:bg-blue-50 hover:scale-105 hover:shadow-lg cursor-pointer'
        }
        ${className}
      `}
    >
      {children}
    </button>
  );
}
