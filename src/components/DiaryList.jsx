import React from 'react'
import DiaryItem from './DiaryItem'
import { dummyList } from '../service/DummyList'

const DiaryList = ({diaryList, deleteDiaryData}) => {
  console.log(diaryList);

  return (
    <div className='DiaryList'>
      <h3>Diary List</h3>
      <div>
        {diaryList.map((diary) => (
          <DiaryItem key={diary.id} {...diary} deleteDiaryData={deleteDiaryData}/>
        ))}
      </div>
    </div>
  )
}

export default DiaryList;
