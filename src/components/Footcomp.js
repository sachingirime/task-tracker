import {Link} from 'react-router-dom'

const Footcomp = () => {
    return (
       <footer className = 'footer'>
           <p>
               Copyright @2021: THE VEX
           </p>

           <Link to = "/about" >About</Link>
       </footer>
    )
}

export default Footcomp
