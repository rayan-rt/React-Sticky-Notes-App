import { useNoteContext } from "../Contexts/NoteContext";
import NoteBox from "./NoteBox";

const NoteContainer = () => {
  // context
  let { notes } = useNoteContext();

  return (
    <div className="w-full h-full">
      <h1 className="pt-4 text-xl md:text-3xl text-center font-semibold text-blue-500">
        Your Notes
      </h1>
      <div className="mt-4 w-full h-full p-2 grid grid-cols-4 gap-4">
        {notes.map((note) => (
          <NoteBox key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
};

export default NoteContainer;
