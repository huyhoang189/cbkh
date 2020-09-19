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
import Popconfirms from '../../components/feedback/popconfirm';
import { Tag } from 'antd';
import Input from '../../components/uielements/input';
import { Tree, Row, Col } from "antd";
import { Link } from 'react-router-dom';
import Button from '../../components/uielements/button';
import PageHeader from '../../components/utility/pageHeader';
import {
    ActionBtn,
    TitleWrapper,
    ActionWrapper,
    ComponentTitle,
    TableWrapper,
    ButtonHolders,
    Form,
    Fieldset,
    Label
} from './ScientificJournal.style';

import { DocumentColumns } from './Columns'
class ScientificJournal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            actionName: '',
            keyword: '',
        };
    }
    getnewDocumentId = () => new Date().getTime();

    componentDidMount() {
        this.props.getDocumentsP8();
        this.props.addSTT();
    }
    render() {
        const { match, documentsP8 } = this.props;
        const dataSource = [
            ...documentsP8
        ]
        const columns = [
            ...DocumentColumns,
            {
                title: 'Hoạt động',
                key: 'action',
                width: 150,
                render: (text, row) => {
                    return (
                        <ActionWrapper>

                            <Link to={`${this.props.match.path}/${row.id}`}>
                                {/* <i className="ion-android-alert" /> */}

                                <ActionBtn>
                                    Chi tiết
                                </ActionBtn>
                            </Link>

                            <Popconfirms
                                title="Bạn có muốn xóa công bố khoa học này ?"
                                okText="Có"
                                cancelText="Không"
                                placement="topRight"
                                style={{ textAnchor: 'middle' }}
                            // onConfirm={this.onDeleteUniversityClicked.bind(this, row)}
                            >
                                <a className="deleteBtn" style={{ display: 'inline-block', width: '100%' }}>
                                    <i className="ion-android-delete" style={{ textAlign: 'center' }} />
                                </a>
                            </Popconfirms>
                        </ActionWrapper>
                    )
                }
            }
        ]

        // console.log(dataSource, columns)
        return (
            <LayoutContentWrapper style={{ padding: '30px 10px 0 10px' }}>
                <PageHeader>
                    <ComponentTitle>Công bố khoa học</ComponentTitle>
                </PageHeader>
                <Box>
                    <ContentHolder style={{ marginTop: 0, overflow: 'hidden' }}>
                        <TitleWrapper>
                            <Row style={{ width: "100%" }}>
                                <Col lg={16}>
                                    <ButtonHolders>
                                        <Label style={{ paddingRight: 5 }}>Từ khoá</Label>
                                        <Input
                                            type="text"
                                            placeholder="Tìm kiếm"
                                            // value={this.state.keyword}
                                            style={{ width: 300 }}
                                        // onChange={e => this.onSearchInputChange(e.target.value)}
                                        >
                                        </Input>
                                    </ButtonHolders>
                                </Col>
                                <Col lg={8}>
                                    <ButtonHolders>
                                        <div style={{ float: 'right' }}>

                                            <Link to={`${match.path}/${this.getnewDocumentId()}`}>
                                                <Button type="primary" >
                                                    Thêm mới CBKH
                                                </Button>
                                            </Link>
                                        </div>
                                    </ButtonHolders>
                                </Col>
                            </Row>
                        </TitleWrapper>
                        <TableWrapper
                            rowKey="key"
                            columns={columns}
                            dataSource={dataSource}
                            bordered={true}
                            className="isoSimpleTable"
                            pagination={{
                                defaultPageSize: 10,
                                hideOnSinglePage: true,
                                total: dataSource.length,
                                showTotal: (total, range) => {
                                    return `Hiển thị ${range[0]}-${range[1]} trên ${dataSource.length
                                        } CBKH`;
                                },
                            }}
                        />

                    </ContentHolder>
                </Box>
            </LayoutContentWrapper >
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
)(ScientificJournal)