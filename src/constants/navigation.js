/**
 * Navigation menu items for sidebar
 */
import HomeIcon from "../assets/icon/house-solid.svg";
import UsersIcon from "../assets/icon/Users.svg";


export const MENU_ITEMS = [
  {
    id: "home",
    label: "ໜ້າຫຼັກ",
    icon: HomeIcon,
    path: "/dashboard",
  },
  {
    id: "users",
    label: "ຈັດການຜູ້ໃຊ້",
       icon: UsersIcon,
    path: "/users",
    children: [
      {
        id: "users-list",
        label: "ຈັດການຜູ້ໃຊ້",
        path: "/users/list",
      },
      {
        id: "initial-system",
        label: "ລິເລີ່ມລະບົບເອກສານ",
        path: "/users/initial-system",
      },
    ],
  },
  {
    id: "documents",
    label: "ຮ້ອງຂໍເອກະສານ",
    icon: "📄",
    path: "/documents",
    children: [
      {
        id: "request-doc",
        label: "ສາທາດປ້ອງເອກູ",
        path: "/documents/request",
      },
      {
        id: "approve-doc",
        label: "ອົນຸມັດເອກະເອກສານ",
        path: "/documents/approve",
      },
    ],
  },
  {
    id: "reports",
    label: "ລາຍງານ",
    icon: "📊",
    path: "/reports",
    children: [
      {
        id: "report-list",
        label: "ແຜນການ",
        path: "/reports/plans",
      },
      {
        id: "summary",
        label: "ຊຳນານ",
        path: "/reports/summary",
      },
    ],
  },
  {
    id: "admin",
    label: "ຊຳນານ",
    icon: "⚙️",
    path: "/admin",
    children: [
      {
        id: "manage-users",
        label: "ການບໍລິຫານຜູ້ອະນຸຍາດ",
        path: "/admin/permissions",
      },
      {
        id: "manage-docs",
        label: "ການບໍລິຫານເອກສານ",
        path: "/admin/documents",
      },
      {
        id: "settings",
        label: "ການຕັ້ງຄ່າ",
        path: "/admin/settings",
      },
    ],
  },
];
