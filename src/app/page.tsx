'use client';
import DatePickers from '@/components/DatePickers';
import ResultTable from '@/components/ResultTable';
import SearchBar from '@/components/SearchBar';
import { Providers } from '@/providers';

export default function Home() {
  return (
    <Providers>
      <main className="flex min-h-screen flex-col items-center p-24 gap-4">
        <SearchBar />
        <DatePickers />
        <ResultTable />
      </main>
    </Providers>
  );
}
