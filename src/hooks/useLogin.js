import { useState, useRef } from "react";

export default function useLogin() {
  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({
    employeeId: "",
    password: "",
  });

  // สร้าง ref สำหรับ password input
  const passwordInputRef = useRef(null);

  // ฟังก์ชันจัดการการเปลี่ยนแปลง Employee ID (จำกัด 20 ตัว)
  const handleEmployeeIdChange = (value) => {
    if (value.length <= 20) {
      setEmployeeId(value);
    }
  };

  // ฟังก์ชันจัดการการเปลี่ยนแปลง Password (จำกัด 20 ตัว)
  const handlePasswordChange = (value) => {
    if (value.length <= 20) {
      setPassword(value);
    }
  };

  // ฟังก์ชันจัดการเมื่อกด Enter ที่ช่อง Employee ID
  const handleEmployeeIdKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // ป้องกันการ submit form
      passwordInputRef.current?.focus(); // ย้าย focus ไปที่ช่อง password
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setFieldErrors({ employeeId: "", password: "" });

    // Validate fields
    let hasError = false;
    const newFieldErrors = { employeeId: "", password: "" };

    if (!employeeId.trim()) {
      newFieldErrors.employeeId = "ກະລຸນາປ້ອນລະຫັດພະນັກງານ";
      hasError = true;
    }

    if (!password.trim()) {
      newFieldErrors.password = "ກະລຸນາປ້ອນລະຫັດຜ່ານ";
      hasError = true;
    }

    if (hasError) {
      setFieldErrors(newFieldErrors);
      return;
    }

    try {
      setLoading(true);

      // 🔗 ตัวอย่าง (เปลี่ยนเป็น API จริงภายหลัง)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("LOGIN DATA", { employeeId, password });

      // success → redirect / set context
    } catch (err) {
      console.error(err);
      setError("ລະຫັດພະນັກງານ ຫຼື ລະຫັດຜ່ານບໍ່ຖືກຕ້ອງ");
    } finally {
      setLoading(false);
    }
  };

  return {
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
  };
}