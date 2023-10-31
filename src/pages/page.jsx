import {getResponse} from '../scripts/response';


function Page() {
    const res = getResponse("/");
    return (
        <>
            <p>{res.message}</p>
        </>
    );
}

export default Page;