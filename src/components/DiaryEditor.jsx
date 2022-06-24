import React, { useState, useRef } from 'react'

const DiaryEditor = ({createDiaryData}) => {

  // const [author, setAuthor] = usediaryInput(''); //diaryInput that manages input
  // const [content, setContent] = usediaryInput(''); //diaryInput that manages textarea

  const authorInput = useRef();
  const contentInput = useRef();

  const [diaryInput, setDiaryInput] = useState({
    author: '',
    content: '',
    emotion: 1
  })

  const onChangeHandler = (e) => {
    // console.log(e.target.name)
    // console.log(e.target.value)
    setDiaryInput({
      ...diaryInput,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = () => {
    if(diaryInput.author.length < 1) {
      authorInput.current.focus();
      return; //break
    }

    if(diaryInput.content.length < 5) {
      contentInput.current.focus();
      return;
    }

    createDiaryData(diaryInput);
    // alert('Saved')
  }

  return (
    <div className='DiaryEditor'>
      <div style={{fontWeight: 'bold'}}>
        Today's Diary
      </div>
      <div>
        <input
          ref={authorInput} 
          name='author'
          value={diaryInput.author}
          onChange={onChangeHandler} 
        />
      </div>
      <div>
        <textarea
          ref={contentInput} 
          name='content'
          value={diaryInput.content}
          onChange={onChangeHandler}
        />
      </div>
      <div>
        <span>How are you feeling today? : </span>
        <select
          name='emotion'
          value={diaryInput.emotion}
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
