import { SignUp } from "@clerk/remix";

const SignUpPage = () => {
  return (
    <div>
      <h1>Sign Up Page</h1>
      <SignUp path="/sign-up"/>
    </div>
  )
}

export default SignUpPage;