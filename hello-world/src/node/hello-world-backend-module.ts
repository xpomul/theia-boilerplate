import { ContainerModule } from '@theia/core/shared/inversify';
import { ConnectionHandler, JsonRpcConnectionHandler } from '@theia/core/lib/common';
import { HelloWorld, HELLO_WORLD_SERVICE_PATH, IHelloWorld } from "../common/hello-world-service"
import { HelloWorldBackend } from './hello-world-backend';

export default new ContainerModule(bind => {
    bind(HelloWorld).to(HelloWorldBackend).inSingletonScope();
    bind(ConnectionHandler).toDynamicValue(ctx => 
        new JsonRpcConnectionHandler<IHelloWorld>(HELLO_WORLD_SERVICE_PATH, (_client: any) => ctx.container.get<IHelloWorld>(HelloWorld))
    ).inSingletonScope()
})
