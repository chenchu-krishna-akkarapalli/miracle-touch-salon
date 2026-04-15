import { redirect } from 'next/navigation';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // In production, replace with real auth check (e.g., getServerSession)
  const isAuthenticated = true;

  if (!isAuthenticated) {
    redirect('/');
  }

  return (
    <div className="mx-auto max-w-[1440px] px-6 py-section lg:px-12">
      <div className="mb-8 border-b border-gold/30 pb-6">
        <h1 className="font-playfair text-3xl font-semibold text-white">
          My <span className="text-gold">Dashboard</span>
        </h1>
      </div>
      {children}
    </div>
  );
}
