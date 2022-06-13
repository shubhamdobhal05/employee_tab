import { STORE_DATA } from "../action.type";

const storeData = (payload) => ({
    type: STORE_DATA,
    payload
})


export { storeData };