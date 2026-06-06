import { Link, Outlet } from "react-router";

export default function DataLayout() {
    return (
        <>
            <div>
                <h1>This is header</h1>
            </div>
            <div>
                <ul>
                    <li><Link to='/data/products'>Products</Link></li>
                    <li><Link to='/data/customers'>Customers</Link></li>
                    <li><Link to='/data/sellers'>Sellers</Link></li>
                    <li><Link to={{
                        pathname: '/data/products',
                        search: '?category=shoes',
                        hash: '#top'
                    }}>Specified Products</Link></li>
                </ul>
            </div>
            <div>
                <Outlet />
            </div>
            <div>
                <footer>
                    <p>This is footer</p>
                </footer>
            </div>
        </>
    )
}