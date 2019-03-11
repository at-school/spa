import { Button, Checkbox, Form, Icon, Input } from "antd";
import React from "react";
import "./SignInForm.scss";
import { withRouter } from "react-router-dom";

class GlobalRouteSignInForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log(values);
        this.props
          .signin({
            variables: {
              email: values.email,
              password: values.password,
            }
          })
          .then(res => {
            console.log(res);
            this.props.history.push({
              pathname: "/sign-in-success",
              state: {
                id: res.data.signin.id
              }
            });
          })
          .catch(err => console.log(err));
        console.log("Received values of form: ", values);
        // do something to the server
        this.setState({ resendEmailButtonVisible: true });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Form onSubmit={this.handleSubmit} className="SignInForm">
          <Form.Item>
            {getFieldDecorator("email", {
              rules: [
                { required: true, message: "Please input your email!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="email"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("password", {
              rules: [
                { required: true, message: "Please input your Password!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Password"
              />
            )}
          </Form.Item>
          <Form.Item>
            <div className="remember-me-forgot-pw">
              {getFieldDecorator("remember", {
                valuePropName: "checked",
                initialValue: true
              })(<Checkbox>Remember me</Checkbox>)}
              <a className="login-form-forgot" href="/">
                Forgot password
              </a>
            </div>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Sign In
            </Button>
            <div>
              Or <a href="/register">register now!</a>
            </div>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const WrappedGlobalRouteSignInForm = Form.create({ name: "normal_login" })(
  withRouter(GlobalRouteSignInForm)
);

export default WrappedGlobalRouteSignInForm;
