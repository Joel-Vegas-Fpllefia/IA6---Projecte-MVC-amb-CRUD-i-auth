AL REALIZAR : npx prisma db push

PS C:\Users\DAW2\Desktop\IA6---Projecte-MVC-amb-CRUD-i-auth> npx prisma db push  
Loaded Prisma config from prisma.config.ts.

Prisma schema loaded from prisma\schema.prisma.
Error: Prisma schema validation - (get-config wasm)
Error code: P1012
error: The datasource property `url` is no longer supported in schema files. Move connection URLs for Migrate to `prisma.config.ts` and pass either `adapter` for a direct database connection or `accelerateUrl` for Accelerate to the `PrismaClient` constructor. See https://pris.ly/d/config-datasource and https://pris.ly/d/prisma7-client-config
--> prisma\schema.prisma:8
|
7 | provider = "sqlite" // Cambia a "postgresql" solo cuando Docker funcione
8 | url = "file:./dev.db"
|

Validation Error Count: 1
[Context: getConfig]

Prisma CLI Version : 7.8.0

PS C:\Users\DAW2\Desktop\IA6---Projecte-MVC-amb-CRUD-i-auth> npx prisma db push
Loaded Prisma config from prisma.config.ts.

Prisma schema loaded from prisma\schema.prisma.
Datasource "db": PostgreSQL database "postgres", schema "public" at "localhost:51213"
Error: P1001

Can't reach database server at `localhost:51214`

Please make sure your database server is running at `localhost:51214`.

⚠️ No seed command configured

To seed your database, add a seed property to the migrations section in your Prisma config file.

Example

// prisma.config.ts
export default defineConfig({
migrations: {
seed: 'bun·./prisma/seed.ts',
},
datasource: {
url: '[your database URL]',
},
})
