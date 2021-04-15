import { Inject, Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpXsrfTokenExtractor, HttpInterceptor } from "@angular/common/http";
import { Observable } from 'rxjs';
//import {LOGIN, LoginService } from '@backbase/foundation-ang/web-sdk';

@Injectable()
export class MyAuthService implements HttpInterceptor {
    //public utils: AuthUtils;
    //constructor(private tokenExtractor: HttpXsrfTokenExtractor, @Inject(LOGIN) private loginService: LoginService) {
    constructor(private tokenExtractor: HttpXsrfTokenExtractor) {
    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //let auth = this.utils.cookie.get('Authorization');
        // this.loginService.login('Sandra', 'Sandra').then((res:any) => {
        //         console.log(res)
        // })
        //let auth = sessionStorage.getItem('BB-Auth');
        //console.log("auth"+auth);
        //console.log("xsrf intercepter called");
        let requestToForward = req;
        let token = this.tokenExtractor.getToken() as string;
        console.log(token);
        if (token !== null) {
            requestToForward = req.clone({ 
                setHeaders: {
                //'XSRF-TOKEN': token
                'autho' : 'eyJraWQiOiJNYmV1VmVVWlhVT2FJcDgwYmx1XC9sanFOQjNKZE9aSDgxQ3JGU0tpMmVcL2M9IiwiY3R5IjoiSldUIiwiZW5jIjoiQTEyOENCQy1IUzI1NiIsImFsZyI6ImRpciJ9..ckeDHPL6QqFn3lnvQSjWoQ.JBuexQyuMavMnLk2V_hMHSSHfn3M1CnIUFxmQ9OjI8hTZpVL5tvKuW4koBoztZRqfA7kdDfhQtdKbZp36B6AYVbfH9TI2w-L0Sy8pDXt-eDOfcycfOpASQ1YlJV_PuN8V9d00YHYrW-GaqU-NvTvFOGp3ATkut7kIweJA71Xa1fjqhr6uK45EtnL42V1viE-VSG7kE6V-AhQ1XQXY4wvbCwDmR_FAXiC9g5947DRQNMY65oKANaSXQQv17x6PZmRop5-u-T6nsrw4hpbUc6zEGCdgzTh4qFPcv1xGm0Q4Oc_yEBEJV9Sz9CSZZDPtHRpP4Yp2NF16BJwsElOYJA-uc0qpdUuFQcslCMOgs12zCA29LGTTQ0HIUH0FyRuDsKBMgYpcOr8dcBlkJ7XJsOBXBNYcS-4nu7rlAL3KM0hOfvVrjdZxaTDQmtcveQsNyQSEpaFttkPwy10rn7sSHWVYhMl7ZzL3o2jP-_2b9qj021Ed333HkN7fA-wMxaeU1jyarmJ6Fb3qVz0usnDXIUl7odYDPBOdt0jMsNz-bOxsbLRXymmznhjs_LwCt5awJQK1K0GjfBiaoZb5L9XkADRYw.Oldg4fcCQF0Ih8GBZh-dgw'
             }
            });
        }
        return next.handle(requestToForward);
    }
}