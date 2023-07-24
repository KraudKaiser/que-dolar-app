import {Container, Row, Col, Button, ThemeProvider} from "react-bootstrap"

export default function Home(){
	return(
		<ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}>
			<Container className="full">
				<Row>
					<Col>Hola</Col>
					<Col>Hola</Col>
					<Button>Hola</Button>
				</Row>
			</Container>
		</ThemeProvider>
	)
}