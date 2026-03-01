import * as grpc from '@grpc/grpc-js';
import * as protoloader from  '@grpc/proto-loader';
import type { RequestVoid } from '../types/requests.ts';
import type { ServerStatusResponse } from '../types/responses.ts';

export const serviceStatus = (
    call: grpc.ServerUnaryCall<RequestVoid, ServerStatusResponse>,
    callback: grpc.sendUnaryData<ServerStatusResponse>
) => {

    callback(null, {
        act: true,
        message: 'Servicio on',
    });
}