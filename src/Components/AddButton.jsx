import { useState } from "react";
import { useNoteContext } from "../Contexts/NoteContext";

const AddButton = () => {
	// variables
	let colors = ["purple", "blue", "orange", "violet", "salmon"];

	// state
	let [show_colors, setShowColors] = useState(false);

	// context
	let { addNote } = useNoteContext();

	return (
		<div className="w-fit p-4 h-screen flex flex-col gap-4">
			<button
				onClick={() => setShowColors((prev_state) => !prev_state)}
				type="button"
				className="p-2 w-8 h-8 text-xl font-semibold flex justify-center items-center rounded-full bg-white text-black duration-200 active:scale-95"
			>
				+
			</button>
			<ul
				className={`transition-all duration-300 flex flex-col items-center justify-center gap-2
                ${
					show_colors
						? "pointer-events-auto opacity-100"
						: "pointer-events-none opacity-0"
				}`}
			>
				{colors.map((color, i) => (
					<li
						onClick={() =>
							addNote({
								id: Date.now(),
								content: "",
								color: color,
							})
						}
						key={i}
						className="w-6 h-6 rounded-full duration-200 active:scale-95"
						style={{ backgroundColor: color }}
					></li>
				))}
			</ul>
		</div>
	);
};

export default AddButton;
