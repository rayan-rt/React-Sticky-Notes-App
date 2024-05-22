import "./App.css";
import { useEffect, useState } from "react";
import { NoteContextProvider } from "./Contexts/NoteContext";
import { AddButton, NoteContainer } from "./Components";

function App() {
	// state
	let [notes, setNotes] = useState(
		JSON.parse(localStorage.getItem("my-notes")) || [],
	);

	// functions
	const addNote = (note) => {
		let existing_note_i = notes.findIndex(
			(existing_note) => existing_note.id === note.id,
		);
		if (existing_note_i !== -1) {
			let updated_notes = [...notes];
			updated_notes[existing_note_i] = {
				...updated_notes[existing_note_i],
				content: note.content,
			};
			setNotes(updated_notes);
		} else {
			setNotes((prev_notes) => [...prev_notes, { ...note }]);
		}
	};

	const deleteNote = (id) => {
		setNotes((prev_notes) =>
			prev_notes.filter((prev_note) => prev_note.id !== id),
		);
	};

	// effect
	useEffect(() => {
		localStorage.setItem("my-notes", JSON.stringify(notes));
	}, [notes]);

	return (
		<NoteContextProvider value={{ notes, addNote, deleteNote }}>
			<div className="flex">
				<AddButton />
				<NoteContainer />
			</div>
		</NoteContextProvider>
	);
}

export default App;
