import React , {useState , useEffect} from 'react'
import moment from 'moment'
import parse from 'html-react-parser'
import { getComments} from '../services/index'

const Comments = ({slug}) => {
  const [comment , setComment] = useState([])

  useEffect(() => {
    getComments(slug)
    .then((result) => setComment(result))
  })
  return (
    <div>
      {comment.length > 0 && (
        <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-12'>
          <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
            {comment.length}
            {' '}
            Comments
          </h3>
          {comment.map((comment) => (
            <div key={comment.createdAt} className='border-b border-gray-100 mb-4 pb-4'>
              <p className='mb-4'>
                <span className='font-semibold'>{comment.name}</span>
                {' '}
                on
                {' '}
                {moment(comment.createdAt).format('MMMM DD,YYYY')}
              </p>
              <p className='w-full white-space-pre-line text-gray-600'>{parse(comment.comment)}</p>

            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Comments