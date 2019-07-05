import React from 'react';
import { Form, Modal, Input } from 'antd';

const { TextArea } = Input;

const MasterUnitModal = (props: any) => {
    return(
        <div>
            <Modal
                title="Master Unit Modal"
                visible={props.visible}
                onOk={props.update}
                onCancel={props.cancel}
            >
            <Form.Item label="Name">
                <Input 
                        minLength={3} 
                        maxLength={20} 
                        onChange={props.changeName}
                        type="text"
                        value={props.valName}
                        name="name" 
                        required
                />
            </Form.Item>
            <Form.Item label="Code">
                <Input 
                        minLength={1} 
                        maxLength={6}
                        onChange={props.changeCode}
                        value={props.valCode}
                        type="text"
                        name="code" 
                        required
                />
            </Form.Item>
            <Form.Item label="Master Unit">
                
                    <TextArea
                            rows={4}
                            onChange={props.changeUnit}
                            value={props.valUnit} />,

                {/* <Select placeholder="Select a option and change input text above"
                    onChange={this.handleSelectChange}>
                    <Option value="test">test</Option>
                </Select>  */}
                
            </Form.Item>
            </Modal>
        </div>
    );
}

export default MasterUnitModal;