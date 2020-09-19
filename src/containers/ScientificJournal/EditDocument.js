import React, { Component } from 'react'
import { connect } from "react-redux";
import DocumentActions from '../../redux/scientificJournal/actions'
import LanguageActions from '../../redux/language/actions'
import ResearchGroupActions from '../../redux/researchGroup/actions'
import DocumentTypeActions from '../../redux/documentType/actions'
import ClassificationActions from '../../redux/classification/actions'
import AttachmentActions from '../../redux/attachment/actions'
import CiteActions from '../../redux/cite/actions'
import SourceActions from '../../redux/postedSource/actions'
import AuthorActions from '../../redux/author/actions'
import majorActions from '../../redux/major/actions'

import LayoutContentWrapper from '../../components/utility/layoutWrapper.js';
import Box from '../../components/utility/box';
import ContentHolder from '../../components/utility/contentHolder';
import Input from '../../components/uielements/input';
import { Upload, message, Row, Col, Divider, InputNumber, Tag } from 'antd';
import { Link } from 'react-router-dom';
import Select, { SelectOption } from '../../components/uielements/select';
import clone from 'clone';


import AuthorModal from '../AuthorManagerments/AuthorModal'
import CiteModal from '../Cites/CiteModal'
import AttachmentModal from '../Attachments/AttachmentModal'
import SourceModal from '../PostedSource/SourceModal'

import { DatePicker } from 'antd';
// import moment from 'moment';
import {
    ActionBtn,
    TitleWrapper,
    TableWrapper,
    ButtonHolders,
    Form,
    Fieldset,
    Label
} from './ScientificJournal.style';
import { cited_column } from './Columns'
import TextArea from 'antd/lib/input/TextArea';

const Option = SelectOption;
// const { MonthPicker, RangePicker } = DatePicker;
class EditDocument extends Component {
    constructor(props) {
        super(props);
        this.state = {
            actionName: '',
            keyword: '',
            children: [],
            selectedAuthorDocument: [],
            listAuthor: [],
        };
    }
    componentDidMount() {
        this.props.getLanguages();
        this.props.getDocumentTypes();
        this.props.getClassifications();
        this.props.getResearchGroups();
        this.props.getAuthors();
        this.props.getMajors();
        this.props.getSpecializations();
    }
    handleAuthorModal = (author = null, actionName) => {
        this.setState({ actionName: actionName });
        this.props.toggleAuthorModal(author);
    };
    handleCiteModal = (cite = null, actionName) => {
        this.setState({ actionName: actionName });
        this.props.toggleCiteModal(cite);
    }
    handleAttachmentModal = (attachment = null, actionName) => {
        this.setState({ actionName: actionName });
        this.props.toggleAttachmentModal(attachment);
    }
    handleSourceModal = (source = null, actionName) => {
        this.setState({ actionName: actionName });
        this.props.toggleSourceModal(source);
    }


    onDocumentP8InputChange = (key, event) => {
        let { documentP8 } = clone(this.props);
        if (key) documentP8[key] = event.target.value;
        this.props.updateDocumentP8Input(documentP8);
    };
    onDocumentP8InputNumberChange = (key, value) => {
        let { documentP8 } = clone(this.props);
        if (key) documentP8[key] = value;
        this.props.updateDocumentP8Input(documentP8);
    }
    onSave = () => {
        let { enableEditView } = this.props
        let { documentP8, selectedSpecialization, selectedClassification,
            selectedMajor, selectedLanguage, selectedDocumentType, selectedResearchGroup } = this.props;
        documentP8['specializationId'] = selectedSpecialization.id;
        documentP8['majorId'] = selectedMajor.id;
        documentP8['classificationId'] = selectedClassification.id;
        documentP8['languageId'] = selectedLanguage.id;
        documentP8['documentType'] = selectedDocumentType.id;
        documentP8['groupId'] = selectedResearchGroup.id;

        // console.log(documentP8)
        if (enableEditView) {
            console.log("edit")

        }
        else {
            this.props.addDocumentP8(documentP8);
        }


    };

