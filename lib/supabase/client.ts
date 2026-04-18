import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_LOGIN1SUPABASE_URL!,
    process.env.NEXT_PUBLIC_LOGIN1SUPABASE_ANON_KEY!,
  )
}
