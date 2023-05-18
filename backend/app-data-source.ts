import { DataSource } from "typeorm";

export const appDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "portal2023",
    entities: ["src/entity/*.ts"],
    logging: true,
    synchronize: true,
})