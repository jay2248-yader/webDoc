import { useState } from "react";
import FormInput from "../common/FormInput";
import Select from "../common/Select";
import Button from "../common/Button";

export default function UserFormModal({
  isOpen,
  onClose,
  onSubmit,
  user = null,
}) {
  const [formData, setFormData] = useState({
    studentId: user?.studentId || "",
    name: user?.name || "",
    email: user?.email || "",
    password: user ? "" : "",
    phone: user?.phone || "",
    status: user?.status || "",
    role: user?.role || "User",
    department: user?.department || "",
  });

  const [errors, setErrors] = useState({});
  const [isClosing, setIsClosing] = useState(false);

  if (!isOpen && !isClosing) return null;

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
    // Clear error when user types
    if (errors[field]) {
      setErrors({ ...errors, [field]: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    const newErrors = {};
    if (!formData.studentId) newErrors.studentId = "ກະລຸນາປ້ອນລະຫັດ";
    if (!formData.name) newErrors.name = "ກະລຸນາປ້ອນຊື່";
    if (!formData.email) newErrors.email = "ກະລຸນາປ້ອນອີເມວ";
    if (!user && !formData.password) newErrors.password = "ກະລຸນາປ້ອນລະຫັດຜ່ານ";
    if (!formData.role) newErrors.role = "ກະລຸນາເລືອກບົດບາດ";
    if (!formData.department) newErrors.department = "ກະລຸນາເລືອກພະແນກ";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // ปิด form ด้วย animation ก่อน
    setIsClosing(true);
    setTimeout(() => {
      // ส่งข้อมูลไปให้ parent จัดการ loading และ submit
      onSubmit(formData);

      // รีเซ็ต form
      setFormData({
        studentId: "",
        name: "",
        email: "",
        password: "",
        phone: "",
        status: "",
        role: "User",
        department: "",
      });
      setErrors({});
      setIsClosing(false);
    }, 300);
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setFormData({
        studentId: "",
        name: "",
        email: "",
        password: "",
        phone: "",
        status: "",
        role: "User",
        department: "",
      });
      setErrors({});
      setIsClosing(false);
    }, 300);
  };

  const handleCancel = () => {
    handleClose();
  };

  const roleOptions = [
    { value: "User", label: "User" },
    { value: "Admin", label: "Admin" },
    { value: "Manager", label: "Manager" },
  ];

  const departmentOptions = [
    { value: "ພາກຄອມພິວເຕີ", label: "ພາກຄອມພິວເຕີ" },
    { value: "ພາກໄຟຟ້າ", label: "ພາກໄຟຟ້າ" },
    { value: "ພາກກົນຈັກ", label: "ພາກກົນຈັກ" },
    { value: "ພາກສິລະປະ", label: "ພາກສິລະປະ" },
  ];

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm ${
        isClosing ? "animate-fadeOut" : "animate-fadeIn"
      }`}
      onClick={handleClose}
    >
      <div
        className={`bg-white rounded-lg shadow-xl p-6 max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto ${
          isClosing ? "animate-slideDown" : "animate-slideUp"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-4  text-center border-b border-blue-400 pb-2">
          {user ? "ແກ້ໄຂຜູ້ໃຊ້" : "ສ້າງຜູ້ໃຊ້"}
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <FormInput
            label="ລະຫັດ"
            theme="light"
            placeholder=""
            value={formData.studentId}
            onChange={handleChange("studentId")}
            error={errors.studentId}
            hasError={!!errors.studentId}
          />

          <FormInput
            label="ຊື່"
            theme="light"
            placeholder=""
            value={formData.name}
            onChange={handleChange("name")}
            error={errors.name}
            hasError={!!errors.name}
          />

          <FormInput
            label="ອີເມວ"
            type="email"
            theme="light"
            placeholder=""
            value={formData.email}
            onChange={handleChange("email")}
            error={errors.email}
            hasError={!!errors.email}
          />

          {!user && (
            <FormInput
              label="ລະຫັດຜ່ານ"
              type="password"
              theme="light"
              placeholder=""
              value={formData.password}
              onChange={handleChange("password")}
              error={errors.password}
              hasError={!!errors.password}
            />
          )}

          <FormInput
            label="ເບີໂທ"
            theme="light"
            placeholder=""
            value={formData.phone}
            onChange={handleChange("phone")}
            error={errors.phone}
            hasError={!!errors.phone}
          />

          <FormInput
            label="ສະຖານະການໃຊ້ງານ"
            theme="light"
            placeholder=""
            value={formData.status}
            onChange={handleChange("status")}
            error={errors.status}
            hasError={!!errors.status}
          />

          <Select
            label="ບົດບາດ"
            theme="light"
            value={formData.role}
            onChange={handleChange("role")}
            options={roleOptions}
            placeholder="ເລືອກບົດບາດ"
            error={errors.role}
            hasError={!!errors.role}
          />

          <Select
            label="ພາກວິຊາ/ພະແນກ"
            theme="light"
            value={formData.department}
            onChange={handleChange("department")}
            options={departmentOptions}
            placeholder="ເລືອກພາກວິຊາ"
            error={errors.department}
            hasError={!!errors.department}
          />

          <div className="flex justify-end gap-3 pt-4">
            <Button
              type="button"
              fullWidth={false}
              variant="secondary"
              size="md"
              onClick={handleCancel}
            >
              ຍົກເລີກ
            </Button>
            <Button
              type="submit"
              fullWidth={false}
              variant="outline"
              size="md"
              className="bg-[#0F75BC] text-white hover:bg-blue-700"
            >
              ສຳເລັດ
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
