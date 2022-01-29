export const HELLO_WORLD_SERVICE_PATH = '/services/hello-world';

export const HelloWorld = Symbol("IHelloWorld")

export interface IHelloWorld {
    getHelloString(): Promise<string>;
}
