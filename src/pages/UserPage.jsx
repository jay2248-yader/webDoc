import { useMemo, useState } from "react";
import Button from "../components/common/Button";
import FormInput from "../components/common/FormInput"; // ✅ ปรับ path ให้ตรงโปรเจกต์คุณ

import userplus from "../assets/icon/userplus.svg";
import search from "../assets/icon/search.svg"; // ✅ ใช้ไฟล์ search.svg

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

  const filteredUsers = useMemo(() => {
    const q = searchText.trim().toLowerCase();
    if (!q) return users;

    return users.filter((u) => {
      const text = `${u.id} ${u.studentId} ${u.name} ${u.email} ${u.status} ${u.role}`.toLowerCase();
      return text.includes(q);
    });
  }, [searchText]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        {/* ✅ Search (FormInput) */}
        <div className="w-full md:max-w-md">
          <FormInput
            label=""
            theme="light"
            placeholder="ຄົ້ນຫາ"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
rightIcon={
  <img
    src={search}
    alt="search"
    className="h-4 w-4"
    style={{
      filter:
        "invert(32%) sepia(96%) saturate(1832%) hue-rotate(186deg) brightness(92%) contrast(87%)",
    }}
  />
}

          />
        </div>

        {/* ✅ Create User Button + icon */}
        <Button
          fullWidth={false}
          variant="ghost"
          size="sm"
          className="bg-[#0F75BC] text-white hover:bg-blue-700 hover:scale-100 hover:shadow-none"
        >
          <span className="flex items-center gap-2">
            <img
              src={userplus}
              alt="Add user"
              className="h-8 w-8 brightness-0 invert"
            />
            ສ້າງຜູ້ໃຊ້
          </span>
        </Button>
      </div>

      <div className="overflow-hidden rounded-xl border border-blue-100 bg-white shadow-sm">
        <table className="min-w-full text-sm">
          <thead className="bg-[#0F75BC] text-white">
            <tr>
              <th className="px-4 py-3 text-left font-semibold">ລຳດັບ</th>
              <th className="px-4 py-3 text-left font-semibold">ລະຫັດ</th>
              <th className="px-4 py-3 text-left font-semibold">ຊື່</th>
              <th className="px-4 py-3 text-left font-semibold">ອີເມວ</th>
              <th className="px-4 py-3 text-left font-semibold">
                ສະຖານະການໃຊ້ງານ
              </th>
              <th className="px-4 py-3 text-left font-semibold">ບົດບາດ</th>
              <th className="px-4 py-3 text-left font-semibold">ຈັດການ</th>
            </tr>
          </thead>

          <tbody className="text-gray-700">
            {filteredUsers.length === 0 ? (
              <tr>
                <td colSpan={7} className="px-4 py-10 text-center text-gray-500">
                  ບໍ່ພົບຂໍ້ມູນ
                </td>
              </tr>
            ) : (
              filteredUsers.map((user) => (
                <tr
                  key={user.id}
                  className="border-b border-blue-100 last:border-b-0"
                >
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
                        className="w-16 inline-flex items-center justify-center rounded-md bg-blue-200 px-2 py-1 text-xs text-blue-700 hover:bg-blue-50 hover:scale-100 hover:shadow-none"
                      >
                        ແກ້ໄຂ
                      </Button>
                      <Button
                        fullWidth={false}
                        variant="ghost"
                        size="sm"
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

        <div className="flex flex-col gap-3 border-t border-blue-200 px-6 py-4 text-sm text-gray-600 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <span>ຈຳນວນລາຍການ</span>
            <select className="rounded-md border border-gray-200 px-2 py-1 text-sm focus:border-blue-400 focus:outline-none">
              <option>10</option>
              <option>20</option>
              <option>50</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <Button
              fullWidth={false}
              variant="outline"
              size="sm"
              className="w-auto rounded-md border-gray-200 px-2 py-1 text-sm text-gray-500 hover:scale-100 hover:shadow-none"
            >
              «
            </Button>
            <Button
              fullWidth={false}
              variant="outline"
              size="sm"
              className="w-auto rounded-md border-gray-200 px-2 py-1 text-sm text-gray-500 hover:scale-100 hover:shadow-none"
            >
              ‹
            </Button>

            <span className="rounded-md border border-gray-200 px-3 py-1 text-sm">
              1
            </span>
            <span>/</span>
            <span>3</span>
            <span className="text-gray-400">20 ລາຍການ</span>

            <Button
              fullWidth={false}
              variant="outline"
              size="sm"
              className="w-auto rounded-md border-gray-200 px-2 py-1 text-sm text-gray-500 hover:scale-100 hover:shadow-none"
            >
              ›
            </Button>
            <Button
              fullWidth={false}
              variant="outline"
              size="sm"
              className="w-auto rounded-md border-gray-200 px-2 py-1 text-sm text-gray-500 hover:scale-100 hover:shadow-none"
            >
              »
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
