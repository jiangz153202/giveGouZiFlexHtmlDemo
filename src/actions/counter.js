export const addTodo = () => {
    return {
        type: "ZENGJIA"
    }
}

export const drcTodo = () => {
    return {
        type: "JIANSHAO"
    }
}

export const rgbUpdate = (key,value) => {
    //console.log('开始调用');
    return {
        type:"RGB_UPDATE",
        key,
        value
    }
}