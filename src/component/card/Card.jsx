
import './Card.css'

const MenuCard =  ({MenuData}) => {
  
    return (
        <div className="card-container">
        {MenuData.map((menu) => {
             const {id,category,name,description,image} = menu 
            return (
                <div className="card" key={id}>
             <p className="id">{id}</p>
             <h5>{category}</h5>
             <h2>{name}</h2>
             <p>{description}</p>
             <img className="image" src={image} alt="" />
             <button>order now</button>
        </div>
            )
        })}
   </div>
    )
}

export default MenuCard 