import { useParams } from "react-router";

export default function NotFound() {
    const params = useParams();

    return (
        <>
            <h1>Not found : {params['*']}</h1>
            <p>Page not found..</p>
        </>
    )
}