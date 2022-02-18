import jsonwebtoken from "jsonwebtoken";

export default async function(event) {
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

    return verifiedPayload;
}