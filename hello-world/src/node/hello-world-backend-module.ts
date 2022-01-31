import { ContainerModule } from '@theia/core/shared/inversify';
import { ConnectionHandler, JsonRpcConnectionHandler } from '@theia/core/lib/common';
import { HelloWorld, HelloWorldConstants } from "../common/hello-world"
import { HelloWorldImpl } from './hello-world-impl';

export default new ContainerModule(bind => {
    bind(HelloWorld).to(HelloWorldImpl).inSingletonScope();
    bind(ConnectionHandler).toDynamicValue(ctx => 
        new JsonRpcConnectionHandler<HelloWorld>(HelloWorldConstants.SERVICE_PATH, (_client: any) => ctx.container.get<HelloWorld>(HelloWorld))
    ).inSingletonScope()
})
