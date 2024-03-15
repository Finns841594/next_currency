'use client';
import { Providers } from '@/providers';
import DatePickers from './components/DatePickers';
import ResultTable from './components/ResultTable';
import SearchBar from './components/SearchBar';

export default function Home() {
  return (
    <Providers>
      <main className="flex flex-row items-top p-24 gap-8 mx-auto justify-center">
        <div className="flex flex-col gap-4">
          <SearchBar />
          <DatePickers />
        </div>
        <ResultTable />
      </main>
    </Providers>
  );
}
