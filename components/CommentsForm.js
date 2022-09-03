import React, { useState, useEffect, useRef } from 'react'
import {submitComment} from '../services/index'


const CommentsForm = ({slug}) => {
  const [error, setError] = useState(false)
  const [localStorage, setLocalStorage] = useState(null)
  const [showSucessMessage, setShowSucessMessage] = useState(false)
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();

  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem('name');
    emailEl.current.value = window.localStorage.getItem('email');
  }, [])

  const handleSubmit = (e) => {
    setError(false)
    
    const { value: comment } = commentEl.current
    const { value: name } = nameEl.current
    const { value: email } = emailEl.current
    const { checked: storeData } = storeDataEl.current
    if (!comment || !email || !name) {
      setError(true);
      setTimeout(() => {
        setError(false)
      }, 3000)
      return;
    }
    const commentObj = { name, email, comment, slug }
    if (storeData) {
      window.localStorage.setItem('name', name)
      window.localStorage.setItem('email', email)
    } else {
      window.localStorage.removeItem('name', name)
      window.localStorage.removeItem('email', email)
    }
    submitComment(commentObj)
      .then((res) => {
        setShowSucessMessage(true);

        setTimeout(() => {
          setShowSucessMessage(false)
        }, 5000)
      })

  }



  return (
    <div className='bg-white rounded-md shadow-lg p-8 pb-12 mb-8'>
      <h3 className=' text-center text-xl mb-8 font-bold border-b pb-4'>Leave a Reply</h3>
      <div className='grid grid-cols-1 gap-4 mb-2'>
        <textarea
          ref={commentEl}
          name='comment'
          className=' bg-gray-700/20 rounded-md py-3 px-3 focus:outline-offset-2 outline-1 resize-none' placeholder='Type your comments...'>
        </textarea>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-2'>
          <input type='text' ref={nameEl}
            className='bg-gray-700/20 outline-1 focus:outline-offset-2 py-2 px-2 rounded-md' placeholder='Name' name='name'
          />
          <input type='text' ref={emailEl}
            className='bg-gray-700/20 outline-1 focus:outline-offset-2 py-2 px-2 rounded-md' placeholder='Email' name='email'
          />
        </div>


        <div className='grid grid-cols-1 gap-4 mb-2 px-2'>
          <div>
            <input ref={storeDataEl} type='checkbox' id='storeData' name='storeData' value='true' />
            <label className='text-gray-500 cursor-pointer ml-2' htmlFor='storeData'>Save my details for next time</label>
          </div>
        </div>
        {error && <p className='text-xs text-red-500 font-semibold'>All fields are required.</p> }
        <div className='grid grid-cols-1 gap-4 mb-2  mx-auto w-[100%]'>
          <button type='button' onClick={handleSubmit}
            className='btn rounded-full py-2 px-2 bg-blue-700 transition duration-400 ease-in hover:bg-pink-500  text-white w-[60%] lg:w-[30%] mx-auto  '>
            Post Message
          </button>
          {showSucessMessage && <span className='text-xl float-right text-green-500 text-center font-semibold'>Comment submitted for review</span>}
        </div>

      </div>
    </div>
  )

}
export default CommentsForm