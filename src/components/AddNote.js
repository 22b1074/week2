import { use } from 'express/lib/router';
import React, { useState } from 'react';
function AddNote({ onAdd }) {
    const[title, setTitle] = useState('');
    const[content, setContent] = useState('');
    const [backgroundColor, setBackgroundColor] = useState('#ffffff');
    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd({ title, content, backgroundColor });
        setTitle('');
        setContent('');
        setBackgroundColor('#ffffff');
    };

    return(
        <form onSubmit={handleSubmit} className="mb-3" style={{ backgroundColor: backgroundColor}}>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div className="mb-3">
                <textarea
                    className="form-control"
                    placeholder="Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                ></textarea>    
            </div>  
            <div className='mb-3'>
                <label htmlFor="colorPicker" className='form-label'>Background Color</label>
                <input
                    type='color'
                    className='form-control form-control-color'
                    id='colorPicker'
                    value={backgroundColor}
                    onChange={(e) => setBackgroundColor(e.target.value)}
                />
            </div>
            <button type="submit" className="btn btn-primary" >Add Note</button>        
        </form>
    );
}
export default AddNote;