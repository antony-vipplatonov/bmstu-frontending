import { FC } from 'react'
import { Card, Button } from 'react-bootstrap'
import './ShipCard.css'

interface Props {
    id: number
    name: string
    weapon: string
    armoring: string
    year: number
    displacement: number
    length: number
    speed: number
    status: string
    image_src: string
}

/*weapon, armoring, year, displacemen, length, speed, status,*/

const ShipCard: FC<Props> = ({ id, name, image_src }) => (
    <Card className = "d-inline-block">
        <Card.Img className="card-img-top" src={image_src || 'https://dostavka.phali-hinkali.ru/murino/api2/images/placeholder_1000x.jpg'} alt = {name} />
        <Card.Body>                
            <div className="card-title">
                <Card.Title>{name}</Card.Title>
            </div>
            <div className = "execBtn">
                <Button className="cardButton" href={`/bmstu-frontend/seabattles/${id}`} variant="primary">Узнать больше</Button>
                <a className = "add" href='#'>
                    <img src="https://atvin.ru/img/basket1.svg" alt="Добавить в корзину" height = "20"/>
                </a>
            </div>
        </Card.Body>
    </Card>
)

export default ShipCard;