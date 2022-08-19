import { showFormattedDate } from "../utils"
export default function NoteCard({ data, changeArchivedState, deleteNote }) {
    const { id, title, body, archived, createdAt } = data;

    function handleActionClick(e) {
        changeArchivedState({id, archived: !archived});
    }

    function handleDeleteClick(e){
        deleteNote(id);
    }

    return (
        <div className="card">
            <div className="card__data">
                <div className="card__title">{title}</div>
                <div className="card__timestamp">{ showFormattedDate(createdAt) }</div>
                <div className="card__body">{body}</div>
            </div>
            <div className="card__button__container">
                <button className="card__button border__right button__delete" onClick={ handleDeleteClick }>Delete</button>
                <button className="card__button border__left button__action" onClick={handleActionClick}>{archived ? 'Restore' : 'Archive'}</button>
            </div>
        </div>
    )
}