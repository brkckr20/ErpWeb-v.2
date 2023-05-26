export const gelenFieldIsimleriniObjectKeyiOlarakAyarla = (list : any[]) => {
    const newObJect = list.reduce((obj,key) => {
        obj[key];
    }, {})
    return newObJect;
} 