import { SignIn } from '@clerk/remix';

const SignInPage = () => {
  return (
    <div>
      <h1>Hi this is the Sign In route</h1>
      <SignIn />
    </div>
  )
}

export default SignInPage;