import React, { useRef, useState } from 'react'
import './App.css'
import DiaryEditor from './components/DiaryEditor'
import DiaryList from './components/DiaryList'
import { nanoid } from 'nanoid'

const App = () => {

  const [diaryData, setDiaryData] = useState([]);
  
  // const dataId = useRef(0);

  const createDiaryData = (diaryInput) => { //Create a new diary function.
    console.log(diaryInput);
    const createdAt = new Date().getTime(); //Real time
    const tempId = nanoid();
    
    setDiaryData([
      ...diaryData,
      {
        ...diaryInput,
        id: tempId,
        createdAt: createdAt
      }
    ]);

    // 위로 먼저 나오게 하려면, 여기서 filtering을 하던, unShift를 해야 한다.

    // const newItem = { 
    //   author, 
    //   content, 
    //   emotion,
    //   createdAt,
    //   id: dataId.current 
    // }

    // diaryId.current += 1; //처음에는 0번째 id, 그다음은 1번째 id,
    // setDiaryData([newItem, ...diaryData]) //새로운 일기를 추가하면 맨 위로 와야하기에 newItem을 먼저 씀.
  }

  const deleteDiaryData = (diaryId) => {
    // findIndex
    const index = diaryData.findIndex((diary) => diary.id === diaryId);
    // splice
    const copyDiaryData = [...diaryData];
    copyDiaryData.splice(index, 1);
    setDiaryData(copyDiaryData)
  }

  return (
    <div>
      <div style={{border: '2px solid red'}}><DiaryEditor createDiaryData={createDiaryData}/></div>
      <div style={{border: '2px solid red'}}><DiaryList diaryList={diaryData} deleteDiaryData={deleteDiaryData}/></div>
    </div>
  )
}

export default App;