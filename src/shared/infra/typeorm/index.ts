import {
    createConnection,
    getConnectionManager,
    getConnectionOptions,
} from "typeorm";

interface IOptions {
    host: string;
}

const connectionManager = getConnectionManager();

if (!connectionManager.has("default")) {
    getConnectionOptions().then((options) => {
        const newOptions = options as IOptions;
        newOptions.host = "database_ignite";
        createConnection({
            ...options,
        });
    });
}
