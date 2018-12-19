import isNull from 'lodash/isNull';
import uniq from 'lodash/uniq';
import findIndex from 'lodash/findIndex';
import forEach from 'lodash/forEach';

const face = [{
    title: '流汗',
    name: 'face_01'
}, {
    title: '钱',
    name: 'face_02'
}, {
    title: '发怒',
    name: 'face_03'
}, {
    title: '浮云',
    name: 'face_04'
}, {
    title: '给力',
    name: 'face_05'
}, {
    title: '大哭',
    name: 'face_06'
}, {
    title: '憨笑',
    name: 'face_07'
}, {
    title: '色',
    name: 'face_08'
}, {
    title: '奋斗',
    name: 'face_09'
}, {
    title: '鼓掌',
    name: 'face_10'
}, {
    title: '鄙视',
    name: 'face_11'
}, {
    title: '可爱',
    name: 'face_12'
}, {
    title: '闭嘴',
    name: 'face_13'
}, {
    title: '疑问',
    name: 'face_14'
}, {
    title: '抓狂',
    name: 'face_15'
}, {
    title: '惊讶',
    name: 'face_16'
}, {
    title: '可怜',
    name: 'face_17'
}, {
    title: '弱',
    name: 'face_18'
}, {
    title: '强',
    name: 'face_19'
}, {
    title: '握手',
    name: 'face_20'
}, {
    title: '拳头',
    name: 'face_21'
}, {
    title: '酒',
    name: 'face_22'
}, {
    title: '玫瑰',
    name: 'face_23'
}, {
    title: '打酱油',
    name: 'face_24'
}];



const resolveFace = (str) => {
    const regex = /\[\/.*?\]/g;
    let result = str.match(regex);
    if (!isNull(result)) {
        // 去重
        result = uniq(result);
        forEach(result, item => {
            const index = findIndex(face, faceItem => `[/${faceItem.title}]` === item);
            if (index !== -1) {
                const replaceRegex = new RegExp("\\[\/" + face[index].title + "\]", "mg");
                str = str.replace(replaceRegex, `<span title=${face[index].title} class="face-item ${face[index].name}"></span>`);

            }
        });
    }
    return str;
};

export {
    face,
    resolveFace
};