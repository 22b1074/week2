import React, { useState } from 'react';
function Note({ note, onDelete, onEdit, changeColor}) {
    const [isEdit, setIsEdit] = useState(false);
    const [title, setTitle] = useState(note.title);
    const [content, setContent] = useState(note.content);
    const handleSave = () => {
        onEdit(note.id, { title, content });
        setIsEdit(false);
    };

    return (
        <div className="card mb-3" style={{ backgroundColor:note.backgroundColor }}>
            <div className="card-body">
                {isEdit ? (
                    <>
                        <input 
                            type='text'
                            className='form-control mb-2'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <textarea
                            className='form-control mb-2'
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        ></textarea>
                        <button className='btn btn-primary me-2' onClick={handleSave}>Save</button>
                        <button className='btn btn-secondary' onClick={() => setIsEdit(false)}>Cancel</button>
                    </>
                ) : (
                    <>
                        <h5 className='card-title'>{note.title}</h5>
                        <p className='card-text'>{note.content}</p>
                        <button className='btn btn-danger me-2' onClick={() => onDelete(note.id)}>Delete</button>
                        <button className='btn btn-secondary me-2' onClick={() => setIsEdit(true)}>Edit</button>
                    </>
                )}
            </div>
        </div>
    );
}

export default Note;