import { useMemo, useState } from "react";
import UserToolbar from "../components/users/UserToolbar";
import UsersTable from "../components/users/UsersTable";
import UserFormModal from "../components/users/UserFormModal";
import LoadingDialog from "../components/common/LoadingDialog";
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
];

export default function UserPage() {
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [showFormModal, setShowFormModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);

    // จำลองการเรียก API (ใช้เวลา 2 วินาที)
    await new Promise(resolve => setTimeout(resolve, 2000));

    if (editingUser) {
      console.log("update user", editingUser.id, formData);
    } else {
      console.log("create user", formData);
    }

    setIsLoading(false);
    handleCloseModal();
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
        onDelete={(u) => console.log("delete", u)}
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
    </div>
  );
}
