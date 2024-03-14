'use client';
import SearchBar from '@/components/SearchBar';
import { NextUIProvider } from '@nextui-org/react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NextUIProvider>
        <SearchBar />
      </NextUIProvider>
    </main>
  );
}
