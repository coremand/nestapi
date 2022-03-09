import { UseInterceptors, NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { plainToClass } from "class-transformer";
import { nextTick } from "process";

export class SerializeInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, handler: CallHandler): Observable<any> {
        //Run code before request is handled by the request handler


        return handler.handle().pipe(
            map((data: any) => {
                //Run code before the response is sent out
            })
        )
    }
}