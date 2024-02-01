export interface ship {
    id: number
    name: string
	weapon: string
	armoring: string
    status: string
	year: number
	displacement: number
	length: number
	speed: number
    image_src: string
}

export interface Ships {
    draftID: number
    ships: ship[]
}


export const mockShips: Ships = 
{
	"ships": [
		{
			"id": 5,
			"name": "vsdf",
			"weapon": "23",
			"armoring": "23",
			"year": 1234,
			"displacement": 67.0,
			"length": 123.0,
			"speed": 23.0,
			"status": "действует",
			"image_src": ""
		},
		{
			"id": 3,
			"name": "Нати",
			"weapon": "5 × 2 — 200-мм",
			"armoring": "102 мм",
			"year": 1928,
			"displacement": 15933.0,
			"length": 203.76,
			"speed": 35.5,
			"status": "действует",
			"image_src": "https://ru.wikipedia.org/wiki/%D0%A4%D0%B0%D0%B9%D0%BB:Heavy_cruiser_Nachi.jpg"
		},
		{
			"id": 2,
			"name": "Пенсильвания",
			"weapon": "4 × 3 — 356-мм и 22 × 1 — 127-мм",
			"armoring": "343 мм",
			"year": 1916,
			"displacement": 31400.0,
			"length": 185.4,
			"speed": 21.0,
			"status": "действует",
			"image_src": "https://ru.wikipedia.org/wiki/%D0%A4%D0%B0%D0%B9%D0%BB:USS_Pennsy_BB-38_1934.jpg"
		}
	],
	"draftID": 0
}