import * as grpc from '@grpc/grpc-js';
import * as protoloader from  '@grpc/proto-loader';

export const serviceStatus = (
    call: grpc.ServerUnaryCall<any, any>,
    callback: grpc.sendUnaryData<any>
) => {

    callback(null, "");
}