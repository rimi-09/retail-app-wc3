import { TestBed } from "@angular/core/testing";
import { HttpRequest } from "@angular/common/http";
import { HttpHandler } from "@angular/common/http";
describe("AuthHeaderInterceptor", () => {
  // let service: AuthHeaderInterceptor;
  // beforeEach(() => {
  //   const httpRequestStub = { clone: (object: any) => ({}) };
  //   const httpHandlerStub = { handle:( authReq: any) => ({}) };
  //   TestBed.configureTestingModule({
  //     providers: [
  //       AuthHeaderInterceptor,
  //       { provide: HttpRequest, useValue: httpRequestStub },
  //       { provide: HttpHandler, useValue: httpHandlerStub }
  //     ]
  //   });
  //   service = TestBed.get(AuthHeaderInterceptor);
  // });
  // it("can load instance", () => {
  //   expect(service).toBeTruthy();
  // });
  // describe("intercept", () => {
  //   it("makes expected calls", () => {
  //     const httpRequestStub = TestBed.get(HttpRequest);
  //     const httpHandlerStub: HttpHandler = TestBed.get(HttpHandler);
  //     spyOn(httpRequestStub, "clone").and.callThrough();
  //     spyOn(httpHandlerStub, "handle").and.callThrough();
  //     service.intercept(httpRequestStub, httpHandlerStub);
  //     expect(httpRequestStub.clone).toHaveBeenCalled();
  //     expect(httpHandlerStub.handle).toHaveBeenCalled();
  //   });
  // });
});
