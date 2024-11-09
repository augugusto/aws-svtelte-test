import { redirect } from "@sveltejs/kit"

export const ssr = false
export const prerender = true

export function load(){
    redirect(301,'/home')
}