// TextEditor.js (I have Used Jodit)

import React, { useRef, useEffect } from 'react';
import Jodit from 'jodit';
import 'jodit/build/jodit.min.css'; // Import Jodit styles

const TextEditor = ({ name }) => {
  const editorRef = useRef(null);

  useEffect(() => {
    const editor = Jodit.make(editorRef.current, {
      // Additional options as per your requirements
      buttons: ['bold', 'italic', 'underline', '|', 'font', 'fontsize', 'brush', 'paragraph', '|', 'insertimage'],
    });

    // Listen for changes and update the form field
    editor.events.on('change', () => {
      const content = editor.value;
      document.getElementsByName(name)[0].value = content;
    });

    return () => {
      editor.destroy(); // Cleanup when the component unmounts
    };
  }, [name]);

  return <div ref={editorRef} />;
};

export default TextEditor;
