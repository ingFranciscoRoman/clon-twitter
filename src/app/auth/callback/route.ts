import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse, type NextRequest } from 'next/server'

// Esto es una opción de Next.js para que cachee de forma
// estática la ruta
export const dynamic = 'force-dynamic'

export async function GET (request: NextRequest) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')

  if (code !== null) {
    const supabase = createRouteHandlerClient({ cookies })
    /**
     * usando el código que le hemos pasado por url
     * Nos devuelve la sesión del usuario.
     */
    await supabase.auth.exchangeCodeForSession(code)
  }

  // URL a la que redireccionar después de que se complete el proceso de inicio de sesión
  return NextResponse.redirect(requestUrl.origin)
}
