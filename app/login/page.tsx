'use client'

import Link from "next/link"
import { useActionState } from "react"
import { login } from "../actions/signIn"

export default function LoginForm() {
  const [state, action] = useActionState(login, undefined)

  return (
    <div className="page-container">
      <form className="form-box" action={action}>
        <h1 className="form-heading">Login</h1>

        <div className="input-group">
          <label className="input-label" htmlFor="name">Name</label>
          <input id="name" name="name" placeholder="Name" className="input-field" />
          {state?.errors?.name && <p className="error-text">Login is required</p>}
        </div>

        <div className="input-group">
          <label className="input-label" htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="Email" className="input-field" />
          {state?.errors?.email && <p className="error-text">Email is required</p>}
        </div>

        <div className="input-group">
          <label className="input-label" htmlFor="password">Password</label>
          <input id="password" name="password" type="password" className="input-field" />
          {state?.errors?.password && <p className="error-text">Password is required</p>}
          {state?.message && <p className="error-text" style={{ paddingTop: '0.25rem' }}>{state.message}</p>}
        </div>

        <div className="actions">
          <button type="submit" className="button-submit">
            Sign In
          </button>
          <Link href="/register" className="link">Sign Up</Link>
        </div>
      </form>
    </div>
  )
}