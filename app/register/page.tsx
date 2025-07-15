'use client'
import { signup } from '@/app/actions/signUp'
import Link from 'next/link'
import { useActionState } from 'react'

export default function SignupForm() {
  const [state, action, pending] = useActionState(signup, undefined)
  return (
    <div className="page-container">
      <form action={action} className="form-box">
        <h1 className="form-heading">Sign Up</h1>

        <div className="input-group">
          <label className="input-label" htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            placeholder="Name"
            className="input-field"
          />
          {state?.errors?.name && <p className="error-text">{state.errors.name}</p>}
        </div>

        <div className="input-group">
          <label className="input-label" htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            className="input-field"
          />
          {state?.errors?.email && <p className="error-text">{state.errors.email}</p>}
        </div>

        <div className="input-group">
          <label className="input-label" htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            className="input-field"
          />
          {state?.errors?.password && (
            <div>
              <p className="error-text" style={{ fontWeight: 'bold' }}>Password must:</p>
              <ul>
                {state.errors.password.map((item: string) => (
                  <li key={item} className="error-text">* {item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="actions">
          <button
            type="submit"
            disabled={pending}
            className="button-submit"
          >
            Register
          </button>
          <Link href="/login" className="link">Return to login</Link>
        </div>
      </form>
    </div>
  )
}