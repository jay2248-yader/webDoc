import { useState } from "react";
import DataTable from "../common/DataTable";
import Button from "../common/Button";
import ConfirmDialog from "../common/ConfirmDialog";
import PaginationBar from "./PaginationBar";

export default function UsersTable({
  users,
  page,
  pageSize,
  totalPages,
  totalItems,
  onEdit,
  onDelete,
  onPageChange,
  onPageSizeChange,
}) {
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  const handleDeleteClick = (user) => {
    setUserToDelete(user);
    setShowConfirmDialog(true);
  };

  const handleConfirmDelete = () => {
    if (userToDelete) {
      onDelete(userToDelete);
    }
    setShowConfirmDialog(false);
    setUserToDelete(null);
  };

  const handleCancelDelete = () => {
    setShowConfirmDialog(false);
    setUserToDelete(null);
  };

  return (
    <DataTable
      footer={
        <PaginationBar
          page={page}
          totalPages={totalPages}
          pageSize={pageSize}
          totalItems={totalItems}
          onPageChange={onPageChange}
          onPageSizeChange={onPageSizeChange}
        />
      }
    >
      <table className="min-w-full text-sm">
        <thead className="bg-[#0F75BC] text-white">
          <tr>
            <th className="px-4 py-3 text-left font-semibold">ລຳດັບ</th>
            <th className="px-4 py-3 text-left font-semibold">ລະຫັດ</th>
            <th className="px-4 py-3 text-left font-semibold">ຊື່</th>
            <th className="px-4 py-3 text-left font-semibold">ອີເມວ</th>
            <th className="px-4 py-3 text-left font-semibold">ສະຖານະການໃຊ້ງານ</th>
            <th className="px-4 py-3 text-left font-semibold">ບົດບາດ</th>
            <th className="px-4 py-3 text-left font-semibold">ຈັດການ</th>
          </tr>
        </thead>

        <tbody className="text-gray-700">
          {users.length === 0 ? (
            <tr>
              <td colSpan={7} className="px-4 py-10 text-center text-gray-500">
                ບໍ່ພົບຂໍ້ມູນ
              </td>
            </tr>
          ) : (
            users.map((user) => (
              <tr key={user.id} className="border-b border-blue-100 last:border-b-0">
                <td className="px-4 py-3">{user.id}</td>
                <td className="px-4 py-3">{user.studentId}</td>
                <td className="px-4 py-3">{user.name}</td>
                <td className="px-4 py-3">{user.email}</td>
                <td className="px-4 py-3">{user.status}</td>
                <td className="px-4 py-3">{user.role}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Button
                      fullWidth={false}
                      variant="ghost"
                      size="sm"
                      onClick={() => onEdit(user)}
                      className="w-16 inline-flex items-center justify-center rounded-md bg-blue-200 px-2 py-1 text-xs text-blue-700 hover:bg-blue-50 hover:scale-100 hover:shadow-none"
                    >
                      ແກ້ໄຂ
                    </Button>

                    <Button
                      fullWidth={false}
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDeleteClick(user)}
                      className="w-16 inline-flex items-center justify-center rounded-md bg-red-400 px-2 py-1 text-xs text-white hover:bg-red-500 hover:scale-100 hover:shadow-none"
                    >
                      ລົບ
                    </Button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <ConfirmDialog
        isOpen={showConfirmDialog}
        title="ຢືນຢັນການລົບ"
        message={
          <>
            ທ່ານແນ່ໃຈບໍ່ວ່າຕ້ອງການລົບຜູ້ໃຊ້{" "}
            <span className="font-semibold">{userToDelete?.name}</span>?
          </>
        }
        confirmText="ລົບ"
        cancelText="ຍົກເລີກ"
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
        danger={true}
      />
    </DataTable>
  );
}
