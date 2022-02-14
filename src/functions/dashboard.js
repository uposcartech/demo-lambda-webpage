import * as Eta from "eta";
import jsonwebtoken from "jsonwebtoken";

export async function handler(event) {
    const publicKey = Buffer.from(process.env.USERFRONT_KEY, "base64")
        .toString("utf-8")
        .replace(/\\/g, "\n")
        .trim();

    const accessToken = event.cookies
        .find((i) => i.includes("access.xbr7r8xn="))
        .replace("access.xbr7r8xn=", "");

    const verifiedPayload = jsonwebtoken.verify(accessToken, publicKey, {
        algorithms: ["RS256"],
    });

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
}