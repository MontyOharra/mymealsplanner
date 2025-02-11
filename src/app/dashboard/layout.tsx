import Sidebar from "./_components/Sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-800 text-white">
      <Sidebar />
      <main className="flex-1 flex items-center justify-center">
        {children}
      </main>
    </div>
  );
}