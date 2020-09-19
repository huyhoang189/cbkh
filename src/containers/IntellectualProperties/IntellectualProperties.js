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
} from './IntellectualProperties.style';


class IntellectualProperties extends Component {
    render() {
        return (
            <LayoutContentWrapper style={{ padding: '30px 10px 0 10px' }}>
                <PageHeader>
                    <ComponentTitle>Sở hữu trí tuệ</ComponentTitle>
                </PageHeader>
                <Box>
                    <ContentHolder style={{ marginTop: 0, overflow: 'hidden' }}>
                        <TitleWrapper>

                        </TitleWrapper>


                    </ContentHolder>
                </Box>
            </LayoutContentWrapper>
        )
    }
}
export default IntellectualProperties;