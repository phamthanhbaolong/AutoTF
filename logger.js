// logger.js
const headers = $request.headers;
const session_id = headers["X-Session-Id"];
const session_digest = headers["X-Session-Digest"];
const request_id = headers["X-Request-Id"];
const key = headers["X-Request-Key"];

let log_message = `📦 session_id: ${session_id}\n`;
log_message += `📦 session_digest: ${session_digest}\n`;
log_message += `📦 request_id: ${request_id}\n`;
log_message += `📦 key: ${key}\n`;

console.log(log_message);
$done();
