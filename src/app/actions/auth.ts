'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function login(formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  // ---------------------------------------------------------
  // MOCK AUTHENTICATION LOGIC FOR PORTFOLIO SHOWCASE
  // ---------------------------------------------------------
  
  if (email === 'admin@example.com' && password === 'admin') {
    // Master Admin Login
    (await cookies()).set('auth_token', 'admin', { httpOnly: true, secure: process.env.NODE_ENV === 'production' })
    redirect('/dashboard/admin')
  } else if (email && password) {
    // Regular User Login (For demo purposes, any other creds work)
    (await cookies()).set('auth_token', 'user', { httpOnly: true, secure: process.env.NODE_ENV === 'production' })
    redirect('/dashboard')
  } else {
    throw new Error('Invalid credentials')
  }
}

export async function logout() {
  (await cookies()).delete('auth_token')
  redirect('/')
}
