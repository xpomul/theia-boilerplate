import { injectable } from "@theia/core/shared/inversify";
import { HelloWorld } from "../common/hello-world"

@injectable()
export class HelloWorldImpl implements HelloWorld {
    getHelloString(): Promise<string> {
        return Promise.resolve("Hello from the backend!");
    }
}