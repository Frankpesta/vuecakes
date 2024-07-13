"use client";
import { useRef, ReactNode } from "react";
import { Provider } from "react-redux";
import { makeStore } from "../redux/store";
import { Store } from "redux"; // Import the Store type from redux

interface StoreProviderProps {
	children: ReactNode;
}

export default function StoreProvider({ children }: StoreProviderProps) {
	const storeRef = useRef<Store | undefined>();

	if (!storeRef.current) {
		storeRef.current = makeStore();
	}

	return <Provider store={storeRef.current}>{children}</Provider>;
}
