import { useEffect, useState } from 'react'
import './Ship.css'
import { useParams } from 'react-router-dom';
import { Ship, shipById } from './modules/ship-by-id.ts'
import {Breadcrumb} from 'react-bootstrap'



function ShipPage() {
    const { id } = useParams<{ id: string }>();
    const [ship, setShip] = useState<Ship>({id: 0, name: '', weapon: '', armoring: '', year: 0, displacement: 0, length: 0, speed: 0, status: '', image_src: ''})
    const handleSearch = async () =>{
        const response = await shipById(id)
        await setShip(response)
    }
    useEffect(()=>{
      handleSearch();
    },[])
    
    


  return ( 
    <>
    <Breadcrumb>
        <Breadcrumb.Item href="#home">Главная</Breadcrumb.Item>
        <Breadcrumb.Item href="../seabattles">Архив</Breadcrumb.Item>
        <Breadcrumb.Item active>
        {ship.name}
        </Breadcrumb.Item>
    </Breadcrumb>
    <h2>{ship.name}</h2>
<br/><hr/><br/>
<img className="imgShip" src =  {ship.image_src || 'https://dostavka.phali-hinkali.ru/murino/api2/images/placeholder_1000x.jpg'} />
<br/>
<p>Вооружение корабля: {ship.weapon}, бронирование: {ship.armoring}</p>
<table className="sTable">
    <tr>
        <td className="sTd">Год ввода в строй - { ship.year }</td>
        <td className="sTd">Водоизмещение { ship.displacement } т</td>
    </tr>
    <tr>
        <td className="sTd">Длина корпуса - { ship.length } м</td>
        <td className="sTd">Скорость хода { ship.speed } узла</td>
    </tr>
</table>
    </>
  )
}

export default ShipPage
