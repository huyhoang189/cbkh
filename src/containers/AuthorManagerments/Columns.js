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
        title: "Mã tác giả",
        dataIndex: "id",
        key: "id",
        sorter: (a, b) => {
            if (a.id < b.id) return -1;
            if (a.id > b.id) return 1;
            return 0;
        },
    },
    {
        title: "Tên tác giả",
        dataIndex: "fullname",
        key: "fullname",
        sorter: (a, b) => {
            if (a.fullname < b.fullname) return -1;
            if (a.fullname > b.fullname) return 1;
            return 0;
        },
    },
   
    {
        title: "Học hàm",
        dataIndex: "academicRankId",
        key: "academicRankId",
        sorter: (a, b) => {
            if (a.academicRankId < b.academicRankId) return -1;
            if (a.academicRankId > b.academicRankId) return 1;
            return 0;
        },
    },
    {
        title: "Học vị",
        dataIndex: "degreeId",
        key: "degreeId",
        sorter: (a, b) => {
            if (a.degreeId < b.degreeId) return -1;
            if (a.degreeId > b.degreeId) return 1;
            return 0;
        },
    },
    {
        title: "Hướng nghiên cứu chuyên sâu",
        dataIndex: "depthResearch",
        key: "depthResearch",
        sorter: (a, b) => {
            if (a.depthResearch < b.depthResearch) return -1;
            if (a.depthResearch > b.depthResearch) return 1;
            return 0;
        },
    },
]