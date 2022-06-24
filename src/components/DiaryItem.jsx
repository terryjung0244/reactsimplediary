import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const DiaryItem = ({content, id, emotion, createdAt, author, deleteDiaryData}) => {

  console.log(content, id, emotion, createdAt, author);

  return (
    <div className='DiaryItem'>
      <div className='info'>
        <div className='infoSub'>
          <div>Writer : {author} | Happiness : {emotion}</div>
          <div><EditIcon className='editIcon'/> | <DeleteIcon onClick={() => deleteDiaryData(id)}/></div>
        </div>
        <br/>
        <span className='date'>
          {new Date(createdAt).toLocaleString()}
        </span>
      </div>
      <div className='content'>{content}</div>
    </div>
  )
}

export default DiaryItem
