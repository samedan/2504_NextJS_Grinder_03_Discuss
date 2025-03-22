### Source

> https://www.udemy.com/course/next-js-the-complete-developers-guide/learn/lecture/40830430#questions

### This git

> https://github.com/samedan/2504_NextJS_Grinder_03_Discuss

### Prisma

> npm i prisma

> npx prisma init --datasource-provider sqlite

> /prisma/schema.prisma

> npx prisma migrate dev

# Prisma client

> /src/db/index.ts -> export const db = new PrismaClient();

## OAuth Setup

> https://github.com/settings/applications/new

# Github OAuth

> .env.local

> npm i --save-exact @auth/core@0.18.1 @auth/prisma-adapter@1.0.6 next-auth@5.0.0-beta.3

# NextAuth exports

> /src/auth.ts

# API routes foru outside GET, POST

> /src/api/auth/[...nextauth]/route.ts

# Server actions for signIn& signOut

> /app/actions/index.ts
