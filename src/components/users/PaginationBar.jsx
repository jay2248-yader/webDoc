import Button from "../common/Button";

export default function PaginationBar({
  page,
  totalPages,
  pageSize,
  totalItems,
  onPageChange,
  onPageSizeChange,
}) {
  const canPrev = page > 1;
  const canNext = page < totalPages;

  return (
    <div className="flex flex-col gap-3 px-6 py-4 text-sm text-gray-600 md:flex-row md:items-center md:justify-between">
      <div className="flex items-center gap-2">
        <span>ຈຳນວນລາຍການ</span>
        <select
          value={pageSize}
          onChange={(e) => onPageSizeChange(Number(e.target.value))}
          className="rounded-md border border-gray-200 px-2 py-1 text-sm focus:border-blue-400 focus:outline-none"
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </select>
      </div>

      <div className="flex items-center gap-2">
        <Button
          fullWidth={false}
          variant="outline"
          size="sm"
          disabled={!canPrev}
          onClick={() => onPageChange(1)}
          className="rounded-md border-gray-200 px-2 py-1 text-sm text-gray-500 hover:scale-100 hover:shadow-none"
        >
          «
        </Button>

        <Button
          fullWidth={false}
          variant="outline"
          size="sm"
          disabled={!canPrev}
          onClick={() => onPageChange(page - 1)}
          className="rounded-md border-gray-200 px-2 py-1 text-sm text-gray-500 hover:scale-100 hover:shadow-none"
        >
          ‹
        </Button>

        <span className="rounded-md border border-gray-200 px-3 py-1 text-sm">
          {page}
        </span>
        <span>/</span>
        <span>{totalPages}</span>
        <span className="text-gray-400">{totalItems} ລາຍການ</span>

        <Button
          fullWidth={false}
          variant="outline"
          size="sm"
          disabled={!canNext}
          onClick={() => onPageChange(page + 1)}
          className="rounded-md border-gray-200 px-2 py-1 text-sm text-gray-500 hover:scale-100 hover:shadow-none"
        >
          ›
        </Button>

        <Button
          fullWidth={false}
          variant="outline"
          size="sm"
          disabled={!canNext}
          onClick={() => onPageChange(totalPages)}
          className="rounded-md border-gray-200 px-2 py-1 text-sm text-gray-500 hover:scale-100 hover:shadow-none"
        >
          »
        </Button>
      </div>
    </div>
  );
}
