import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800">
      <header className="bg-blue-600 text-white py-4 px-6 text-xl font-bold">
        Dev Notes 📓
      </header>

      <main className="flex-1 p-6">{children}</main>

      <footer className="bg-gray-800 text-white text-center py-2">
        © {new Date().getFullYear()} - Josué's MicroVlogs
      </footer>
    </div>
  );
};

export default MainLayout;
