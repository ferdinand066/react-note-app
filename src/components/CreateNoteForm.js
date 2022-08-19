export default function CreateNoteForm ({title, body, setTitle, setBody, addNoteList}){
    function handleTitleChange(e){
        if (title.length >= 50) return;
        setTitle(e.target.value);
    }

    function handleTitleKeyUp(e){
        if (e.code === 'Backspace') setTitle(title.slice(0, - 1));
    }

    function handleBodyChange(e){
        setBody(e.target.value);
    }

    function handleOnSubmit(e){
        e.preventDefault();
        const data = { id: +new Date(), title, body, archived: false, createdAt: new Date().toISOString() }
        addNoteList(data);
        setTitle('');
        setBody('');
    }

    return (
        <form className="create__note__container" onSubmit={ handleOnSubmit }>
            <div className="section__header">
                Create Note
            </div>
            <div className="character__counter">
                Character left : { 50 - title.length }
            </div>
            <input type="text" className="form__input" placeholder="Input title..." value={ title } onKeyUp={ handleTitleKeyUp } onChange={ handleTitleChange } />
            <textarea name="" id="" cols="30" rows="10" placeholder="Input body..." onChange={ handleBodyChange } value={ body }></textarea>
            <button type="submit" className="form__button">Create</button>
        </form>
    )
}