import { useState , useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { RES_MENU } from '../utils/constant'
const RestaurantMenu = () => {
    const [resmenu, setResMenu] = useState(null)
    const {resid} = useParams()
    console.log(resid)
    useEffect(()=> {
        async function getRestaurantMenu() {
            let response = await fetch(RES_MENU+resid)
            let data = await response.json()
            setResMenu(data)
        }
        getRestaurantMenu()
    }, [])

    return (
        <>
        </>
    )
}

export default RestaurantMenu