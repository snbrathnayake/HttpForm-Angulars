
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions, RequestMethod, Response, ResponseOptions, Http } from '@angular/http';
import {  HttpResponseBase } from '@angular/common/http';

export function fakeBackendFactory(backend: MockBackend , option:BaseRequestOptions) {
    
    let token = 'jwttoken-string';

    backend.connections.subscribe((connection: MockConnection) => {
        setTimeout(() => {
            if (connection.request.url.endsWith('/api/authenticate') && connection.request.method === RequestMethod.Post) {
                let body = JSON.parse(connection.request.getBody());

                if (body.email === 'sam@gmail.com' && body.password === '@123') {
                    connection.mockRespond(new Response(
                        new ResponseOptions({
                            status: 2000,
                            body: {token: token }
                        })));
                } else {
                    connection.mockRespond(new Response(
                        new ResponseOptions({ status : 200})
                    ));
                }
            }
        } , 1000);
    });

    return new Http(backend, option);
}

export let fakeBackendProvider = {
    provide: Http,
    useFactory: fakeBackendFactory,
    deps: [MockBackend, BaseRequestOptions]
};