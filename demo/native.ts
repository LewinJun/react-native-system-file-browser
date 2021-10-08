import { NativeModules, Linking, ActionSheetIOS, Alert, Platform } from 'react-native'

interface IResult {
    code: 404 | 200 | 500; // 404 没有找到相关地图app 200 成功  500调用出错，库有没有导进来
}


// 自定义UI可以用这个，选择了一个app调用openMapRouter
const _openFileBrower = (params: { types?: Array<string> }) => {

    const fileBrower = NativeModules.RNSystemFileBrower
    return new Promise<IResult>((resolve, reject) => {
        if (fileBrower) {
            fileBrower.openFileBrower(params).then(res => {
                resolve(res)
            }).catch(e => {
                reject(e)
            })
        } else {
            reject({ code: 404 })
        }
    })
}

export default {
    openFileBrower: _openFileBrower,
}