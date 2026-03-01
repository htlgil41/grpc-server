import type { RequestUsuarioByEmail, RequestVoid } from './types/requests.ts';
import type { ServerStatusResponse, UsuarioListResponse, UsuarioResponse } from './types/responses.ts';

import 'dotenv/config';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import * as grpc from '@grpc/grpc-js';
import * as protoloader from  '@grpc/proto-loader';
import { LoadEnvOrThrow } from './helpers/loadenv.ts';
import { serviceStatus } from './funcs/serviceStatus.ts';
import { usuariolist } from './funcs/usuariolist.ts';
import { usuarioByEmail } from './funcs/usuarioByEmail.ts';
import { usuarioListStream } from './funcs/usuarioListStream.ts';
import { usuarioStream } from './funcs/usuarioStream.ts';

const PATH = dirname(fileURLToPath(import.meta.url));
const PROTO_PATH = path.resolve(PATH, '../proto.proto');
interface ServicesGrpc {
    serviceStatus: grpc.MethodDefinition<RequestVoid, ServerStatusResponse>;
    usuariolist: grpc.MethodDefinition<RequestVoid, UsuarioListResponse>;
    usuarioByEmail: grpc.MethodDefinition<RequestUsuarioByEmail, UsuarioResponse>;
    usuarioListStream: grpc.MethodDefinition<RequestVoid, UsuarioResponse>
    usuarioStream: grpc.MethodDefinition<RequestUsuarioByEmail, UsuarioResponse>;
}

const protoLoad = protoloader.loadSync(
    PROTO_PATH,
    {
        keepCase: true,
        longs: Number,
    }
);
const services = grpc.loadPackageDefinition(protoLoad) as {
    ServiceData: {
        ServiceData: grpc.ServiceClientConstructor & { services: ServicesGrpc }
    }
};

function main () {

    const server = new grpc.Server({
        "grpc.max_receive_message_length": (1024 * 1024) * 1,
        "grpc.max_send_message_length": (1024 * 1024) * 1,

        "grpc.max_connection_age_ms": 60000 * 8,
        "grpc.max_connection_idle_ms": 60000 * 4,
        "grpc.max_connection_age_grace_ms": 60000,

        "grpc.keepalive_time_ms": 20000,
        "grpc.keepalive_timeout_ms": 8000,
        "grpc.http2.min_time_between_pings_ms": 15000,
        "grpc.keepalive_permit_without_calls": 1,
    });
    server.addService(services.ServiceData.ServiceData.service, {
        serviceStatus,
        usuariolist,
        usuarioByEmail,
        usuarioListStream,
        usuarioStream
    });
    server.bindAsync(`0.0.0.0:${LoadEnvOrThrow('PORT_GRPC')}`, grpc.ServerCredentials.createInsecure(), () =>{

        console.log(`GRPC Server Run:${LoadEnvOrThrow('PORT_GRPC')}`);
    });
}

void main();