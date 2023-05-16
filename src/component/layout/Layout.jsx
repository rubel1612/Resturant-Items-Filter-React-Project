import React from "react"
import MenuCard from "../card/Card"
import Navbar from "../navbar/Navbar"
import MenuData from "../MenuApi"
import { useState } from "react"

const uniqueCate = new Set(MenuData.map((element) => {
    return element.category 
}))
const uniqueCategory = [...uniqueCate,"All"]

const Layout = () => {
      const [Menu,setMenu] = useState(MenuData)
      const [UniqueCategory,setUniqureCategory] = useState(uniqueCategory)

      const filterMenu = (category) => {

        if(category === "All"){
            setMenu(MenuData)
            return
        }

       const updateMenu = MenuData.filter((curValue) => {
           return curValue.category === category
       })

       setMenu(updateMenu)
       console.log(updateMenu);
      }


    return (
        <div>
          
             <Navbar uniqueCategory={UniqueCategory}
             filterMenu={filterMenu}
                         />
            <MenuCard MenuData={Menu}/>
            
        </div>
    )
}

export default Layout 