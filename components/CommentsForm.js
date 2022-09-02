import React , {useState , useEffect , useRef} from 'react'

const CommentsForm = () => {
  const [error , setError] = useState(false)
  const [localStorage , setLocalStorage] = useState(null)
  const [showSucessMessage , setShowSucessMessage ] = useState(false)
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();



  return (
    <div className='bg-white rounded-md shadow-lg p-8 pb-12 mb-8'>
      <h3 className=' text-center text-xl mb-8 font-bold border-b pb-4'>Comments Form</h3>
        <div className='grid grid-cols-1 gap-4 mb-2'>
          <textarea 
          ref={commentEl}
          name='comment' 
          className=' bg-gray-700/20 rounded-md p-5  focus:outline-offset-2 outline-1 resize-none' placeholder='Type your comments...'>
          </textarea>
          <div className='grid grid-cols-1 gap-4 '>
          </div>
          <div className='grid grid-cols-1 gap-4 mb-2  mx-auto w-100'>
            <button className='btn rounded-full py-2 px-2 bg-blue-700  text-white font-semibold '>Post Message</button>
          </div>

        </div>
    </div>
  )
}

export default CommentsForm