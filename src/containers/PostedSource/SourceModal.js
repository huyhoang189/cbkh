import React, { Component } from "react";
import { connect } from "react-redux";
import actions from '../../redux/postedSource/actions'
import clone from 'clone';
import Input from '../../components/uielements/input';
import Modal from '../../components/feedback/modal';
import { Row, Col, Select } from 'antd'
import {
    Fieldset,
    Form,
    Label,
    TableWrapper
} from './Sources.style';

const { Option } = Select;
class SourceModal extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        this.props.getSources();
    }
    handleSourcesRecord = (_source) => {

    }

    render() {
        const {
            actionName,
            modalSourceActive,

        } = this.props;

        const { source } = clone(this.props);

        return (
            <Modal
                width={500}
                visible={modalSourceActive}
                onClose={this.props.toggleSourceModal.bind(this, null)}
                title={actionName === 'add' ? 'Thêm mới nguồn đăng' : 'Chỉnh sửa nguồn đăng'}
                okText={actionName === 'add' ? 'Thêm' : 'Sửa'}
                onOk={this.handleSourcesRecord.bind(this,source)}
                cancelText='Hủy'
                onCancel={this.props.toggleSourceModal.bind(this, null)}
            >
                <Form>
                    <Fieldset>
                        <Label>Tên nguồn đăng</Label>
                        <Input
                            placeholder="Nhập vào tên nguồn đăng"
                        />
                    </Fieldset>
                    <Fieldset>
                        <Label>Giới thiệu</Label>
                        <Input
                            placeholder="Nhập vào thiệu về nguồn đăng"
                        />
                    </Fieldset>
                    <Fieldset>
                        <Label>Điểm trích dẫn</Label>
                        <Input
                            placeholder="Nhập vào nguồn đăng"
                        />
                    </Fieldset>
                    <Fieldset>
                        <Label>Chỉ số SJR</Label>
                        <Input
                            placeholder="Nhập vào chi số sjr"
                        />
                    </Fieldset>
                    <Fieldset>
                        <Label>Mã số tiêu chuẩn quốc tế (ISSN)</Label>
                        <Input
                            placeholder="Nhập vào ISSN"
                        />
                    </Fieldset>

                </Form>
            </Modal >
        )
    }
}
export default connect(
    state => ({
        ...state.Source,
    }),
    ({
        ...actions,
    })
)(SourceModal)