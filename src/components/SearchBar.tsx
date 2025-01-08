"use client";

import { Search } from "lucide-react";

import Form from "next/form";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const router = useRouter();

  const handleAction = (formData: FormData) => {
    //if empty string, do nothing
    if (!formData.get("q")) return;

    const trimmed = formData.get("q")?.toString().trim();

    //handle spaces and join with +
    const query = trimmed?.split(" ").join("+");

    //redirect to search page
    router.push(`/search?q=${query}`);
  };
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Form action={handleAction} className="relative">
        <input
          name="q"
          placeholder="Search for events..."
          className="w-full py-3 px-4 pl-12 bg-white rounded-xl border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
        />
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        <button
          type="submit"
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
        >
          Search
        </button>
      </Form>
    </div>
  );
}
