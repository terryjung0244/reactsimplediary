import React, { useState, useRef } from 'react'

const DiaryEditor = () => {

  // const [author, setAuthor] = useState(''); //State that manages input
  // const [content, setContent] = useState(''); //State that manages textarea

  const authorInput = useRef();
  const contentInput = useRef();

  const [state, setState] = useState({
    author: '',
    content: '',
    emotion: 1
  })

  const onChangeHandler = (e) => {
    console.log(e.target.name)
    console.log(e.target.value)
    setState({...state, [e.target.name] : [e.target.value]})
  }

  const handleSubmit = () => {
    if(state.author.length < 1) {
      authorInput.current.focus();
      return; //입력방지
    }

    if(state.content.length < 3) {
      contentInput.current.focus();
      return;
    }

    alert('Saved')
  }

  return (
    <div className='DiaryEditor'>
      <div>
        Today's Diary
      </div>
      <div>
        <input
          ref={authorInput} 
          name='author'
          value={state.author}
          onChange={onChangeHandler} 
        />
      </div>
      <div>
        <textarea
          ref={contentInput} 
          name='content'
          value={state.content}
          onChange={onChangeHandler}
        />
      </div>
      <div>
        <span>How are you feeling today? : </span>
        <select
          name='emotion'
          value={state.emotion}
          onChange={onChangeHandler}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div onClick={handleSubmit}>
        <button>Save</button>
      </div>
    </div>
  )
}

export default DiaryEditor;
