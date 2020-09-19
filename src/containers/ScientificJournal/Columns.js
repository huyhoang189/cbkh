import React from "react";
import Popconfirms from '../../components/feedback/popconfirm';
import {
    ActionWrapper,
} from './ScientificJournal.style';

export const AuthorColumns = [
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
        title: "Tên tác giả",
        dataIndex: "NAME",
        key: "NAME",
        sorter: (a, b) => {
            if (a.NAME < b.NAME) return -1;
            if (a.NAME > b.NAME) return 1;
            return 0;
        },
    },
    {
        title: "Đơn vị cấp 1",
        dataIndex: "UNIT1",
        key: "UNIT1",
        sorter: (a, b) => {
            if (a.UNIT1 < b.UNIT1) return -1;
            if (a.UNIT1 > b.UNIT1) return 1;
            return 0;
        },
    },
    {
        title: "Đơn vị cấp 2",
        dataIndex: "UNIT2",
        key: "UNIT2",
        sorter: (a, b) => {
            if (a.UNIT2 < b.UNIT2) return -1;
            if (a.UNIT2 > b.UNIT2) return 1;
            return 0;
        },
    },
    {
        title: "Đơn vị cấp 3",
        dataIndex: "UNIT3",
        key: "UNIT3",
        sorter: (a, b) => {
            if (a.UNIT3 < b.UNIT3) return -1;
            if (a.UNIT3 > b.UNIT3) return 1;
            return 0;
        },
    },
    {
        title: 'Hoạt động',
        key: 'action',
        width: 150,
        render: (text, row) => {
            return (
                <ActionWrapper>
                    <Popconfirms
                        title="Bạn có tác giả ?"
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
        },
    },
];


export const AuthorLiteColumns = [
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
        title: "Mã tác giả",
        dataIndex: "matacgia",
        key: "matacgia",
        sorter: (a, b) => {
            if (a.matacgia < b.matacgia) return -1;
            if (a.matacgia > b.matacgia) return 1;
            return 0;
        },
    },
    {
        title: "Tên tác giả",
        dataIndex: "tentacgia",
        key: "tentacgia",
        sorter: (a, b) => {
            if (a.tentacgia < b.tentacgia) return -1;
            if (a.tentacgia > b.tentacgia) return 1;
            return 0;
        },
    },
    {
        title: "Học hàm",
        dataIndex: "hocham",
        key: "hocham",
        sorter: (a, b) => {
            if (a.hocham < b.hocham) return -1;
            if (a.hocham > b.hocham) return 1;
            return 0;
        },
    },
    {
        title: "Học vị",
        dataIndex: "hocvi",
        key: "hocvi",
        sorter: (a, b) => {
            if (a.hocvi < b.hocvi) return -1;
            if (a.hocvi > b.hocvi) return 1;
            return 0;
        },
    },
];



export const DocumentColumns = [
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
        title: "Mã CBKH",
        dataIndex: "id",
        key: "id",
        sorter: (a, b) => {
            if (a.id < b.id) return -1;
            if (a.id > b.id) return 1;
            return 0;
        },
    },
    {
        title: "Tiêu đề",
        dataIndex: "title",
        key: "title",
        sorter: (a, b) => {
            if (a.title < b.title) return -1;
            if (a.title > b.title) return 1;
            return 0;
        },
    },
    {
        title: "Nhà xuẩt bản",
        dataIndex: "publisher",
        key: "publisher",
        sorter: (a, b) => {
            if (a.publisher < b.publisher) return -1;
            if (a.publisher > b.publisher) return 1;
            return 0;
        },
    },
    // {
    //     title: "Ngôn ngữ",
    //     dataIndex: "languageId",
    //     key: "languageId",
    //     sorter: (a, b) => {
    //         if (a.languageId < b.languageId) return -1;
    //         if (a.languageId > b.languageId) return 1;
    //         return 0;
    //     },
    // },
    // {
    //     title: "Phân loại",
    //     dataIndex: "specializationId",
    //     key: "specializationId",
    //     sorter: (a, b) => {
    //         if (a.specializationId < b.specializationId) return -1;
    //         if (a.specializationId > b.specializationId) return 1;
    //         return 0;
    //     },
    // },
    {
        title: "Trích dẫn",
        dataIndex: "citedNumber",
        key: "citedNumber",
        sorter: (a, b) => {
            if (a.citedNumber < b.citedNumber) return -1;
            if (a.citedNumber > b.citedNumber) return 1;
            return 0;
        },
    },
    {
        title: "Ngày đăng",
        dataIndex: "publishDate",
        key: "publishDate",
        sorter: (a, b) => {
            if (a.publishDate < b.publishDate) return -1;
            if (a.publishDate > b.publishDate) return 1;
            return 0;
        },
    },
]



export const cited_column = [
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
        title: "Mã định danh (DOI)",
        dataIndex: "id",
        key: "id",
        sorter: (a, b) => {
            if (a.id < b.id) return -1;
            if (a.id > b.id) return 1;
            return 0;
        },
    },
    {
        title: "Tiêu đề",
        dataIndex: "title",
        key: "title",
        sorter: (a, b) => {
            if (a.title < b.title) return -1;
            if (a.title > b.title) return 1;
            return 0;
        },
    },
    {
        title: "Tác giả",
        dataIndex: "author",
        key: "author",
        sorter: (a, b) => {
            if (a.author < b.author) return -1;
            if (a.author > b.author) return 1;
            return 0;
        },
    },
    {
        title: "Nguồn đăng",
        dataIndex: "source",
        key: "source",
        sorter: (a, b) => {
            if (a.source < b.source) return -1;
            if (a.source > b.source) return 1;
            return 0;
        },
    },
    {
        title: "Năm",
        dataIndex: "year",
        key: "year",
        sorter: (a, b) => {
            if (a.year < b.year) return -1;
            if (a.year > b.year) return 1;
            return 0;
        },
    },
    {
        title: "Link",
        dataIndex: "link",
        key: "link",
        sorter: (a, b) => {
            if (a.link < b.link) return -1;
            if (a.link > b.link) return 1;
            return 0;
        },
    },
]