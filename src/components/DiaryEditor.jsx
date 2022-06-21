import React, { useState } from 'react'

const DiaryEditor = () => {

  const [state, setState] = useState({
    auther: '',
    content: ''
  })

  return (
    <div>
      <h1>
        Today's Diary
      </h1>
      <div>
        <input 
          name='auther'
          placeholder='Let me hear your story'
          value={state.auther}
          onChange={(e) => {
            setState({...state, auther: e.target.value})
          }}
        />
      </div>
      <div>
        <textarea
          value={state.content}
          onChange={(e) => {
            setState({...state, content: e.target.value})
          }}
        />
      </div>
    </div>
  )
}

export default DiaryEditor
