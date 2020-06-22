# Migration `20200621003038-create-tasks`

This migration has been generated by cristianbgp at 6/21/2020, 12:30:38 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "hommie"."Task" (
"createdAt" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,"description" text   ,"finished" boolean  NOT NULL DEFAULT false,"id" SERIAL,"title" text  NOT NULL ,
    PRIMARY KEY ("id"))
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200621003038-create-tasks
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,16 @@
+generator client {
+  provider = "prisma-client-js"
+}
+
+datasource db {
+  provider = "postgresql"
+  url      = env("DATABASE_URL")
+}
+
+model Task {
+  createdAt   DateTime @default(now())
+  description String?
+  finished    Boolean  @default(false)
+  id          Int      @default(autoincrement()) @id
+  title       String
+}
```

