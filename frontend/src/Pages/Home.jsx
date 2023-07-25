import GridDolar from '../components/GridDolar/GridDolar.jsx'
import styles from './home-styles.module.css'
export default function Home(){
	const valorOficial = 275.65
	const valorBlue = 540.65
	return(
		<>
			<div className={styles.container}>
				<div className={styles.title}>
					<h1>¿Cual dolar era?</h1>
					<p>La app que te ayuda, en esta economia</p>
				</div>
				<div className={styles.centralBanner}>
					<div className={styles.oficial}>
						<h1>Dolar Oficial</h1>
						<h2>ARS ${valorOficial}</h2>
					</div>
					<div className={styles.blue}>
						<h1>Dolar Blue</h1>
						<h2>ARS ${valorBlue}</h2>
					</div>
				</div>
				<div className={styles.grid}>
					<GridDolar></GridDolar>
					<GridDolar></GridDolar>
					<GridDolar></GridDolar>
					<GridDolar></GridDolar>
				</div>
				<div className={styles.footer}>
					Desarrollada por Ramiro Damian Gimenez
				</div>
			</div>
		</>
	)
}