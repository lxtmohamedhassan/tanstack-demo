import { Link, Outlet, useNavigate } from "@tanstack/router";



const Products = () => {
    const navigate = useNavigate();
    // navigate({ to: '/home' });
    return (
        <>
            <h1>
                All Products Page
            </h1>

            <Link to="/products/$id" params={{ id: '5' }}>Product 5</Link>
            <Outlet />

            <button
                onClick={() => navigate({ to: '/home', replace: true })}
            >
                go to home page
            </button>
            <button
                onClick={() => navigate({ to: '/posts/$postId', params: { postId: '8' } })}
            >
                go to post #8
            </button>
        </>
    );
};

export default Products;