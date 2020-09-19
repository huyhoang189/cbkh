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
import actions from '../../redux/major/actions'
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
} from './Majors.style';
class Majors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            actionName: '',
            keyword: '',
        };
    }
    componentDidMount() {
        this.props.getMajors();
        this.props.getSpecializations();
    }

    handleMajorModal = (major = null, actionName) => {
        this.setState({ actionName: actionName });
        // console.log(actionName,major)
        // this.props.toggleMajorModal(major);
    };
    render() {
        const { match, majors, specializations } = this.props;
        const dataSource = [
            ...majors,
        ]
        const dataSource2 = [
            ...specializations
        ]
        const columns = [
            {
                title: "STT",
                dataIndex: "STT",
                key: "STT",
                align: "center",
                width: 60,
                render: (text, row, index) => {
                    return index + 1;
                },
            },
            {
                title: "Mã",
                dataIndex: "id",
                key: "id",
                sorter: (a, b) => {
                    if (a.id < b.id) return -1;
                    if (a.id > b.id) return 1;
                    return 0;
                },
            },
            {
                title: "Tên",
                dataIndex: "name",
                key: "name",
                sorter: (a, b) => {
                    if (a.name < b.name) return -1;
                    if (a.name > b.name) return 1;
                    return 0;
                },
            },
        ]

        return (
            <LayoutContentWrapper style={{ padding: '30px 10px 0 10px' }}>
                <PageHeader>
                    <ComponentTitle>Quản lý ngành</ComponentTitle>
                </PageHeader>
                <Box>
                    <ContentHolder style={{ marginTop: 0, overflow: 'hidden' }}>
                        <Row gutter={16}>
                            <Col span={10}>
                                <TitleWrapper>
                                    <ComponentTitle>Danh sách ngành</ComponentTitle>
                                </TitleWrapper>
                                <Row>
                                    <ButtonHolders style={{ paddingBottom: '15px', textAlign: 'end' }}>
                                        <ActionBtn
                                            type="primary"
                                        >
                                            Thêm
                                        </ActionBtn>
                                        <ActionBtn
                                            type="primary"
                                        >
                                            Sửa
                                        </ActionBtn>
                                        <ActionBtn
                                            type="danger"
                                        >
                                            Xoá
                                        </ActionBtn>
                                    </ButtonHolders>
                                </Row>
                                <TableWrapper
                                    rowKey="key"
                                    columns={columns}
                                    rowSelection={{
                                        type: 'checkbox',
                                    }}
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
                                                } ngành`;
                                        },
                                    }}
                                />
                            </Col>
                            <Col span={10} offset={2}>
                                <TitleWrapper>
                                    <ComponentTitle>Danh sách chuyên ngành</ComponentTitle>
                                    <ButtonHolders>

                                    </ButtonHolders>
                                </TitleWrapper>
                                <Row>
                                    <ButtonHolders style={{ paddingBottom: '15px', textAlign: 'end' }}>
                                        <ActionBtn
                                            type="primary"
                                        >
                                            Thêm
                                        </ActionBtn>
                                        <ActionBtn
                                            type="primary"
                                        >
                                            Sửa
                                        </ActionBtn>
                                        <ActionBtn
                                            type="danger"
                                        >
                                            Xoá
                                        </ActionBtn>
                                    </ButtonHolders>
                                </Row>
                                <TableWrapper
                                    rowKey="key"
                                    columns={columns}
                                    // loading={this.props.isLoadingUniversities}
                                    rowSelection={{
                                        type: 'checkbox',
                                    }}
                                    dataSource={dataSource2}
                                    bordered={true}
                                    className="isoSimpleTable"
                                    pagination={{
                                        defaultPageSize: 10,
                                        hideOnSinglePage: true,
                                        total: dataSource2.length,
                                        showTotal: (total, range) => {
                                            return `Hiển thị ${range[0]}-${range[1]} trên ${dataSource2.length
                                                } chuyên ngành`;
                                        },
                                    }}
                                />
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
        ...state.Major,
    }),
    ({
        ...actions,
    })
)(Majors)