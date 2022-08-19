import NoteCard from "./NoteCard"


export default function ActiveNoteContainer({ dataList, changeArchivedState, deleteNote }) {
    return (<>
        <div className="section__header">Active Note</div>
        <div className="card__container">
            {
                dataList.length > 0 ? dataList.map(data => {
                    return <NoteCard key={data.id} data={data}
                        changeArchivedState={changeArchivedState}
                        deleteNote={deleteNote}
                    />
                }) : <div>No data</div>
            }
        </div></>)
}