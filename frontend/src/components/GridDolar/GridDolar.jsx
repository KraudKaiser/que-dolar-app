import { useState } from "react"
import styles from "./grid-style.module.css"
export default function GridDolar(){
	const [isOpen, setIsOpen] = useState(false)

	const handleClick = () =>{
		setIsOpen(!isOpen)
	}


	return(
		<>
			<div onClick={handleClick} className={styles.container}>
				<div>
					<h1>Titulo de dolar</h1>
					<h2>Valor del dolar</h2>
				</div>
				<div>
					<h3>Ver mas...</h3>
				</div>
				<div className={`${styles["additional-content"]} ${isOpen ? styles.open : ""}`}>
					mas informacion chida
				</div>
			</div>
		</>
	)
}