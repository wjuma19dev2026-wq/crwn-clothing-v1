import './Authentication.scss'
import SignInForm from '../../components/sign-in-form'
import SingUpForm from '../../components/sing-up-form'

const Authentication = () => {
  return (
    <main className="container">
      <div className="row my-5">
        <div className="col-12 col-sm-12 col-md-6 col-lg-5 col-xl-4 offset-xl-2 offset-lg-1 offset-xl-1">
          <SignInForm />
        </div>
        <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-4 offset-md-1  offset-lg-1 offset-xl-1">
          <SingUpForm />
        </div>
      </div>
    </main>
  )
}

export default Authentication
