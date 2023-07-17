import { useNavigate } from "@tanstack/router";


const Products = () => {
    const navigate = useNavigate({ from: '/products' })
    return (
        <h1>
            All Products Page
            <button onClick={() => navigate({ to: '/home' })}>go to home page</button>
        </h1>
    );
};

export default Products;