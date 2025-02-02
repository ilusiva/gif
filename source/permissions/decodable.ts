/**
 * A decodable object.
 */
export interface IDecodable<T> {
    decode(): T;
}