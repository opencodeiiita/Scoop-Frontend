
import React, { useEffect, useState } from 'react'
import JoditEditor from 'jodit-react'
import { useRef, useMemo } from 'react'
const Home = () => {
    const editor = useRef(null)
    const [content, setContent] = useState('')
  return (<>
    <JoditEditor
			ref={editor}
			value={content}
			
			onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
			onChange={newContent => {setContent(newContent)}}
		/>
        {content}
        </>
  )
}

export default Home