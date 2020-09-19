import React, { Component } from 'react'
import { connect } from "react-redux";
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
import actions from '../../redux/author/actions'
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
} from './AuthorManagerments.style';
// import { authors } from './fakeData'
import { AuthorColumns } from './Columns'
import AuthorModal from './AuthorModal'
class AuthorManagerments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            actionName: '',
            keyword: '',
        };
    }
    componentDidMount(){
        this.props.getAuthors();
    }

    handleAuthorModal = (author = null, actionName) => {
        this.setState({ actionName: actionName });
        // console.log(actionName,author)
        this.props.toggleAuthorModal(author);
    };
    render() {
        const { match, authors, author } = this.props;
        const dataSource = [...authors];
        const columns = [
            ...AuthorColumns,
            {
                title: 'Hoạt động',
                key: 'action',
                width: 150,
                render: (text, row) => {
                    return (
                        <ActionWrapper>
                            <a onClick={this.handleAuthorModal.bind(this, row, 'update')}>
                                <i className="ion-android-create" />
                            </a>
                            <Popconfirms
                                title="Bạn có muốn xoá ?"
                                okText="Có"
                                cancelText="Không"
                                placement="topRight"
                            >
                                <a className="deleteBtn">
                                    <i className="ion-android-delete" />
                                </a>
                            </Popconfirms>
                        </ActionWrapper>
                    );
                }
            }
        ]

       
        return (
            <LayoutContentWrapper style={{ padding: '30px 10px 0 10px' }}>
                <PageHeader>
                    <ComponentTitle>Quản lý tác giả</ComponentTitle>
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
                                            style={{ width: 300 }}
                                        >
                                        </Input>
                                    </ButtonHolders>
                                </Col>
                                <Col lg={8}>
                                    <ButtonHolders>
                                        {/* <div style={{ float: 'right' }}>
                                            <Link to={`${match.path}/add`}>
                                                <Button type="primary" >
                                                    Thêm mới tác giả
                                                </Button>
                                            </Link>
                                        </div> */}
                                        <ActionBtn
                                            type="primary"
                                            style={{ float: 'right' }}
                                            onClick={this.handleAuthorModal.bind(this, null, 'add-author')}
                                        >
                                            Thêm tác giả
                                        </ActionBtn>
                                    </ButtonHolders>
                                </Col>
                            </Row>

                        </TitleWrapper>
                        <AuthorModal actionName={this.state.actionName} />
                        <TableWrapper
                            rowKey="key"
                            columns={columns}
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
                                    return `Hiển thị ${range[0]}-${range[1]} trên ${
                                        dataSource.length
                                        } tác giả`;
                                },
                            }}
                        />

                    </ContentHolder>
                </Box>
            </LayoutContentWrapper>
        )
    }
}


export default connect(
    state => ({
        ...state.Author,
    }),
    ({
        ...actions,
    })
)(AuthorManagerments)