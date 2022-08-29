export interface ErrorResponseApi<T> {
    message: string;
    status: number;
    error: T;
}