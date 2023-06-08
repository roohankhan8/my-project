import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

import "reflect-metadata";
import { createConnection, Connection } from "typeorm";

const connection = await createConnection({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "your-db-username",
  password: "your-password",
  database: "your-db",
  entities: ["entity/*.js"]
});


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
