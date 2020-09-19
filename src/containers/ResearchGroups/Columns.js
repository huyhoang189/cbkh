export const RGColumns = [
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
        title: "Tên nhóm",
        dataIndex: "tennhom",
        key: "tennhom",
        sorter: (a, b) => {
            if (a.tennhom < b.tennhom) return -1;
            if (a.tennhom > b.tennhom) return 1;
            return 0;
        },
    },
    {
        title: "Tên trưởng nhóm",
        dataIndex: "tentruongnhom",
        key: "tentruongnhom",
        sorter: (a, b) => {
            if (a.tentruongnhom < b.tentruongnhom) return -1;
            if (a.tentruongnhom > b.tentruongnhom) return 1;
            return 0;
        },
    },
    {
        title: "Lĩnh vực nghiên cứu",
        dataIndex: "linhvucnghiencuu",
        key: "linhvucnghiencuu",
        sorter: (a, b) => {
            if (a.linhvucnghiencuu < b.linhvucnghiencuu) return -1;
            if (a.linhvucnghiencuu > b.linhvucnghiencuu) return 1;
            return 0;
        },
    },


]