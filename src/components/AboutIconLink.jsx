import {FaQuestion} from 'react-icons/fa'
import {Link} from 'react-router-dom'
//hum a tag bhi use kr skte hai but ussey refresh hota hai page when we go to another page...so a tags are ohkay when we want to link to another website but apne hi pages mei navigate krna ho toh we will use Link of react router DOM.

function AboutIconLink() {
  return (
    <div className='about-link'>
        <Link to={'/about'}>
        <FaQuestion size={30} />
        </Link>
    </div>
  )
}

export default AboutIconLink