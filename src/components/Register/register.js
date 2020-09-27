import React from "react";

class register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      passwords: "",
      name: "",
    };
  }
  onNameChange = (event) => {
    this.setState({ name: event.target.value });
  };
  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };
  onPasswordChange = (event) => {
    this.setState({ passwords: event.target.value });
  };

  onSubmitSignIn = () => {
    fetch("https://desolate-falls-09706.herokuapp.com/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.email,
        passwords: this.state.passwords,
        name: this.state.name,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          console.log(user)
          this.props.LoadUser(user)
          this.props.onRouteChange("home")
        }
      });
  };

  render() {
    return (
      <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure ">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f4 fw6 ph0 mh0">Kayıt Ol</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">
                  İsim
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="name"
                  id="name"
                  onChange={this.onNameChange}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">
                  Email
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">
                  Şifre
                </label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}
                />
              </div>
            </fieldset>
            <div className="">
              <input
                onClick={this.onSubmitSignIn}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib "
                type="submit"
                value="Kayıt Ol"
              />
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default register;
