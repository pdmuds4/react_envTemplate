import {getResponse} from '../response';

export default function Page() {
    const res = getResponse("/");
    return (
        <>
            <p>{res.message}</p>
        </>
    );
};