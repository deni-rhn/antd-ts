import React, {Component, Fragment} from 'react';
import { Form, Select, Input, Button } from 'antd';

const { TextArea } = Input;

export class MasterLokasiForm extends Component<any, any> {
    handleSubmit = (e: any) => {
        e.preventDefault();
        this.props.form.validateFields((err:any, values:any) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    handleSelectChange = (value: any) => {
        console.log(value);
        this.props.form.setFieldsValue({
            note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;

        return(
            <Fragment>
                <h3 className="text-center">Add Data For Master Lokasi</h3>
                <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit}>
                    <Form.Item label="Name">
                        {getFieldDecorator('name', {
                        rules: [{ required: true, message: 'Please input your name!' }],
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item label="Code">
                        {getFieldDecorator('code', {
                        rules: [{ required: true, message: 'Please input your code!' }],
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item label="Address">
                        {getFieldDecorator('unit', {
                        rules: [{ required: true, message: 'Please input your address!' }],
                        })(
                            <TextArea rows={4} />,
                        )}
                    </Form.Item>
                    <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Fragment>
        );
    }
}

export default Form.create()(MasterLokasiForm);