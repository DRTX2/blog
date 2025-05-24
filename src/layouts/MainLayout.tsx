import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen bg-tech-black text-gray-light flex flex-col">
      <header className="w-full bg-cyber-gray py-4 px-6 text-xl font-bold shadow-lg text-electric-deep-blue">
        Dev Notes 🧠
      </header>

      <main className="flex-1 w-full px-8 py-6">
        {children}
      </main>

      <footer className="w-full bg-cyber-gray text-center py-3 text-sm text-gray-light">
        © {new Date().getFullYear()} - David's MicroVlogs
      </footer>
    </div>
  );
};


export default MainLayout;
