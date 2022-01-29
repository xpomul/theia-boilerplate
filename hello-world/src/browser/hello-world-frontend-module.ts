/**
 * Generated using theia-extension-generator
 */
import { HelloWorldCommandContribution, HelloWorldMenuContribution } from './hello-world-contribution';
import { CommandContribution, MenuContribution } from '@theia/core/lib/common';
import { ContainerModule } from '@theia/core/shared/inversify';
import { HelloWorld, IHelloWorld, HELLO_WORLD_SERVICE_PATH } from '../common/hello-world-service';
import { WebSocketConnectionProvider } from '@theia/core/lib/browser';

export default new ContainerModule(bind => {
    // add your contribution bindings here
    bind(CommandContribution).to(HelloWorldCommandContribution);
    bind(MenuContribution).to(HelloWorldMenuContribution);
    bind(HelloWorld).toDynamicValue(ctx => {
        const connection = ctx.container.get(WebSocketConnectionProvider);
        return connection.createProxy<IHelloWorld>(HELLO_WORLD_SERVICE_PATH);
    }).inSingletonScope();    

});
