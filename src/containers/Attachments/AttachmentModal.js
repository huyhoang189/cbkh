import React, { Component } from "react";
import { connect } from "react-redux";
import actions from '../../redux/attachment/actions'
import clone from 'clone';
import Input from '../../components/uielements/input';
import Modal from '../../components/feedback/modal';
import { Row, Col, Select } from 'antd'
import {
    Fieldset,
    Form,
    Label,
    TableWrapper
} from './Attachments.style';

const { Option } = Select;
class AttachmentModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    

    render() {
        const {
            actionName,
            modalAttachmentActive,
        } = this.props;


        return (
            <Modal
                width={500}
                visible={modalAttachmentActive}
                onClose={this.props.toggleAttachmentModal.bind(this, null)}
                title={actionName === 'add' ? 'Thêm mới tài liệu tham khảo' : 'Sửa tài liệu tham khảo'}
                okText={actionName === 'add' ? 'Thêm' : 'Sửa'}
                cancelText='Hủy'
                onCancel={this.props.toggleAttachmentModal.bind(this, null)}
            >
                <Form>
                    <Fieldset>
                        <Label>Mã định danh</Label>
                        <Input
                            placeholder="Nhập vào định danh số công bố khoa học"
                        />
                    </Fieldset>
                    <Fieldset>
                        <Label>Tiêu đề</Label>
                        <Input
                            placeholder="Nhập vào tiêu đề"
                        />
                    </Fieldset>
                    <Fieldset>
                        <Label>Nguồn đăng</Label>
                        <Input
                            placeholder="Nhập vào nguồn đăng"
                        />
                    </Fieldset>
                    <Fieldset>
                        <Label>Năm</Label>
                        <Input
                            placeholder="Nhập vào năm"
                        />
                    </Fieldset>
                    <Fieldset>
                        <Label>Tác giả</Label>
                        <Input
                            placeholder="Nhập vào tác giả"
                        />
                    </Fieldset>
                    <Fieldset>
                        <Label>Link của trích dẫn</Label>
                        <Input
                            placeholder="Nhập vào đường link"
                        />
                    </Fieldset>

                </Form>
            </Modal >
        )
    }
}
export default connect(
    state => ({
        ...state.Attachment,
    }),
    ({
        ...actions,
    })
)(AttachmentModal)