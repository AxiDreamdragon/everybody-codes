import { createContext, useContext, useState, type ReactNode } from "react";

type SearchContextType = {
	searchQuery: string;
	setSearchQuery: (query: string) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

function SearchProvider({ children }: { children: ReactNode }) {
	const [searchQuery, setSearchQuery] = useState("");

	return (
		<SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
			{children}
		</SearchContext.Provider>
	);
}

export function useSearch() {
	const context = useContext(SearchContext);

	if (context === undefined) {
		throw new Error("useSearch must be used in a SearchProvider!");
	}

	return context;
}

export default SearchProvider;