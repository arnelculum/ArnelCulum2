import React from 'react';

export function MainContent({ children }: { children: React.ReactNode }) {
  return (
    <main className="pt-14 pb-16 md:pb-4 md:pl-64 min-h-screen bg-gray-100">
      <div className="p-4">
        {children}
      </div>
    </main>
  );
}