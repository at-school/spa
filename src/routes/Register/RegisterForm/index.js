import { Button, Checkbox, Form, Icon, Input, Select, Tooltip } from "antd";
import React from "react";
import "./RegisterForm.scss";
import RegisterFormAgreement from "./RegisterFormAgreement";

const { Option } = Select;

class RegisterForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
    agreementVisible: false,
    agree: false
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  handleConfirmBlur = e => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (_, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue("password")) {
      callback("Two passwords that you enter is inconsistent!");
    } else {
      callback();
    }
  };

  validateToNextPassword = (_, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  };

  toggleAgreementDrawer = () => {
    if (!this.state.agreementVisible) {
      this.props.form.setFieldsValue({
        agreement: !this.props.form.getFieldValue("agreement")
      });
    }
    this.setState(prevState => ({
      agreementVisible: !prevState.agreementVisible
    }));
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const prefixSelector = getFieldDecorator("prefix", {
      initialValue: "61"
    })(
      <Select style={{ width: 70 }}>
        <Option value="61">+61</Option>
        <Option value="64">+64</Option>
      </Select>
    );

    return (
      <React.Fragment>
        <Form
          layout="vertical"
          onSubmit={this.handleSubmit}
          className="RegisterForm"
        >
          <Form.Item label="E-mail">
            {getFieldDecorator("email", {
              rules: [
                {
                  type: "email",
                  message: "The input is not valid E-mail!"
                },
                {
                  required: true,
                  message: "Please input your E-mail!"
                }
              ]
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Password">
            {getFieldDecorator("password", {
              rules: [
                {
                  required: true,
                  message: "Please input your password!"
                },
                {
                  validator: this.validateToNextPassword
                }
              ]
            })(<Input type="password" />)}
          </Form.Item>
          <Form.Item label="Confirm Password">
            {getFieldDecorator("confirm", {
              rules: [
                {
                  required: true,
                  message: "Please confirm your password!"
                },
                {
                  validator: this.compareToFirstPassword
                }
              ]
            })(<Input type="password" onBlur={this.handleConfirmBlur} />)}
          </Form.Item>
          <Form.Item label="Name">
            {getFieldDecorator("name", {
              rules: [
                {
                  required: true,
                  message: "Please input your name!",
                  whitespace: true
                }
              ]
            })(<Input />)}
          </Form.Item>
          <Form.Item
            label={
              <span>
                Nickname&nbsp;
                <Tooltip title="What do you want others to call you?">
                  <Icon type="question-circle-o" />
                </Tooltip>
              </span>
            }
          >
            {getFieldDecorator("nickname")(<Input />)}
          </Form.Item>
          <Form.Item label="Phone Number">
            {getFieldDecorator("phone", {
              rules: [
                { required: true, message: "Please input your phone number!" }
              ]
            })(
              <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("agreement", {
              valuePropName: "checked",
              rules: [
                {
                  validator: (_, value, cb) =>
                    Boolean(value) ? cb() : cb(true),
                  message: "You must agree to terms and conditions"
                }
              ]
            })(
              <Checkbox>
                I have read the{" "}
                <span
                  onClick={this.toggleAgreementDrawer}
                  className="agreement"
                >
                  agreement
                </span>
              </Checkbox>
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
        <RegisterFormAgreement
          onClose={this.toggleAgreementDrawer}
          visible={this.state.agreementVisible}
        />
      </React.Fragment>
    );
  }
}

const WrappedRegisterForm = Form.create({ name: "register" })(RegisterForm);

export default WrappedRegisterForm;
