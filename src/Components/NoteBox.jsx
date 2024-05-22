import { useState } from "react";
import { useNoteContext } from "../Contexts/NoteContext";
import { IoSaveOutline } from "react-icons/io5";
import { FaRegTrashAlt } from "react-icons/fa";

const NoteBox = ({ note }) => {
	// state
	let [new_content, setNewContent] = useState(note.content);
	let [edit_mode, setEditMode] = useState(false);

	// context
	let { addNote, deleteNote } = useNoteContext();

	// function
	const update = (e) => {
		setNewContent(e.target.value);
		setEditMode(true);
	};

	const save = () => {
		addNote({
			...note,
			content: new_content,
		});
		setEditMode(false);
	};

	return (
		<div className="w-fit h-fit p-4 rounded-md">
			<textarea
				value={new_content}
				onChange={update}
				placeholder="Take a note..."
				className="w-[15rem] h-[15rem] p-4 text-lg rounded-xl border-none outline-none"
				style={{
					resize: "none",
					backgroundColor: note.color,
					color: "white",
				}}
			/>
			<div className="p-2 flex items-center justify-start gap-4">
				<button
					onClick={() => deleteNote(note.id)}
					type="button"
					className="p-2 bg-white text-black w-8 h-8 text-md flex justify-center items-center rounded-full duration-200 active:scale-95"
				>
					<FaRegTrashAlt />
				</button>
				{edit_mode && (
					<button
						onClick={save}
						type="button"
						className="p-2 bg-white text-black w-8 h-8 text-md flex justify-center items-center rounded-full duration-200 active:scale-95"
					>
						<IoSaveOutline />
					</button>
				)}
			</div>
		</div>
	);
};

export default NoteBox;
