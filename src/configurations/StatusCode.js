//1xx informational response - the request was recieved, continuing process
const CONTINUE = 100
const SWITCH_PROT = 101
const EARLY_HINT = 103

//2xx successful - the request was successfully recieved, understood and accepted
const OK = 200
const CREATED = 201
const ACCEPTED = 202
const NA_INFO = 203
const NO_CONTENT = 204
const RESET_CONTENT = 205
const PARTIAL_CONTENT = 206

//3xx redirection - further action needs to be taken in order to complete the request
const MULTIPLE_CHOICE = 300
const MOVED_PERM = 301
const FOUND = 302
const SEE_OTHER = 303
const NOT_MODIFIED = 304
const TEMP_REDIRECT = 307
const PERM_REDIRECT = 308

//4xx client error
const BAD_REQUEST = 400
const UNAUTHORIZED = 401
const PAYMENT_REQ = 402
const FORBIDDEN = 403
const NOT_FOUND = 404
const METHOD_NOT_ALLOWED = 405
const NOT_ACCEPTABLE = 406
const PROXY_AUTH_REQ = 407
const TIMEOUT = 408
const DUPLICATE_RESOURCE = 409
const GONE = 410

//5xx server error
const INTERNAL_SERVER_ERROR = 500
const NOT_IMPLEMENTED = 501
const BAD_GATEWAY = 502
const SERVICE_UNABAILABLE = 503
const GATEWAY_TIMEOUT = 504

export default {
    OK,
    CREATED,
    BAD_REQUEST,
    UNAUTHORIZED,
    FORBIDDEN,
    NOT_FOUND,
    METHOD_NOT_ALLOWED,
    DUPLICATE_RESOURCE,
    INTERNAL_SERVER_ERROR,
    CONTINUE,
    SWITCH_PROT,
    EARLY_HINT,
    ACCEPTED,
    NA_INFO,
    NO_CONTENT,
    RESET_CONTENT,
    PARTIAL_CONTENT,
    MULTIPLE_CHOICE,
    MOVED_PERM,
    FOUND,
    SEE_OTHER,
    NOT_MODIFIED,
    TEMP_REDIRECT,
    PERM_REDIRECT,
    PAYMENT_REQ,
    NOT_ACCEPTABLE,
    PROXY_AUTH_REQ,
    TIMEOUT,
    GONE,
    NOT_IMPLEMENTED,
    BAD_GATEWAY,
    SERVICE_UNABAILABLE,
    GATEWAY_TIMEOUT
}
