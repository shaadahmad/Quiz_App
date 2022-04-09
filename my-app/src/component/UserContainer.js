import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { fetchUsers, userAnswer } from '../redux/User/userAction'




function UserContainer({ userData, fetchUsers, userAnswer, currentLoginPlayer }) {




  const [Show, setShow] = useState(false)
  const [next, setNext] = useState(0);
  const [score, setScore] = useState(0);
  const [answer, setAns] = useState('')
  const [s_answer, setS_Ans] = useState([])

  const [disableSubmit, setDisableSubmit] = useState(false)
  const [disableRadio, setDisableRadio] = useState(false)

  const [currentPlayer, setCurrentPlayer] = useState('')


  const handleShow = () => setShow(true)
  useEffect(() => {
    fetchUsers()
  }, [])


  function checkAnswer() {

    setDisableRadio(true)
    setDisableSubmit(true)
    if (answer === userData[next].ans) {
      setScore(score + 1)


    }
    setS_Ans([...s_answer, answer])

    
  }
  const handleNext = () => {

    setDisableRadio(false)

    setDisableSubmit(false)

    setNext(next + 1)
    console.log(next);
    if(next == userData.length-1) userAnswer({ selectedAns: s_answer })
  }

  function handleChange(e) {
    setAns(e)
  }
  // console.log(answer)
  return userData.loading ? (
    <h2>Loading</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : Show ? next < userData.length ? (

    <div className='qBackground'>
      <h2>Quiz </h2>
      <div>

        <form className='quizForm'>
          <p>{userData[next].Question}</p>
          <div className='options'>
            <input type="radio" disabled={disableRadio} id="a" name="fav_language" value="a" onChange={(e) => handleChange(e.target.value)} />
            <label for="html">{userData[next].a}</label><br /><br />
          </div>

          <div className='options'>
            <input type="radio" id="b" disabled={disableRadio} name="fav_language" value="b" onChange={(e) => handleChange(e.target.value)} />
            <label for="css">{userData[next].b}</label><br /><br />
          </div>

          <div className='options'>
            <input type="radio" id="c" name="fav_language" disabled={disableRadio} value="c" onChange={(e) => handleChange(e.target.value)} />
            <label for="javascript">{userData[next].c}</label><br /><br />
          </div>

          <div className='options'>
            <input type="radio" id="d" name="fav_language" value="d" disabled={disableRadio} onChange={(e) => handleChange(e.target.value)} />
            <label for="opt">{userData[next].d}</label>
          </div>

          <br />
          <br />
          <button disabled={disableSubmit} className='btn-2' onClick={checkAnswer} type="button">Submit</button>
          <button className='btn-2' onClick={(e) => handleNext()} type="button">Next</button>

        </form>

      </div>
    </div>
  ) : (
    <div>
      <h2>Name : {currentLoginPlayer.active}</h2>
      
      Your Score is {score}
      <p>End of ques</p>
      <Link to='/login'>
        <button className='btn'>Logout</button>
      </Link>
    </div>
  ) : <button className='btn' onClick={handleShow}>Click Here to Start Quiz</button>

}

const mapStateToProps = state => {
  return {
    userData: state.user.users,
    currentLoginPlayer: state.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    userAnswer: (ans) => dispatch(userAnswer(ans))
    // loginUsers: (newUser) => dispatch(loginUsers(newUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)