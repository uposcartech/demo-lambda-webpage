import * as Eta from "eta";
import authentication from "../lib/authentication.js";

export async function handler(event) {
    try {
        let verifiedPayload = await authentication(event);

        let html = await
        import ("../view/dashboard.js");

        let body = Eta.render(html.default, {
            time: event.requestContext.time,
            verifiedPayload,
        });

        return {
            statusCode: 200,
            headers: { "Content-Type": "text/html" },
            body,
        };
    } catch (e) {
        return { status: 400, error: e };
    }
}