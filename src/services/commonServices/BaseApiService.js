

import Axios from 'axios'
import { getSessionKey } from './AuthLocalService'
import settings from '../../settings'

const _makeRequest = createRequest => async args => {
    const _headers = args.headers ? args.headers : {}
    const body = args.body ? args.body : {}
    const defaultHeaders = {}
    args = {
        ...args,
        headers: {
            ...defaultHeaders,
            ..._headers,
        },
        body,
    }
    //console.log(args)
    try {
        const { data } = await createRequest(args)
        return data
    } catch (e) {
        throw e
    }
}

const _makeAuthRequest = createRequest => async args => {
    const requestHeaders = args.headers ? args.headers : {}
    const accessToken = getSessionKey()

    let headers = {
        Authorization: 'Bearer '+ accessToken,
    }

    //console.log(accessToken)
    args = {
        ...args,
        headers: {
            ...headers,
            ...requestHeaders,
        },
    }
    try {
        return await _makeRequest(createRequest)(args)
    } catch (e) {
        const { response } = e

        if (!response || !response.data) {
            throw e
        }

        if (response.status >= 400 && response.status <= 403) {
        }
    }
}

export default (options = {}) => {

    let BaseURL = settings.apiUrl
    if (options.BaseURL) BaseURL = options.BaseURL

    const instance = Axios.create({
        baseURL: BaseURL,
        //timeout: 30000,
    })

    return {
        makeRequest: _makeRequest(instance),
        makeAuthRequest: _makeAuthRequest(instance)
    }
}
