import './ErrorPage.scss'
import {Link} from 'react-router-dom'
import { Button } from 'react-bootstrap'
import {BsFillHouseDoorFill} from 'react-icons/bs'

const ErrorPage = () =>(


        <div className='error-page-container'>
            <div className='error-page-content'>
                <div className='error-title'>ERROR 404 NOT FOUND</div>
                <p className='error-details'>you my have mis-typed the URL Or the page has been removed Actually there nothing to see here </p>
                <Button as={Link} className='error-link-home text-white' color="secondary" to='/'>
                    <BsFillHouseDoorFill className='error-link-homeicon'/>HOME
                </Button>
            </div>
        </div>

  )

export default ErrorPage