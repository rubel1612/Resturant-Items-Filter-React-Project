
import './Navbar.css'

const Navbar = ({uniqueCategory,filterMenu}) => {

    return <div>
         <nav>
      <ul>
       {
        uniqueCategory.map((element) => {
             return (
              <li key={uniqueCategory.indexOf(element)}><button className="navButton" 
                   onClick={() => filterMenu(element)}
              >{element}</button> </li>
             )
        })
       }
      
      </ul>
    </nav>
    </div>
}


export default Navbar