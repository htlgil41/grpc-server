import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import * as grpc from '@grpc/grpc-js';
import * as protoloader from  '@grpc/proto-loader';

const PATH = dirname(fileURLToPath(import.meta.url));
const PROTO_PATH = path.resolve(PATH, '../proto.proto');
interface ServicesGrpc {
    serviceStatus: grpc.MethodDefinition<any, any>
}

const protoLoad = protoloader.loadSync(PROTO_PATH);
const services = grpc.loadPackageDefinition(protoLoad) as {
    ServiceData: {
        ServiceData: grpc.ServiceClientConstructor & { services: ServicesGrpc }
    }
};

function serviceStatus(
    call: grpc.ServerUnaryCall<any, any>,
    callback: grpc.sendUnaryData<any>
) {

    callback(null, "");
}

function main () {

    const server = new grpc.Server();
    server.addService(services.ServiceData.ServiceData.service, {serviceStatus});
    server.bindAsync('0.0.0.0:8000', grpc.ServerCredentials.createInsecure(), () =>{

        console.log("GRPC run!!");
    });
}

void main();