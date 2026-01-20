import { useState, useMemo, useRef } from "react";
import GenericToolbar from "../components/common/GenericToolbar";
import GenericDataTable, { Button } from "../components/common/GenericDataTable";
import BranchFormModal from "../components/branches/BranchFormModal";
import LoadingDialog from "../components/common/LoadingDialog";

const branches = [
  {
    createdate: "2025-11-13 14:14:50",
    brid: "2",
    branchname: "CSC ສໍານັກງານໃຫ່ຍ ນະຄອນຫຼວງວຽງຈັນ",
    phone: "",
    fax: "",
    moreinfo: "ບ້ານໂຊກໃຫ່ຍ ເມືອງໄຊເສດຖາ ນະຄອນຫຼວງວຽງຈັນ, ຖະໜົນ 450 ປີ.",
    statustype: "ADD",
    createby: "1111982",
  },
  {
    createdate: "2025-12-01 09:30:00",
    brid: "3",
    branchname: "CSC ສາຂາປາກເຊ",
    phone: "020-23456789",
    fax: "",
    moreinfo: "ຕະຫຼາດດາວເຮືອງ, ປາກເຊ, ຈຳປາສັກ",
    statustype: "ADD",
    createby: "1111982",
  },
];

export default function BranchPage() {
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [showFormModal, setShowFormModal] = useState(false);
  const [editingBranch, setEditingBranch] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Reference to the delete handler from GenericDataTable
  const tableRef = useRef(null);

  // 1) Filter branches
  const filtered = useMemo(() => {
    if (!searchText) return branches;
    const lower = searchText.toLowerCase();
    return branches.filter(
      (b) =>
        b.brid.toString().includes(lower) ||
        b.branchname.toLowerCase().includes(lower) ||
        b.moreinfo.toLowerCase().includes(lower) ||
        b.createby.toLowerCase().includes(lower)
    );
  }, [searchText]);

  // 2) Total pages
  const totalPages = Math.ceil(filtered.length / pageSize) || 1;

  // 3) Safe page
  const safePage = Math.min(Math.max(page, 1), totalPages);

  // 4) Paginate
  const pageBranches = useMemo(
    () => filtered.slice((safePage - 1) * pageSize, safePage * pageSize),
    [filtered, safePage, pageSize]
  );

  const handleSearchChange = (v) => {
    setSearchText(v);
    setPage(1);
  };

  const handlePageSizeChange = (nextSize) => {
    setPageSize(nextSize);
    setPage(1);
  };

  const handlePageChange = (nextPage) => {
    const clamped = Math.min(Math.max(nextPage, 1), totalPages);
    setPage(clamped);
  };

  const handleCreateBranch = () => {
    setIsLoading(true);
    setEditingBranch(null);

    setTimeout(() => {
      setIsLoading(false);
      setShowFormModal(true);
    }, 500);
  };

  const handleEditBranch = (branch) => {
    setIsLoading(true);
    setEditingBranch(branch);

    setTimeout(() => {
      setIsLoading(false);
      setShowFormModal(true);
    }, 500);
  };

  const handleCloseModal = () => {
    setShowFormModal(false);
    setEditingBranch(null);
  };

  const handleSubmitBranch = async (formData) => {
    const isEdit = !!editingBranch;

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    if (isEdit) {
      console.log("update branch", editingBranch.brid, formData);
    } else {
      console.log("create branch", formData);
    }
  };

  const handleDeleteBranch = async (branch) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("delete branch", branch);
  };

  // Define columns configuration
  const columns = [
    {
      key: "index",
      label: "ລຳດັບ",
      align: "left",
      render: (item, index, page, pageSize) => (page - 1) * pageSize + index + 1,
    },
    {
      key: "brid",
      label: "ລະຫັດ",
      align: "left",
    },
    {
      key: "branchname",
      label: "ຊື່ສາຂາ",
      align: "left",
    },
    {
      key: "createdate",
      label: "ວັນທີສ້າງ",
      align: "left",
    },
    {
      key: "phone",
      label: "ເບີໂທ",
      align: "left",
    },
    
    {
      key: "moreinfo",
      label: "ລາຍລະອຽດເພີ່ມເຕີມ",
      align: "left",
    },
    {
      key: "createby",
      label: "ສ້າງໂດຍ",
      align: "left",
    },
    {
      key: "statustype",
      label: "ສະຖານະ",
      align: "left",
      render: (branch) => (
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            branch.statustype === "ADD"
              ? "bg-green-100 text-green-800"
              : "bg-gray-100 text-gray-800"
          }`}
        >
          {branch.statustype}
        </span>
      ),
    },
    {
      key: "actions",
      label: "ຈັດການ",
      align: "left",
      render: (branch) => (
        <div className="flex items-center gap-2">
          <Button
            fullWidth={false}
            variant="ghost"
            size="sm"
            onClick={() => handleEditBranch(branch)}
            className="w-16 inline-flex items-center justify-center rounded-md bg-blue-200 px-2 py-1 text-xs text-blue-700 hover:bg-blue-50 hover:scale-100 hover:shadow-none"
          >
            ແກ້ໄຂ
          </Button>

          <Button
            fullWidth={false}
            variant="ghost"
            size="sm"
            onClick={() => tableRef.current?.handleDeleteClick?.(branch)}
            className="w-16 inline-flex items-center justify-center rounded-md bg-red-400 px-2 py-1 text-xs text-white hover:bg-red-500 hover:scale-100 hover:shadow-none"
          >
            ລົບ
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <GenericToolbar
        searchText={searchText}
        onSearchChange={handleSearchChange}
        onCreate={handleCreateBranch}
        searchPlaceholder="ຄົ້ນຫາສາຂາ..."
        createButtonText="ເພີ່ມສາຂາ"
        createButtonIcon={
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        }
      />

      <GenericDataTable
        data={pageBranches}
        columns={columns}
        page={safePage}
        pageSize={pageSize}
        totalPages={totalPages}
        totalItems={filtered.length}
        onEdit={handleEditBranch}
        onDelete={handleDeleteBranch}
        onPageChange={handlePageChange}
        onPageSizeChange={handlePageSizeChange}
        entityName="ສາຂາ"
        getEntityDisplayName={(branch) => branch.branchname}
        ref={tableRef}
      />

      <BranchFormModal
        isOpen={showFormModal}
        branch={editingBranch}
        onClose={handleCloseModal}
        onSubmit={handleSubmitBranch}
      />

      <LoadingDialog isOpen={isLoading} message="ກຳລັງໂຫຼດ..." />
    </div>
  );
}
