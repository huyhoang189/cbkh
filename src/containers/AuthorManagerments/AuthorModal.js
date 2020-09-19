import React, { Component } from "react";
import { connect } from "react-redux";
import actions from '../../redux/author/actions'
import researchGroupActions from '../../redux/researchGroup/actions'
import documentActions from '../../redux/scientificJournal/actions'
import majorActions from '../../redux/major/actions'

import clone from 'clone';
import Input from '../../components/uielements/input';
import Modal from '../../components/feedback/modal';
import { Row, Col, Select, Tag } from 'antd'
import {
    Fieldset,
    Form,
    Label,
    TableWrapper,
    ButtonHolders
} from './AuthorManagerments.style';
import { AuthorColumns } from './Columns'
import { select } from "redux-saga/effects";


function uuid() {
    return 'xxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}


const { Option } = Select;
class AuthorModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: '',
            listEmail: [],
            listResearch: [],
        };
    }

    componentDidMount() {
        this.props.getUniversities();
        this.props.getDepartments();
        this.props.getSubDepartments();
        this.props.getResearchGroups();
        this.props.getMajors();
        this.props.getSpecializations();
    }

    onAuthorInputChange = (key, event) => {
        let { author } = clone(this.props);
        if (key) author[key] = event.target.value;
        this.props.updateAuthorInput(author);
    }

    onAuthorSelectedChange = (key, value) => {
        // console.log(key, value)
        let { author } = clone(this.props);
        if (key) author[key] = value;
        this.props.updateAuthorInput(author);
        // console.log(author)


    }
    onUniversitySelectedChange = (university) => {
        this.props.updateSelectedUniversity(university)
    }
    onDepartmentSelectedChange = (deparment) => {
        this.props.updateSelectedDepartment(deparment)
    }
    onSubDepartmentSelectedChange = (subDeparment) => {
        this.props.updateSelectedSubDepartment(subDeparment)
        let { author } = clone(this.props);
        author['affiliationId'] = subDeparment.id;
        this.props.updateAuthorInput(author);
    }

    onMajorSelectedChange = (major) => {
        this.props.updateSelectedMajor(major);
    }
    onSpecializationSelectedChange = (specialization) => {
        this.props.updateSelectedSpecialization(specialization);
        let { author } = clone(this.props);
        author['majorId'] = specialization.id;
        this.props.updateAuthorInput(author);
    }

    onRenderResearchGroup = (props) => {
        const { label, value, closable, onClose } = props;
        console.log(props)
        return (
            <Tag closable={closable} onClose={onClose} style={{ marginRight: 3 }}>
                {label}
            </Tag>
        );
    }
  
    handleAuthorsRecord = (_author) => {
        const { actionName, selectedAuthorDocument } = this.props;

        if (actionName === 'add-author') {
            const { selectedSubDepartment, selectedSpecialization } = this.props;
            let { author } = clone(this.props)
            author['affiliationId'] = selectedSubDepartment.id;
            author['majorId'] = selectedSpecialization.id;
            author['id'] = uuid();
            // console.log(author)
            this.props.addAuthor(author);

        } else if (actionName === 'update') {
            let { author } = clone(this.props)
            this.props.updateAuthor(author);
        } else if (actionName === 'add-for-document') {
            const { selectedSubDepartment, selectedSpecialization } = this.props;
            let { author } = clone(this.props)
            author['affiliationId'] = selectedSubDepartment.id;
            author['majorId'] = selectedSpecialization.id;
            author['id'] = uuid();
            // console.log(author)
            this.props.addAuthor(author);
            this.props.updateAddAuthorForDocument(author)
        }
        // this.props.toggleAuthorModal(false);
    }
    render() {
        const {
            actionName,
            modalAuthorActive,
            authors,
            universities, selectedUniversity,
            departments, selectedDepartment,
            subDepartments, selectedSubDepartment,
            researchGroups,
            majors, selectedMajor,
            specializations, selectedSpecialization,

        } = this.props;
        const dataSource = [...authors]
        const { author } = clone(this.props);
        const { listResearch, listEmail, selected } = this.state;
        // console.log(selectedSpecialization)
        // const rowSelection = {
        //     type: "checkbox",
        //     selectedRows: selectedAuthorDocument,
        //     onChange: (selectedRowKeys, selectedRows) => {
        //         this.props.updateSelectedAuthorDocument(selectedRows);
        //     },
        // }
        // console.log(researchGroups)
        return (
            <Modal
                width={850}
                visible={modalAuthorActive}
                onClose={this.props.toggleAuthorModal.bind(this, null)}
                title={actionName === 'add-author' ? 'Thêm mới tác giả' : actionName === 'add-for-document' ? 'Thêm mới tác giả' : 'Chỉnh sửa tác giả'}
                okText={actionName === 'add-author' ? 'Thêm' : actionName === 'add-for-document' ? 'Thêm' : 'Cập nhật'}
                onOk={this.handleAuthorsRecord.bind(this, author)}
                cancelText='Hủy'
                onCancel={this.props.toggleAuthorModal.bind(this, null)}
            >
                <Form>
                    {/* {actionName === 'selected-authors' ? (
                        <div>
                            <Row style={{ paddingBottom: '10px' }}>
                                <ButtonHolders>
                                    <Label style={{ paddingRight: 5 }}>Từ khoá</Label>
                                    <Input
                                        type="text"
                                        placeholder="Tìm kiếm"
                                        style={{ width: 300 }}
                                    >
                                    </Input>
                                </ButtonHolders>

                            </Row>

                            <TableWrapper
                                rowKey="key"
                                columns={AuthorColumns}
                                rowSelection={{ ...rowSelection }}
                                dataSource={dataSource}
                                bordered={true}
                                className="isoSimpleTable"
                                pagination={{
                                    defaultPageSize: 10,
                                    hideOnSinglePage: true,
                                    total: dataSource.length,
                                    showTotal: (total, range) => {
                                        return `Hiển thị ${range[0]}-${range[1]} trên ${dataSource.length
                                            } tác giả`;
                                    },
                                }}
                            />
                        </div>
                    ) : ( */}
                    <div>
                        <Row gutter={16}>
                            <Col className="gutter-row" span={12}>
                                <Fieldset>
                                    <Label>Tên đầy đủ</Label>
                                    <Input
                                        placeholder='Nhập tên đầy đủ'
                                        label='fullname'
                                        value={author.fullname}
                                        onChange={this.onAuthorInputChange.bind(this, 'fullname')}
                                    />
                                </Fieldset>
                            </Col >
                            <Col className="gutter-row" span={6}>
                                <Fieldset>
                                    <Label>Giới tính</Label>
                                    {/* <Input
                                                placeholder='Nhập giới tính'
                                                label='gender'
                                                value={author.gender}
                                                onChange={this.onAuthorInputChange.bind(this, 'gender')}
                                            /> */}
                                    <Select
                                        placeholder='Nhập giới tính'
                                        label='gender'
                                        value={author.gender}
                                        onChange={this.onAuthorSelectedChange.bind(this, 'gender')}
                                    >
                                        <Option value={1}>Nam</Option>
                                        <Option value={0}>Nữ</Option>
                                    </Select>

                                </Fieldset>

                            </Col>

                            <Col className="gutter-row" span={6}>
                                <Fieldset>
                                    <Label>Ngày sinh</Label>
                                    <Input
                                        placeholder='Nhập ngày sinh'
                                        label='birtdate'
                                        value={author.birtdate}
                                        onChange={this.onAuthorInputChange.bind(this, 'birtdate')}
                                    />
                                </Fieldset>

                            </Col>
                        </Row >

                        <Row gutter={16} style={{ paddingTop: '10px' }}>

                            <Col className="gutter-row" span={18}>
                                <Fieldset>
                                    <Label>Email</Label>
                                    <Select
                                        placeholder='Nhập vào email'
                                        label='email'
                                        value={author.email}
                                        mode="tags"
                                        style={{ width: '100%' }}
                                        onChange={this.onAuthorSelectedChange.bind(this, 'email')}
                                        tokenSeparators={[',']}>
                                        {listEmail}
                                    </Select>
                                </Fieldset>

                            </Col>

                            <Col className="gutter-row" span={6}>
                                <Fieldset>
                                    <Label>Số điện thoại</Label>
                                    <Input
                                        placeholder='Nhập vào số điện thoại'
                                        label='phone'
                                        value={author.phone}
                                        onChange={this.onAuthorInputChange.bind(this, 'phone')}
                                    />
                                </Fieldset>
                            </Col>
                        </Row>

                        <Row gutter={16} style={{ paddingTop: '10px' }}>
                            <Col className="gutter-row" span={24}>
                                <Fieldset>
                                    <Label>Hướng nghiên cứu chuyên sâu</Label>
                                    <Input
                                        placeholder='Nhập vào hướng nghiên cứu chuyên sâu'
                                        label='depthResearch'
                                        value={author.depthResearch}
                                        onChange={this.onAuthorInputChange.bind(this, 'depthResearch')}
                                    />
                                </Fieldset>
                            </Col>
                        </Row>
                        <Row gutter={16} style={{ paddingTop: '10px' }}>
                            <Col className="gutter-row" span={24}>
                                <Fieldset>
                                    <Label>Nhóm nghiên cứu mạnh</Label>
                                    {/* <Select
                                                placeholder='Nhập vào nhóm nhiên cứu mạnh'
                                                label='groupId'
                                                value={author.groupId}
                                                mode="tags"
                                                style={{ width: '100%' }}
                                                onChange={this.onAuthorSelectedChange.bind(this, 'groupId')}
                                                tokenSeparators={[',']}>
                                                {listResearch}
                                            </Select> */}
                                    <Select
                                        mode='multiple'
                                        placeholder='Nhập vào nhóm nhiên cứu mạnh'
                                        onChange={this.onAuthorSelectedChange.bind(this, 'groupId')}
                                        optionLabelProp="label"
                                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                        value={author.groupId}
                                    >
                                        {researchGroups.map((researchGroup, index) => {
                                            return (
                                                <Option
                                                    key={index}
                                                    value={researchGroup.id}
                                                    label={researchGroup.name}

                                                >
                                                    {researchGroup.name}
                                                </Option>
                                            )
                                        })}
                                    </Select>
                                </Fieldset>

                            </Col>
                        </Row>
                        <Row gutter={16} style={{ paddingTop: '10px' }}>
                            <Col className="gutter-row" span={8}>
                                <Fieldset>
                                    <Label>Học hàm</Label>
                                    <Input
                                        placeholder='Chọn học hàm'
                                        label='academicRankId'
                                        value={author.academicRankId}
                                        onChange={this.onAuthorInputChange.bind(this, 'academicRankId')}
                                    />
                                </Fieldset>
                            </Col>
                            <Col className="gutter-row" span={8}>
                                <Fieldset>
                                    <Label>Học vị</Label>
                                    <Input
                                        placeholder='Chọn học vị'
                                        label='degreeId'
                                        value={author.degreeId}
                                        onChange={this.onAuthorInputChange.bind(this, 'degreeId')}
                                    />
                                </Fieldset>

                            </Col>
                            <Col className="gutter-row" span={8}>
                                <Fieldset>
                                    <Label>Chức danh khoa học</Label>
                                    <Input
                                        placeholder='Chọn chức danh khoa học'
                                        label='scientificTitle'
                                        value={author.scientificTitle}
                                        onChange={this.onAuthorInputChange.bind(this, 'scientificTitle')}
                                    />
                                </Fieldset>

                            </Col>

                        </Row>

                        <Row gutter={16} style={{ paddingTop: '10px' }}>
                            <Col className="gutter-row" span={8}>
                                <Fieldset>
                                    <Label>Trường đại học (đơn vị cấp 1)</Label>
                                    <Select
                                        value={selectedUniversity.id}
                                    >
                                        {universities.map((university, index) => {
                                            return (
                                                <Option
                                                    key={index}
                                                    value={university.id}
                                                    label={university.name}
                                                    onClick={this.onUniversitySelectedChange.bind(this, university)}

                                                >
                                                    {university.name}
                                                </Option>
                                            )
                                        })}
                                    </Select>
                                </Fieldset>
                            </Col>
                            <Col className="gutter-row" span={8}>
                                <Fieldset>
                                    <Label>Khoa (đơn vị cấp 2)</Label>
                                    <Select
                                        value={selectedDepartment.id}
                                    >
                                        {departments.map((department, index) => {
                                            return (
                                                <Option
                                                    key={index}
                                                    value={department.id}
                                                    label={department.name}
                                                    onClick={this.onDepartmentSelectedChange.bind(this, department)}

                                                >
                                                    {department.name}
                                                </Option>
                                            )
                                        })}
                                    </Select>
                                </Fieldset>

                            </Col>
                            <Col className="gutter-row" span={8}>
                                <Fieldset>
                                    <Label>Bộ môn (đơn vị cấp 3)</Label>
                                    <Select
                                        value={author.id ? author.affiliationId : selectedSubDepartment.id}
                                    >
                                        {subDepartments.map((subDepartment, index) => {
                                            return (
                                                <Option
                                                    key={index}
                                                    value={subDepartment.id}
                                                    label={subDepartment.name}
                                                    onClick={this.onSubDepartmentSelectedChange.bind(this, subDepartment)}

                                                >
                                                    {subDepartment.name}
                                                </Option>
                                            )
                                        })}
                                    </Select>
                                </Fieldset>

                            </Col>
                        </Row>

                        <Row gutter={16} style={{ paddingTop: '10px' }}>
                            <Col className="gutter-row" span={8}>
                                <Fieldset>
                                    <Label>Ngành</Label>
                                    <Select
                                        value={selectedMajor.id}
                                    >
                                        {majors.map((major, index) => {
                                            return (
                                                <Option
                                                    key={index}
                                                    value={major.id}
                                                    label={major.name}
                                                    onClick={this.onMajorSelectedChange.bind(this, major)}

                                                >
                                                    {major.name}
                                                </Option>
                                            )
                                        })}
                                    </Select>
                                </Fieldset>
                            </Col>
                            <Col className="gutter-row" span={8}>
                                <Fieldset>
                                    <Label>Chuyên ngành</Label>
                                    <Select
                                        value={selectedSpecialization.id}
                                    >
                                        {specializations.map((specialization, index) => {
                                            return (
                                                <Option
                                                    key={index}
                                                    value={specialization.id}
                                                    label={specialization.name}
                                                    onClick={this.onSpecializationSelectedChange.bind(this, specialization)}

                                                >
                                                    {specialization.name}
                                                </Option>
                                            )
                                        })}
                                    </Select>
                                </Fieldset>

                            </Col>
                            <Col className="gutter-row" span={8}>
                                <Fieldset>
                                    <Label>ORCID</Label>
                                    <Input
                                        placeholder='Nhập vào ORCID'
                                        label='orcidId'
                                        value={author.orcidId}
                                        onChange={this.onAuthorInputChange.bind(this, 'orcidId')}
                                    />
                                </Fieldset>

                            </Col>
                        </Row>

                        <Row gutter={16} style={{ paddingTop: '10px' }}>
                            <Col className="gutter-row" span={12}>
                                <Fieldset>
                                    <Label>Link GoogleScholar</Label>
                                    <Input
                                        placeholder='Nhập vào link GoogleScholar'
                                        label='linkGoogleScholar'
                                        value={author.linkGoogleScholar}
                                        onChange={this.onAuthorInputChange.bind(this, 'linkGoogleScholar')}
                                    />
                                </Fieldset>

                            </Col>
                            <Col className="gutter-row" span={12}>
                                <Fieldset>
                                    <Label>Link ResearchGate</Label>
                                    <Input
                                        placeholder='Nhập vào link ResearchGate'
                                        label='linkResearchGate'
                                        value={author.linkResearchGate}
                                        onChange={this.onAuthorInputChange.bind(this, 'linkResearchGate')}
                                    />
                                </Fieldset>

                            </Col>
                        </Row>
                    </div >
                    {/* )
                    } */}

                </Form>
            </Modal >
        )
    }
}
export default connect(
    state => ({
        ...state.Author,
        ...state.ScientificJournal,
        ...state.ResearchGroup,
        ...state.Major,
    }),
    ({
        ...actions,
        ...documentActions,
        ...researchGroupActions,
        ...majorActions,
    })
)(AuthorModal)