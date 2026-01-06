import useLogin from "../../hooks/useLogin";
import EyeIcon from "../../assets/icon/eye-solid.svg";
import EyeSlashIcon from "../../assets/icon/eye-low-vision-solid.svg";

export default function LoginForm() {
  const {
    employeeId,
    password,
    showPassword,
    loading,
    error,
    fieldErrors,
    passwordInputRef,
    handleEmployeeIdChange,
    handlePasswordChange,
    handleEmployeeIdKeyDown,
    setShowPassword,
    handleSubmit,
  } = useLogin();

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center gap-5 w-full"
    >
      {/* Error */}
      {error && (
        <div className="bg-red-500/20 border border-red-400 text-red-100 px-4 py-2 rounded-lg text-sm">
          {error}
        </div>
      )}

      {/* ID */}
      <div>
        <label className="block text-white text-xm mb-2">ລະຫັດພະນັກງານ</label>
        <input
          type="text"
          placeholder="ກະລຸນາປ້ອນລະຫັດພະນັກງານ"
          value={employeeId}
          onChange={(e) => handleEmployeeIdChange(e.target.value)}
          onKeyDown={handleEmployeeIdKeyDown}
          maxLength={20}
          className={`w-full rounded-xl bg-white/20 px-5 py-4 text-white placeholder-white/60
    focus:outline-none focus:ring-2 transition-all duration-200
    hover:bg-white/30 hover:border-white/70
    ${
      fieldErrors.employeeId
        ? "border-2 border-red-500 focus:ring-red-500 hover:border-red-400"
        : "border border-white/40 focus:ring-white/60"
    }
  `}
        />

        {fieldErrors.employeeId && (
          <p className="text-red-300 text-sm mt-1 ml-1">
            {fieldErrors.employeeId}
          </p>
        )}
      </div>

      {/* Password */}
      <div className="relative">
        <label className="block text-white text-xm mb-2">ລະຫັດຜ່ານ</label>
        <input
          ref={passwordInputRef}
          type={showPassword ? "text" : "password"}
          placeholder="ກະລຸນາປ້ອນລະຫັດຜ່ານ"
          value={password}
          onChange={(e) => handlePasswordChange(e.target.value)}
          maxLength={20}
          className={`w-full rounded-xl bg-white/20 px-5 py-4 text-white pr-14 placeholder-white/60
    focus:outline-none focus:ring-2 transition-all duration-200
    hover:bg-white/30 hover:border-white/70
    ${
      fieldErrors.password
        ? "border-2 border-red-500 focus:ring-red-500 hover:border-red-400"
        : "border border-white/40 focus:ring-white/60"
    }
  `}
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-12 text-white/70 hover:text-white transition-all duration-200 ease-in-out transform hover:scale-110 cursor-pointer"
        >
          <img
            src={showPassword ? EyeSlashIcon : EyeIcon}
            alt={showPassword ? "ຊ່ອນລະຫັດຜ່ານ" : "ເບິ່ງລະຫັດຜ່ານ"}
            className="w-6 h-6 filter invert brightness-100"
          />
        </button>

        {fieldErrors.password && (
          <p className="text-red-300 text-sm mt-1 ml-1">
            {fieldErrors.password}
          </p>
        )}
      </div>

      {/* Button */}
      <button
        disabled={loading}
        className={`mt-4 w-full py-4 rounded-xl font-bold text-lg transition-all duration-200 ease-in-out
    ${
      loading
        ? "bg-white/40 text-white cursor-not-allowed"
        : "bg-white text-blue-700 hover:bg-blue-50 hover:scale-105 hover:shadow-lg cursor-pointer"
    }
  `}
      >
        {loading ? "ກຳລັງເຂົ້າສູ່ລະບົບ..." : "ເຂົ້າສູ່ລະບົບ"}
      </button>
    </form>
  );
}