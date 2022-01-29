import { injectable } from "@theia/core/shared/inversify";
import { IHelloWorld } from "../common/hello-world-service"

@injectable()
export class HelloWorldBackend implements IHelloWorld {
    getHelloString(): Promise<string> {
        return Promise.resolve("Hello from the backend!");
    }
}