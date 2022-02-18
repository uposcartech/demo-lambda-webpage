import authentication from "./authentication";

export const handle = (fn) => {
    console.log(fn, "here2");
    return async function(event) {
        try {
            let verifiedPayload = await authentication(event);

            return await fn(event, verifiedPayload);
        } catch (e) {
            console.log(e);
            return { status: 400, error: e };
        }
    };
};