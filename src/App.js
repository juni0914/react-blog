import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['역삼동 술집 추천', '역삼동 밥집 추천', '역삼동 놀 거리 추천']);
  let [좋아요, 좋아요변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');


  function 글제목변경함수(){
    var newArray = [...글제목];
    newArray[0] = "청담동 술집 추천!!"
    newArray[1] = "청담동 밥집이랑 놀거리 추천~~"
    글제목변경(newArray);
  }


  return (
    <div className="App">
      <div className = "black-nav">
        <div> 개발  Blog </div>
      </div>
      <button onClick={ 글제목변경함수 }>글제목변경버튼이야</button>
      {/* <div className="list">
        <h3> { 글제목[0] } <span onClick = { ()=>{ 좋아요변경(좋아요+1) }}>👍</span> {좋아요} </h3>
        <p> 7월 2일 발행</p>
        <hr/>
      </div>

      <div className="list">
        <h3 onClick={ ()=> { setModal(!modal) } }> { 글제목[1] } </h3>
        <p> 7월 2일 발행</p>
        <hr/>
      </div>

      <div className="list">
        <h3> { 글제목[2] } </h3>
        <p> 7월 3일 발행</p>
        <hr/>
      </div> */}

      { 
        글제목.map(function(a, i){
          return (
          <div className="list" key={i}>
              <h4 onClick={ ()=> { setModal(!modal); setTitle(i) } }  >{ 글제목[i] } 
              <span onClick={(e)=>{ e.stopPropagation(); 
                let copy = [...좋아요];
                copy[i] = copy[i] + 1;
                좋아요변경(copy)  
                  }}>👍</span> {좋아요[i]}  </h4>
            <p>2월 18일 발행</p>
            <button onClick={()=>{
              let copy = [...글제목];
              copy.splice(i,1);
              글제목변경(copy);
            }}> 삭제
            </button>
            <hr/>
          </div> )
        }) 
      }

      <input onChange={(e)=>{
        입력값변경(e.target.value);
        }}/>
      <button onClick={()=> {
      let copy = [...글제목];
      copy.unshift(입력값);
      글제목변경(copy)
    }}>글추가</button> 



      {
        modal === true ? <Modal title={title} color={'skyblue'} 글제목={글제목}/> : null
      }

    </div>
  );
}

function Modal(props){
  return(
    <div className='modal' style={{ background : props.color }}>
    <h2>{props.글제목[props.title]}</h2>
    <p>날짜</p>
    <p>상세내용</p>
  </div>
  )
}


export default App;
