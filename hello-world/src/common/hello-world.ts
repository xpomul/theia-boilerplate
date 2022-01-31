export namespace HelloWorldConstants {
    export const SERVICE_PATH = '/services/hello-world';
}

export const HelloWorld = Symbol("HelloWorld")

export interface HelloWorld {
    getHelloString(): Promise<string>;
}
