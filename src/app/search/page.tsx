"use client";
import { useSearchParams } from "next/navigation";
import * as React from "react";

const SearchPage: React.FC = ({}) => {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-4">
        Search Results for &quot;{query}&quot;
      </h1>
    </main>
  );
};

export default SearchPage;
