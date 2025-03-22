"use server";

import * as auth from "@/auth";

// 'github' is the signin Provider
export async function signIn() {
  return auth.signIn("github");
}

export async function signOut() {
  return auth.signOut();
}
