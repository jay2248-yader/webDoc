export default function DataTable({ children, footer }) {
  return (
    <div className="overflow-hidden rounded-xl border border-blue-100 bg-white shadow-sm">
      {children}
      {footer ? (
        <div>
          <hr className="mx-6 border-blue-400" />
          <div >{footer}</div>
        </div>
      ) : null}
    </div>
  );
}
