import Button from "../common/Button";
import FormInput from "../common/FormInput";

import userplus from "../../assets/icon/userplus.svg";
import search from "../../assets/icon/search.svg";

export default function UserToolbar({ searchText, onSearchChange, onCreate }) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="w-full md:max-w-md">
        <FormInput
          label=""
          theme="light"
          placeholder="ຄົ້ນຫາ"
          value={searchText}
          onChange={(e) => onSearchChange(e.target.value)}
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

      <Button
        fullWidth={false}
        variant="ghost"
        size="sm"
        onClick={onCreate}
        className="bg-[#0F75BC] text-white hover:bg-blue-700 hover:scale-100 hover:shadow-none"
      >
        <span className="flex items-center gap-2">
          <img src={userplus} alt="Add user" className="h-7 w-7 brightness-0 invert" />
          ສ້າງ User
        </span>
      </Button>
    </div>
  );
}
