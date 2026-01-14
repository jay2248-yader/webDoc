import { useMemo, useState } from "react";
import UserToolbar from "../components/users/UserToolbar";
import UsersTable from "../components/users/UsersTable";
import UserFormModal from "../components/users/UserFormModal";
import LoadingDialog from "../components/common/LoadingDialog";
import SuccessDialog from "../components/common/SuccessDialog";
import { filterUsers, paginate, getTotalPages } from "../utils/filter";

const users = [
  {
    id: "001",
    studentId: "1111278",
    name: "ສຸພາພອນ",
    email: "soupaphone@gmail.com",
    status: "True",
    role: "User",
  },
  {
    id: "002",
    studentId: "1112278",
    name: "ສຸພາພອນ",
    email: "soupaphone@gmail.com",
    status: "True",
    role: "User",
  },
  {
    id: "003",
    studentId: "1112278",
    name: "ສຸພາພອນ",
    email: "soupaphone@gmail.com",
    status: "True",
    role: "User",
  },
  {
    id: "004",
    studentId: "1112278",
    name: "ສຸພາພອນ",
    email: "soupaphone@gmail.com",
    status: "True",
    role: "User",
  },
  {
    id: "005",
    studentId: "1112278",
    name: "ສຸພາພອນ",
    email: "soupaphone@gmail.com",
    status: "True",
    role: "User",
  },
  {
    id: "001",
    studentId: "1111278",
    name: "ສຸພາພອນ",
    email: "soupaphone@gmail.com",
    status: "True",
    role: "User",
  },
  {
    id: "002",
    studentId: "1112278",
    name: "ສຸພາພອນ",
    email: "soupaphone@gmail.com",
    status: "True",
    role: "User",
  },
  {
    id: "003",
    studentId: "1112278",
    name: "ສຸພາພອນ",
    email: "soupaphone@gmail.com",
    status: "True",
    role: "User",
  },
  {
    id: "004",
    studentId: "1112278",
    name: "ສຸພາພອນ",
    email: "soupaphone@gmail.com",
    status: "True",
    role: "User",
  },
  {
    id: "005",
    studentId: "1112278",
    name: "ສຸພາພອນ",
    email: "soupaphone@gmail.com",
    status: "True",
    role: "User",
  },{
    id: "001",
    studentId: "1111278",
    name: "ສຸພາພອນ",
    email: "soupaphone@gmail.com",
    status: "True",
    role: "User",
  },
  {
    id: "002",
    studentId: "1112278",
    name: "ສຸພາພອນ",
    email: "soupaphone@gmail.com",
    status: "True",
    role: "User",
  },
  {
    id: "003",
    studentId: "1112278",
    name: "ສຸພາພອນ",
    email: "soupaphone@gmail.com",
    status: "True",
    role: "User",
  },
  {
    id: "004",
    studentId: "1112278",
    name: "ສຸພາພອນ",
    email: "soupaphone@gmail.com",
    status: "True",
    role: "User",
  },
  {
    id: "005",
    studentId: "1112278",
    name: "ສຸພາພອນ",
    email: "soupaphone@gmail.com",
    status: "True",
    role: "User",
  },
];

export default function UserPage() {
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [showFormModal, setShowFormModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // 1) filter
  const filtered = useMemo(() => filterUsers(users, searchText), [searchText]);

  // 2) total pages
  const totalPages = useMemo(
    () => getTotalPages(filtered.length, pageSize),
    [filtered.length, pageSize]
  );

  // 3) safePage (derive only — no setState)
  const safePage = Math.min(Math.max(page, 1), totalPages);

  // 4) paginate
  const pageUsers = useMemo(
    () => paginate(filtered, safePage, pageSize),
    [filtered, safePage, pageSize]
  );

  const handleSearchChange = (v) => {
    setSearchText(v);
    setPage(1); // ✅ reset page at the source (event)
  };

  const handlePageSizeChange = (nextSize) => {
    setPageSize(nextSize);
    setPage(1); // ✅ reset page at the source (event)
  };

  const handlePageChange = (nextPage) => {
    // ✅ clamp before set (event)
    const clamped = Math.min(Math.max(nextPage, 1), totalPages);
    setPage(clamped);
  };

  const handleCreateUser = () => {
    setIsLoading(true);
    setEditingUser(null);

    // จำลองการโหลด form (ในกรณีที่ต้องโหลดข้อมูลก่อนเปิด form)
    setTimeout(() => {
      setIsLoading(false);
      setShowFormModal(true);
    }, 500);
  };

  const handleEditUser = (user) => {
    setIsLoading(true);
    setEditingUser(user);

    // จำลองการโหลด form (ในกรณีที่ต้องโหลดข้อมูลก่อนเปิด form)
    setTimeout(() => {
      setIsLoading(false);
      setShowFormModal(true);
    }, 500);
  };

  const handleCloseModal = () => {
    setShowFormModal(false);
    setEditingUser(null);
  };

  const handleSubmitUser = async (formData) => {
    // ปิด modal ก่อน (modal จะ slide down เอง)
    setShowFormModal(false);

    // รอ animation ของ modal เสร็จก่อน (300ms)
    await new Promise(resolve => setTimeout(resolve, 350));

    // แสดง loading dialog
    setIsLoading(true);

    // จำลองการเรียก API (ใช้เวลา 2 วินาที)
    await new Promise(resolve => setTimeout(resolve, 2000));

    if (editingUser) {
      console.log("update user", editingUser.id, formData);
      setSuccessMessage("ອັບເດດຜູ້ໃຊ້ສຳເລັດແລ້ວ");
    } else {
      console.log("create user", formData);
      setSuccessMessage("ສ້າງຜູ້ໃຊ້ສຳເລັດແລ້ວ");
    }

    // ปิด loading และแสดง success
    setIsLoading(false);
    setEditingUser(null);
    setShowSuccess(true);
  };

  const handleDeleteUser = async (user) => {
    // แสดง loading dialog
    setIsLoading(true);

    // จำลองการเรียก API (ใช้เวลา 1.5 วินาที)
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log("delete user", user);

    // ปิด loading และแสดง success
    setIsLoading(false);
    setSuccessMessage(`ລົບຜູ້ໃຊ້ "${user.name}" ສຳເລັດແລ້ວ`);
    setShowSuccess(true);
  };

  return (
    <div className="space-y-6">
      <UserToolbar
        searchText={searchText}
        onSearchChange={handleSearchChange}
        onCreate={handleCreateUser}
      />

      <UsersTable
        users={pageUsers}
        page={safePage}              // ✅ ใช้ safePage ใน UI
        pageSize={pageSize}
        totalPages={totalPages}
        totalItems={filtered.length}
        onEdit={handleEditUser}
        onDelete={handleDeleteUser}
        onPageChange={handlePageChange}
        onPageSizeChange={handlePageSizeChange}
      />

      <UserFormModal
        isOpen={showFormModal}
        user={editingUser}
        onClose={handleCloseModal}
        onSubmit={handleSubmitUser}
      />

      <LoadingDialog
        isOpen={isLoading}
        message={
          showFormModal
            ? editingUser
              ? "ກຳລັງອັບເດດຂໍ້ມູນ..."
              : "ກຳລັງສ້າງຜູ້ໃຊ້..."
            : "ກຳລັງໂຫຼດ..."
        }
      />

      <SuccessDialog
        isOpen={showSuccess}
        title="ສຳເລັດ"
        message={successMessage}
        onClose={() => setShowSuccess(false)}
        autoClose={true}
        autoCloseDuration={1500}
      />
    </div>
  );
}