    updateSelectedAuthorDocument = (rowkey) => {
        this.setState({ selectedAuthorDocument: rowkey })
    }

    updateAddAuthorForDocument = (author) => {
        // console.log(author)
        let { documentP8 } = clone(this.props);
        const a = documentP8['authors'];
        a.push(author.id);
        documentP8['authors'] = a;
        this.props.updateDocumentP8Input(documentP8);
        console.log(documentP8)


    }

    onDocumentRenderTagAuthors = (authors) => {
        const listTags = [];
        // console.log(authors)
        authors.forEach((index) => {
            listTags.push(index.fullname)
        });
        return listTags;
    }

    onMajorSelectedChange = (major) => {
        this.props.updateSelectedMajor(major);
    }
    onSpecializationSelectedChange = (specialization) => {
        this.props.updateSelectedSpecialization(specialization);
    }

    onDocumentP8SelectedChange = (key, value) => {
        // console.log(key, value)
        let { documentP8 } = clone(this.props);
        if (key) documentP8[key] = value;
        this.props.updateDocumentP8Input(documentP8);
        if (key === 'languageId') {
            let { languages } = this.props;
            let language = languages.find(e => e.id === value)
            this.props.updateSelectedLanguage(language)
        } else if (key === 'documentType') {
            let { documentTypes } = this.props;
            let documentType = documentTypes.find(e => e.id === value);
            console.log(documentType)
            this.props.updateSelectedDocumentType(documentType);
        } else if (key === 'classificationId') {
            let { classifications } = this.props;
            let classification = classifications.find(e => e.id === value);
            this.props.updateSelectedClassification(classification);
        } else if (key === 'groupId') {
            let { researchGroups } = this.props;
            // console.log(researchGroups)
            let researchGroup = researchGroups.find(e => e.id === value);
            this.props.updateSelectedResearchGroup(researchGroup);
        } else if (key === 'keyword') {

        }

    }
    onDocumentP8DatePicker = (key, value) => {
        console.log(value)
        let { documentP8 } = clone(this.props);
        if (key) documentP8[key] = value;

    }
    // onDocumentP8EditorChange = (key, event) => {
    // }


