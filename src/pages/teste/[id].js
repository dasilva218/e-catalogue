import { useRouter } from "next/router";

function id() {
    const Route = useRouter()
    console.log(Route.query)
    return (
        <div>
            Enter
        </div>
    );
}

export default id;