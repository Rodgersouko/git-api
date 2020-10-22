import { RoutingModule } from './routing.module';

describe('RoutingModule', () => {
    it('should create an instance', () => {

        let routingModule: RoutingModule;

        beforeEach(() => {
            routingModule = new RoutingModule();
        });

        expect(routingModule).toBeTruthy();
    });
});