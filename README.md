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

### Check Auth ServerComponent

> /src/app/page.tsx -> session.user

### Check Auth Client Component

> import { SessionProvider } from "next-auth/react";

> /src/components/profile.tsx -> session.data.user

### Check Auth Server-Client

# Server

> /src/auth.ts -> Server export auth, signOut, signIn

# Client

> /src/app/providers.tsx & /src/components/profile.tsx

> ![Auth Status](https://github.com/samedan/2504_NextJS_Grinder_03_Discuss/blob/main/_printscreens/02printscreen.jpg)

### Path Helpers

> /src/paths.ts

### Header with Auth state

> /src/components/header.tsx -> {session?.user}

> ![AuthHeader](https://github.com/samedan/2504_NextJS_Grinder_03_Discuss/blob/main/_printscreens/03printscreen.jpg)

### Setting HomePage static

> Header.tsx -> Header-auth.tsx -> useSession();

### Form Create Topic

> components/topics/topic-create-form.tsx

# Action

> /src/actions/create-topic.ts

### Validation with ZOD

> createTopicSchema = z.object(...)

### errors type Interface

# create-topics.ts

```
interface CreateTopicFormState {
  errors: {
    name?: string[];
    description?: string[];
  };
}
```
