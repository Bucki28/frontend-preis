import { useContext } from 'react'
import { Card } from "../components/Card"
import { ProductsContext } from '../context/ProductsContext'
import '../styles/homeScreen.css'

export const HomeScreen = () => {
    const { products } = useContext(ProductsContext)
    return (
        <>
            <div id="container">
                {products.map((product) => (
                    <Card
                        key={product.id}
                        titulo={product.name}
                        descripcion={product.category}
                        precio={product.price}
                    >
                    </Card>
                ))}
            </div>
        </>
    )
}
