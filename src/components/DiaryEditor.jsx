import React, { useState } from 'react'

const DiaryEditor = () => {

  // const [author, setAuthor] = useState(''); //State that manages input
  // const [content, setContent] = useState(''); //State that manages textarea

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
    console.log(state)
    alert('Saved')
  }

  return (
    <div className='DiaryEditor'>
      <div>
        Today's Diary
      </div>
      <div>
        <input
          name='author'
          value={state.author} //현재 author의 상태는 비어있는 상태이고, 업데이트가 되지않는 State이므로 아무것도 적혀지지 않는다. 'setAuthor'로 업데이트를 해주면 Input안에 입력한 값들이 나온다. 입력한 값들이 업데이트된 states이다.  
          onChange={onChangeHandler} //onChange에 등록되는 콜백함수는 Parameter에 event를 전달받게 되고,     
        />
      </div>
      <div>
        <textarea
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
