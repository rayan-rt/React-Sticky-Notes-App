import { createContext, useContext } from "react";

export let NoteContext = createContext({
	notes: [
		{
			id: 1,
			content: "",
			color: "",
		},
	],
	addNote: (note) => {},
	deleteNote: (id) => {},
});

export const NoteContextProvider = NoteContext.Provider;

export function useNoteContext() {
	return useContext(NoteContext);
}
