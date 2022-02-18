import authentication from "../lib/authentication.js";

export async function get(event) {
    await authentication(event);
}

export async function create(event) {
    try {
        let verifiedPayload = await authentication(event);

        return {
            statusCode: 200,
            headers: { "Content-Type": "text/html" },
            body,
        };
    } catch (e) {
        return { status: 400, error: e };
    }
}