    render() {
        const { redirectPath,
            selectedLanguage, languages,
            selectedClassification, classifications,
            selectedDocumentType, documentTypes,
            selectedResearchGroup, researchGroups,
            enableEditView, authors,
            majors, selectedMajor,
            specializations, selectedSpecialization,
        } = this.props;
        const { children, listAuthor } = this.state;
        let { documentP8 } = clone(this.props);
        const dataSource = [];
        // console.log(authors);


        return (
            <LayoutContentWrapper style={{ padding: '30px 10px 0 10px' }}>
                <Box>
                    <ContentHolder style={{ marginTop: 0, overflow: 'hidden' }}>
                        <TitleWrapper>
                            <Row style={{ width: "100%" }}>
                                <ButtonHolders>
                                    {/* <div style={{ float: 'left' }}>
                                        <ActionBtn
                                            type="primary"
                                        >
                                            Thêm từ file excel
                                        </ActionBtn>
                                    </div> */}
                                    <div style={{ float: 'right' }}>
                                        <ActionBtn style={{ width: '100px' }}
                                        >
                                            <Link to={redirectPath}>
                                                Huỷ
                                             </Link>
                                        </ActionBtn>
                                        {enableEditView ? (
                                            <ActionBtn
                                                type="primary"
                                                style={{ width: '100px' }}
                                                onClick={this.onSave}
                                            >
                                                <Link to={redirectPath}>
                                                    Cập nhật
                                                </Link>
                                            </ActionBtn>) : (
                                                <ActionBtn
                                                    type="primary"
                                                    style={{ width: '100px' }}
                                                    onClick={this.onSave}
                                                >
                                                    <Link to={redirectPath}>
                                                        Thêm
                                              </Link>
                                                </ActionBtn>
                                            )}

                                    </div>
                                </ButtonHolders>
                            </Row>
                        </TitleWrapper>
                        <Divider dashed />


                        <Row gutter={16} >
                            <Col span={20} offset={2}>
                                <Row gutter={16} >
                                    <Col className="gutter-row" span={12}>
                                        <Fieldset>
                                            <Label>Tiêu đề CBKH</Label>
                                            <Input

                                                placeholder="Nhập vào tiêu đề"
                                                label='title'
                                                value={documentP8.title}
                                                onChange={this.onDocumentP8InputChange.bind(this, 'title')}
                                            />
                                        </Fieldset>
                                    </Col>
                                    <Col className="gutter-row" span={6}>
                                        <Fieldset>
                                            <Label>Định danh CBKH</Label>
                                            <Input
                                                placeholder="Nhập vào định danh công bố khoa học"
                                                label='description'
                                                value={documentP8.description}
                                                onChange={this.onDocumentP8InputChange.bind(this, 'description')}
                                            />
                                        </Fieldset>
                                    </Col>
                                    <Col className="gutter-row" span={6}>
                                        <Fieldset>
                                            <Label>Định danh số CBKH (DOI)</Label>
                                            <Input
                                                placeholder="Nhập vào định danh số công bố khoa học"
                                                label='doi'
                                                value={documentP8.doi}
                                                onChange={this.onDocumentP8InputChange.bind(this, 'doi')}
                                            />
                                        </Fieldset>

                                    </Col>

                                </Row>

                                <Row gutter={16} >
                                    <Col className="gutter-row" span={6}>
                                        <Fieldset>
                                            <Label>Nguồn đăng CBKH</Label>
                                            <Input
                                                placeholder="Nhập vào nguồn đăng"
                                                label='sourceId'
                                                value={documentP8.sourceId}
                                                onClick={this.handleSourceModal.bind(this, null, 'add')}
                                            // onChange={this.onDocumentP8InputChange.bind(this, 'source_id')}
                                            />
                                            <SourceModal actionName={this.state.actionName} />
                                        </Fieldset>

                                    </Col>
                                    <Col className="gutter-row" span={6}>
                                        <Fieldset>
                                            <Label>Nhà xuất bản</Label>
                                            <Input
                                                placeholder="Nhập vào nhà xuất bản"
                                                label='publisher'
                                                value={documentP8.publisher}
                                                onChange={this.onDocumentP8InputChange.bind(this, 'publisher')}
                                            />
                                        </Fieldset>
                                    </Col>
                                    <Col className="gutter-row" span={6}>
                                        <Fieldset>
                                            <Label>Chỉ số xuất bản</Label>
                                            <Input
                                                placeholder="Nhập vào chỉ số xuất bản"
                                                label='publicationIndex'
                                                value={documentP8.publicationIndex}
                                                onChange={this.onDocumentP8InputChange.bind(this, 'publicationIndex')}
                                            />
                                        </Fieldset>

                                    </Col>
                                    <Col className="gutter-row" span={6}>
                                        <Fieldset>
                                            <Label>Thời gian xuất bản</Label>
                                            <Input
                                                placeholder="Nhập vào thời gian xuất bản"
                                                label='publishDate'
                                                value={documentP8.publishDate}
                                                onChange={this.onDocumentP8InputChange.bind(this, 'publishDate')}
                                            />
                                            {/* <DatePicker
                                            style={{ width : '100%'}}
                                            label='publish_date'
                                            placeholder='Chọn thời gian xuất bản'
                                            format="DD/MM/YYYY"
                                            value={moment(documentP8.publish_date, "DD/MM/YYYY")}
                                            onChange={this.onDocumentP8DatePicker.bind(this, 'publish_date')}
                                        /> */}
                                        </Fieldset>

                                    </Col>

                                    <Row gutter={16} >


                                        <Col className="gutter-row" span={6}>
                                            <Fieldset>
                                                <Label>Loại tài liệu</Label>
                                                <Select
                                                    value={enableEditView ? documentP8.documentType : selectedDocumentType.id}
                                                    onChange={this.onDocumentP8SelectedChange.bind(this, 'documentType')}
                                                >
                                                    {documentTypes.map((documentType, index) => {
                                                        return (
                                                            <Option
                                                                key={index}
                                                                value={documentType.id}
                                                                label={documentType.name}

                                                            >
                                                                {documentType.name}
                                                            </Option>
                                                        )
                                                    })}
                                                </Select>
                                            </Fieldset>
                                        </Col>

                                        <Col className="gutter-row" span={6}>
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

                                        <Col className="gutter-row" span={6}>
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


                                        <Col className="gutter-row" span={6}>
                                            <Fieldset>
                                                <Label>Nhóm nghiên cứu mạnh</Label>
                                                <Select
                                                    value={enableEditView ? documentP8.groupId : selectedResearchGroup.id}
                                                    onChange={this.onDocumentP8SelectedChange.bind(this, 'groupId')}
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

                                </Row>

                                <Row gutter={16} >

                                    <Col className="gutter-row" span={6}>
                                        <Fieldset>
                                            <Label>Phân loại CBKH</Label>
                                            <Select
                                                value={enableEditView ? documentP8.classificationId : selectedClassification.id}
                                                onChange={this.onDocumentP8SelectedChange.bind(this, 'classificationId')}
                                            >
                                                {classifications.map((classification, index) => {
                                                    return (
                                                        <Option
                                                            key={index}
                                                            value={classification.id}
                                                            label={classification.name}

                                                        >
                                                            {classification.name}
                                                        </Option>
                                                    )
                                                })}
                                            </Select>
                                        </Fieldset>
                                    </Col>

                                    <Col className="gutter-row" span={6}>
                                        <Fieldset>
                                            <Label>Số lượng trích dẫn</Label>
                                            <InputNumber
                                                placeholder='Nhập vào số lượng trích dẫn'
                                                label='citedNumber'
                                                value={documentP8.citedNumber}
                                                min={0}
                                                max={10000}
                                                style={{ width: "100%" }}
                                                onChange={this.onDocumentP8InputNumberChange.bind(this, 'citedNumber')}
                                            />
                                        </Fieldset>
                                    </Col>
                                    <Col className="gutter-row" span={6}>
                                        <Fieldset>
                                            <Label>Số của tạp chí</Label>
                                            <Input
                                                placeholder='Nhập vào số tạp chí'
                                                label='mtaJournalId'
                                                value={documentP8.mtaJournalId}
                                                onChange={this.onDocumentP8InputChange.bind(this, 'mtaJournalId')}
                                            />
                                        </Fieldset>
                                    </Col>

                                    <Col className="gutter-row" span={6}>
                                        <Fieldset>
                                            <Label>Số của chuyên san</Label>
                                            <Input
                                                placeholder='Nhập vào số chuyên san'
                                            />
                                        </Fieldset>
                                    </Col>



                                </Row>

                                <Row gutter={16}>
                                    <Col className="gutter-row" span={6}>
                                        <Fieldset>
                                            <Label>Ngôn ngữ</Label>
                                            <Select
                                                value={enableEditView ? documentP8.languageId : selectedLanguage.id}
                                                onChange={this.onDocumentP8SelectedChange.bind(this, 'languageId')}
                                            >
                                                {languages.map((language, index) => {
                                                    return (
                                                        <Option
                                                            key={index}
                                                            value={language.id}
                                                            label={language.name}
                                                        >
                                                            {language.name}
                                                        </Option>
                                                    )
                                                })}
                                            </Select>
                                        </Fieldset>

                                    </Col>
                                </Row>


                                <Row gutter={16}>

                                    <Col className="gutter-row" span={18}>
                                        <Fieldset>
                                            <Label>Từ khoá</Label>
                                            <Select
                                                label='keyword'
                                                value={documentP8.keyword}
                                                mode="tags"
                                                style={{ width: '100%' }}
                                                onChange={this.onDocumentP8SelectedChange.bind(this, 'keyword')}
                                                tokenSeparators={[',']}>
                                                {children}
                                            </Select>
                                        </Fieldset>

                                    </Col>
                                </Row>

                                <Row gutter={16} >
                                    <Col className="gutter-row" span={24}>
                                        <Fieldset>
                                            <Label>Tác giả tham gia</Label>
                                            <AuthorModal actionName={this.state.actionName}
                                                updateAddAuthorForDocument={this.updateAddAuthorForDocument}
                                            // selectedAuthorDocument={this.state.selectedAuthorDocument}
                                            //  updateSelectedAuthorDocument={this.updateSelectedAuthorDocument}
                                            />
                                            <Row gutter={16} >
                                                <Col span={18}>
                                                    <Select
                                                        mode='multiple'
                                                        placeholder='Chọn tác giả'
                                                        onChange={this.onDocumentP8SelectedChange.bind(this, 'authors')}
                                                        optionLabelProp="label"
                                                        style={{ width: '100%' }}
                                                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                                        value={documentP8.authors}
                                                    >
                                                        {authors.map((author, index) => {
                                                            return (
                                                                <Option
                                                                    key={index}
                                                                    value={author.id}
                                                                    label={author.fullname}
                                                                >
                                                                    {author.fullname + " - LQD - K32 -CNTT "}
                                                                </Option>
                                                            )
                                                        })}
                                                    </Select>
                                                </Col>

                                                <Col span={3}>
                                                    <ButtonHolders style={{ width: '100%' }}>
                                                        <ActionBtn

                                                            type="primary"
                                                            onClick={this.handleAuthorModal.bind(this, null, 'add-for-document')}
                                                        >
                                                            Thêm tác giả mới
                                                        </ActionBtn>
                                                    </ButtonHolders>
                                                </Col>
                                                {/* <Col span={3}>
                                                <ButtonHolders style={{ width: '100%' }}>
                                                    <ActionBtn

                                                        type="primary"
                                                        onClick={this.handleAuthorModal.bind(this, null, 'selected-authors')}
                                                    >
                                                        Thêm từ CSDL
                                                        </ActionBtn>
                                                </ButtonHolders>
                                            </Col> */}
                                            </Row>

                                        </Fieldset>
                                    </Col>
                                </Row>

                                <Row gutter={16}>
                                    <Col className="gutter-row" span={24}>
                                        <Fieldset>
                                            <Label>Toàn văn công bố khoa học</Label>
                                            <Row gutter={16}>
                                                <Col span={12} offset={10}>
                                                    <Upload
                                                        name='file'
                                                        onChange={(info) => {
                                                            if (info.file.status !== 'uploading') {
                                                                message.success(`${info.file.name} file uploaded successfully`);
                                                            }
                                                        }}
                                                    >
                                                        <ActionBtn
                                                            style={{ width: '100%' }}
                                                            type="primary"
                                                        >
                                                            Tải lên toàn văn công bố khoa học
                                                    </ActionBtn>
                                                    </Upload>
                                                </Col>


                                            </Row>
                                        </Fieldset>
                                    </Col>
                                </Row>

                                <Row gutter={16}>
                                    <Col className="gutter-row" span={24}>
                                        <Fieldset>
                                            <Label>Tóm tắt công bố khoa học</Label>
                                            <TextArea
                                                rows={6}
                                                onChange={this.onDocumentP8InputChange.bind(this, 'abstractText')}
                                                value={documentP8.abstractText}
                                            />
                                            {/* <Row gutter={16} style={{ paddingTop: '10px' }}>
                                            <Col span={24} offset={10} >
                                                <Upload
                                                    // disabled={documentP8.abstractText.length > 0 ? false : true}
                                                    name='file'
                                                    onChange={(info) => {
                                                        if (info.file.status !== 'uploading') {
                                                            message.success(`${info.file.name} file uploaded successfully`);
                                                        }
                                                    }}

                                                >
                                                    <ActionBtn
                                                        style={{ width: '100%' }}
                                                        type="primary"
                                                    >
                                                        Tải lên tóm tắt công bố khoa học
                                                    </ActionBtn>
                                                </Upload>
                                            </Col>


                                        </Row> */}
                                        </Fieldset>
                                    </Col>
                                </Row>

                                <Row gutter={16}>
                                    <Col className="gutter-row" span={24}>
                                        <Fieldset>
                                            <Label>Trích dẫn công bố khoa học</Label>
                                            <TableWrapper
                                                rowKey="key"
                                                columns={cited_column}
                                                // rowSelection={rowSelection}
                                                // loading={this.props.isLoadingUniversities}
                                                dataSource={dataSource}
                                                bordered={true}
                                                className="isoSimpleTable"
                                                pagination={{
                                                    defaultPageSize: 10,
                                                    hideOnSinglePage: true,
                                                    total: dataSource.length,
                                                    showTotal: (total, range) => {
                                                        return `Hiển thị ${range[0]}-${range[1]} trên ${dataSource.length
                                                            } trích dẫn`;
                                                    },
                                                }}
                                            />


                                            <CiteModal actionName={this.state.actionName} />
                                            <ButtonHolders style={{ width: '100%', paddingTop: '10px' }}>
                                                <ActionBtn

                                                    type="primary"
                                                    onClick={this.handleCiteModal.bind(this, null, 'add')}
                                                >
                                                    Thêm trích dẫn
                                            </ActionBtn>
                                            </ButtonHolders>
                                        </Fieldset>
                                    </Col>
                                </Row>

                                <Row gutter={16}>
                                    <Col className="gutter-row" span={24}>
                                        <Fieldset>
                                            <Label>Tài liệu tham khảo</Label>
                                            <TableWrapper
                                                rowKey="key"
                                                columns={cited_column}
                                                // rowSelection={rowSelection}
                                                // loading={this.props.isLoadingUniversities}
                                                dataSource={dataSource}
                                                bordered={true}
                                                className="isoSimpleTable"
                                                pagination={{
                                                    defaultPageSize: 10,
                                                    hideOnSinglePage: true,
                                                    total: dataSource.length,
                                                    showTotal: (total, range) => {
                                                        return `Hiển thị ${range[0]}-${range[1]} trên ${dataSource.length
                                                            } trích dẫn`;
                                                    },
                                                }}
                                            />

                                            <AttachmentModal actionName={this.state.actionName} />
                                            <ButtonHolders style={{ width: '100%', paddingTop: '10px' }}>
                                                <ActionBtn

                                                    type="primary"
                                                    onClick={this.handleAttachmentModal.bind(this, null, 'add')}
                                                >
                                                    Thêm tài liệu tham khảo
                                            </ActionBtn>
                                            </ButtonHolders>
                                        </Fieldset>
                                    </Col>
                                </Row>
                            </Col>

                        </Row>



                    </ContentHolder>
                </Box>
            </LayoutContentWrapper>
        )
    }
}

export default connect(
    state => ({
        ...state.ScientificJournal,
        ...state.Language,
        ...state.ResearchGroup,
        ...state.DocumentType,
        ...state.Classification,
        ...state.Cite,
        ...state.Attachment,
        ...state.Source,
        ...state.Author,
        ...state.Major,

    }),
    ({
        ...DocumentActions,
        ...LanguageActions,
        ...ResearchGroupActions,
        ...DocumentTypeActions,
        ...ClassificationActions,
        ...CiteActions,
        ...AttachmentActions,
        ...SourceActions,
        ...AuthorActions,
        ...majorActions,
    })
)(EditDocument)