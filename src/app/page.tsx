'use client';
import ResultTable from '@/components/ResultTable';
import SearchBar from '@/components/SearchBar';
import { NextUIProvider } from '@nextui-org/react';

export default function Home() {
  return (
    <NextUIProvider>
      <main className="flex min-h-screen flex-col items-center p-24 gap-4">
        <SearchBar />
        <ResultTable />
      </main>
    </NextUIProvider>
  );
}
