import SidebarNoteList from '@/components/SidebarNoteListFilter';
// import SidebarNoteItem from '@/components/SidebarNoteItem';
import SidebarNoteItemHeader from '@/components/SidebarNoteItemHeader';
import { getAllNotes } from '@/lib/redis';
import {sleep} from '@/lib/utils';

export default async function NoteList() {

  await sleep(500);
  const notes = await getAllNotes()

  const arr = Object.entries(notes);

  if (arr.length == 0) {
    return <div className="notes-empty">
      {'No notes created yet!'}
    </div>
  }

  return (
    <SidebarNoteList notes = {
      Object.entries(notes).map(([noteId, note]) => {
        const noteData = JSON.parse(note)
        return {
          noteId,
          note: noteData,
          header: <SidebarNoteItemHeader title={noteData.title} updateTime={noteData.updateTime} />
        }
      })
    } />
  )
}