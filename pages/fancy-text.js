import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the styles

function FancyTextarea() {
    const [content, setContent] = useState('');

    return (
        <div>
            <ReactQuill
                value={content}
                onChange={setContent}
                placeholder="Start typing..."
            />
        </div>
    );
}

export default FancyTextarea;
