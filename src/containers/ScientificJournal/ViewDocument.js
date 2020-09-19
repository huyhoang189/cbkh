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
import { Upload, message, Button, Row, Col, Divider, Tag } from 'antd';
import { Link } from 'react-router-dom';
import {
    ActionBtn,
    TitleWrapper,
    ComponentTitle,
    ButtonHolders,
    TableWrapper,
    Label,
    Fieldset
} from './ScientificJournal.style';
import { data, documentsP8 } from './fakeData'
import { AuthorColumns, AuthorLiteColumns } from './Columns'
import { select } from 'redux-saga/effects';

class ViewDocument extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //    listTags : [],
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

    onDocumentRenderTag = (keyword) => {
        // console.log(keyword)
        const listTags = [];
        keyword.forEach((index) => {
            listTags.push(<Tag key={index}>{index}</Tag>)
        });
        return listTags;
    }
    onDocumentRenderDetail = (key, value) => {
        
        // console.log(key, value)
        if (key === 'classificationId') {
            let { classifications } = this.props;
            let a = classifications.find(e => e.id == value)
            if (a) return <span>{a.name}</span>
            else return <span>Non data</span>
        } else if (key === 'documentType') {
            let { documentTypes } = this.props;
            let a = documentTypes.find(e => e.id == value)
            if (a) return <span>{a.name}</span>
            else return <span>Non data</span>
        } else if (key === 'majorId') {
            let { majors } = this.props;
            let a = majors.find(e => e.id == value)
            if (a) return <span>{a.name}</span>
            else return <span>Non data</span>
        } else if (key === 'specializationId') {
            // console.log(value)
            let { specializations } = this.props;
            let a = specializations.find(e => e.id == value)
            if (a) return <span>{a.name}</span>
            else return <span>Non data</span>
        } else if (key === 'groupId') {
            let { researchGroups } = this.props;
            let a = researchGroups.find(e => e.id == value)
            if (a) return <span>{a.name}</span>
            else return <span>Non data</span>
        } else if (key === 'authors') {
            // console.log(value)
            const listDetail = [];
            let { authors} = this.props;
            value.map(author => {
                let x = authors.find(e => e.id === author)
                if (x)
                    listDetail.push(<Tag key={x.id}>{x.fullname}</Tag>)
            })
            return listDetail;
        }
    }

    render() {
        const {
            redirectPath, selectedDocumentP8, languages
            , researchGroups, authors, majors, specializations,
        } = this.props;



        return (
            <LayoutContentWrapper style={{ padding: '30px 10px 0 10px' }}>
                <Box>
                    <ContentHolder style={{ marginTop: 0, overflow: 'hidden' }}>
                        <TitleWrapper>
                            <Row style={{ width: "100%" }}>
                                <ButtonHolders>
                                    <div style={{ float: 'left' }}>
                                        <ComponentTitle>Chi tiết</ComponentTitle>
                                    </div>
                                    <div style={{ float: 'right' }}>
                                        <ActionBtn style={{ width: '100px' }}
                                        >
                                            <Link to={redirectPath}>
                                                Huỷ
                                                </Link>
                                        </ActionBtn>
                                        <ActionBtn
                                            style={{ width: '100px' }}
                                            type="primary"
                                        >
                                            In
                                        </ActionBtn>
                                        <ActionBtn
                                            style={{ width: '100px' }}
                                            type="primary"
                                        >
                                            Xuất ra Excel
                                        </ActionBtn>
                                        <ActionBtn
                                            type="primary"
                                            style={{ width: '100px' }}
                                            onClick={() => this.props.editDocumentP8()}
                                        >
                                            Sửa
                                            </ActionBtn>
                                    </div>
                                </ButtonHolders>
                            </Row>
                        </TitleWrapper>
                        <Divider />
                        {/* <TableWrapper
                            showHeader={false}
                            rowKey="key"
                            columns={this.columns}
                            hiode
                            dataSource={data}
                            bordered={true}
                            className="isoSimpleTable"
                            pagination={{
                                defaultPageSize: 20,
                                hideOnSinglePage: true,
                                total: data.length,
                                showTotal: (total, range) => {
                                    return `Hiển thị ${range[0]}-${range[1]} trên ${
                                        data.length
                                        } tác giả`;
                                },
                            }}
                        /> */}

                        <div style={{ width: '80%' }}>
                            <Fieldset>
                                <h3>Định danh</h3>
                                <div>{selectedDocumentP8.sourceId
                                    + ', ' + selectedDocumentP8.doi
                                    + ', ' + selectedDocumentP8.publishDate
                                    + ', ' + selectedDocumentP8.publicationIndex
                                }</div>
                            </Fieldset>
                            <Fieldset>
                                <h3>Tiêu đề</h3>
                                <div>{selectedDocumentP8.title}</div>
                            </Fieldset>
                            <Fieldset>
                                <h3>Tác giả</h3>
                                <div>{selectedDocumentP8.authors.length > 0 ? this.onDocumentRenderDetail('authors', selectedDocumentP8.authors) : 'Non data'}</div>

                            </Fieldset>
                            <Fieldset>
                                <h3>Địa chỉ</h3>
                                <div>(danh sách đơn vị của tác giả)</div>
                            </Fieldset>
                            <Divider dashed />
                            <Fieldset>
                                <h3>Tóm tắt</h3>
                                <div>{selectedDocumentP8.abstractText}</div>
                            </Fieldset>
                            <Fieldset>
                                <h3>Toàn văn (@link)</h3>
                                <div>Non data</div>
                                {/* <div>{selectedDocumentP8.abstract_text}</div> */}
                            </Fieldset>
                            <Divider dashed />
                            <Fieldset>
                                <h3>Từ khoá</h3>
                                <div>{this.onDocumentRenderTag(selectedDocumentP8.keyword)}</div>
                            </Fieldset>
                            <Divider dashed />
                            <Fieldset>
                                <h3>Phân loại công bố khoa học</h3>
                                <div>{this.onDocumentRenderDetail('classificationId', selectedDocumentP8.classificationId)}</div>

                            </Fieldset>
                            <Fieldset>
                                <h3>Loại tài liệu</h3>
                                <div>{this.onDocumentRenderDetail('documentType', selectedDocumentP8.documentType)}</div>
                            </Fieldset>
                            <Fieldset>
                                <h3>Số tạp chí</h3>
                                <div>{selectedDocumentP8.mtaJournalId.length > 0 ? selectedDocumentP8.mtaJournalId.length : "Non data"}</div>
                            </Fieldset>
                            <Fieldset>
                                <h3>Số chuyên san</h3>
                                <div>Non data</div>
                            </Fieldset>
                            <Fieldset>
                                <h3>Số trích dẫn</h3>
                                <div>{selectedDocumentP8.citedNumber}</div>
                            </Fieldset>
                            <Divider dashed />
                            <Fieldset>
                                <h3>Ngành, chuyên ngành</h3>
                                <div> <span>{this.onDocumentRenderDetail('majorId', selectedDocumentP8.majorId)}</span>,
                                    <span>{this.onDocumentRenderDetail('specializationId', selectedDocumentP8.specializationId)}</span>
                                </div>
                            </Fieldset>
                            <Fieldset>
                                <h3>Nhóm nghiên cứu mạnh</h3>
                                <div>{this.onDocumentRenderDetail('groupId', selectedDocumentP8.groupId)}</div>
                            </Fieldset>
                            <Divider dashed />
                            <Fieldset>
                                <h3> Tài liệu tham khảo </h3>
                            </Fieldset>
                            <Fieldset>
                                <h3> Trích dẫn </h3>
                            </Fieldset>
                        </div>
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
)(ViewDocument)