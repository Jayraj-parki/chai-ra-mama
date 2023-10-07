import Link from "next/link";

const NotFound = () => {
    return (
        <div className="container-fluid d-flex flex-column justify-content-center align-items-center min-vh-100">
            <h1 className="display-4">404 Not Found</h1>
            <p className="lead">The page you're looking for does not exist.</p>
            <Link href="/" className="btn btn-primary">Go Back to Homepage</Link>
        </div>
    );
}

export default NotFound;