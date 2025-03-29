### Source

> https://www.udemy.com/course/next-js-the-complete-developers-guide/learn/lecture/40830430#questions

# Modification

# Modification 2

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

### Errors display

> /src/actions/create-topic.ts

> ![Errors](https://github.com/samedan/2504_NextJS_Grinder_03_Discuss/blob/main/_printscreens/04printscreen.jpg)

### Post Validation DBB

# Check to see if Post has valid Topic (DBB)

> create-post.ts -> const topic = await db.topic.findFirst({})

> src/app/topics/[slug]/page.tsx -> pass topicId to PostCreateForm -> <PostCreateForm slug={slug} />

### Model Queries Requests from DBB

> /src/db/queries/posts.ts

```
export function fetchPostByTopicSlug(slug: string): Promise<PostWithData[]> {
  return db.post.findMany({
    where: { topic: { slug: slug } },
    include: {
      topic: { select: { slug: true } },
      user: { select: { name: true } },
      _count: { select: { comments: true } },
    },
  });
}
```

### Individual Post

# Query to get Post

> src/db/queries/posts.ts

# Show Post

> /src/app/topics/[slug]/posts/[postId]/page.tsx

# Post List

> /src/app/topics/[slug]/page.tsx

### COMMENTS

> src/db/queries/comments.ts -> fetchCommentsByPostId()

> src/componnets/comments/comment-list.tsx -> fetchData()

> /src/components/comments/comment-show.tsx

> /src/app/topics/[slug]/posts/[postId]/page.tsx

### Pass Postid to all child pages

### Memoization

> /src/db/queries/comments.ts -> cache()

### Suspence - streaming content

# Pause

> post-show.tsx -> await new Promise((resolve) => setTimeout(resolve, 2500));

# Test Suspence

> /src/app/topics/[slug]/posts/[postId]/page.tsx -> <Suspense fallback={<div>Loading...</div>}>

### Suspence with Skeleton

> post-show-loading.tsx -> <Skeleton />

> ![Skeleton](https://github.com/samedan/2504_NextJS_Grinder_03_Discuss/blob/main/_printscreens/05printscreen.jpg)

### TopPosts on Front Page

# Database return with associated data

> /src/db/queries/posts.ts -< fetchTopPosts()

# display on front page

> /src/app/page.tsx

### Search params

# SearchInput (search-input.tsx)

> <Input defaultValue={searchParams.get("term") || ""} />;
