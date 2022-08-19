import NoteCard from "./NoteCard"

export default function ArchiveContainer({ dataList, changeArchivedState, deleteNote }) {
    return (<>
        <div className="section__header">Archived Note</div>
        <div className="card__container">
            {dataList.length > 0 ? dataList
                .map(data => {
                    return <NoteCard key={data.id} data={data}
                        changeArchivedState={changeArchivedState}
                        deleteNote={deleteNote}
                    />
                }) : <div>No data</div>
            }
        </div>
    </>)
}