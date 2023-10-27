export interface ApiResponse {
    message: string;
}
export interface AccessToken {
    accessToken: string;
    expiresIn: string;
    extExpiresIn: string;
    tokenType: string;
}