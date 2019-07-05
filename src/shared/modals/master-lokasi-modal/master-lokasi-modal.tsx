import React from 'react';
import { Form, Modal, Input } from 'antd';

const { TextArea } = Input;

const MasterLokasiModal = (props: any) => {
    return(
        <div>
            <Modal
                title="Master Lokasi Modal"
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
                <Form.Item label="Address">
                        
                    <TextArea 
                        rows={4}
                        onChange={props.changeAddr}
                        value={props.valAddr}
                    />,

                </Form.Item>
            </Modal>
        </div>
    );
}

export default MasterLokasiModal;
