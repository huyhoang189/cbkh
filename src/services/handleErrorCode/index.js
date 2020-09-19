import { notification } from 'antd'
export function HandleErrorCode(code) {
    switch (code) {
        case 303:
            return notification.error({
                message: 'Phiên làm việc đã hết hạn. Vui lòng đăng nhập lại',
            })
        case 304:
            return notification.error({
                message: 'Lỗi không tồn tại',
            })
        case 305:
            return notification.error({
                message: 'Lỗi đã tồn tại',
            })
        case 306:
            return notification.error({
                message: 'Lỗi đã đổi mật khẩu',
            })
        case 308:
            return notification.error({
                message: 'Bạn không có quyền thực hiện hành động này',
            })
        case 313:
            return notification.error({
                message: 'Nhiệm vụ đã kết thúc.',
            })

        default:
            return ''
    }
}
