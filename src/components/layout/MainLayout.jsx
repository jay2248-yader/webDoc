import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

/**
 * MainLayout - Main application layout with Sidebar and Header
 * @param {Object} props
 * @param {string} props.title - Page title for header
 */
export default function MainLayout({ title }) {
  const location = useLocation();

  const resolveTitle = (pathname) => {
    if (pathname.startsWith('/users')) {
      return 'ຈັດການ User';
    }
    if (pathname.startsWith('/dashboard')) {
      return 'ໜ້າຫຼັກ';
    }
    return 'ໜ້າຫຼັກ';
  };

  const resolvedTitle = title || resolveTitle(location.pathname);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header title={resolvedTitle} />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
