import { Link, Outlet } from '@tanstack/router';

const Root = () => {
    return (
        <>
            <div style={{display: 'flex', gap: '1rem'}}>
                <Link to="/" activeProps={{ style: { fontWeight: 'bold' }}}>Index</Link>
                <br/>
                <Link to="/home">Home</Link>
                <br/>
                <Link to="/about">About</Link>
                <br/>
                <Link to="/products">Products</Link>
                <br/>
                <Link
                    to="/posts"
                    search={{
                        page: 3,
                        sortBy: 'id',
                        sortOrder: 'asc',
                    }}
                >
                    Posts
                </Link>
            </div>
            <hr />
            <Outlet />
        </>
    );
};

export default Root;