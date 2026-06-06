import { Outlet } from "react-router";

export default function DataLayout() {
    return (
        <>
        <div>
            <h1>This is header</h1>
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