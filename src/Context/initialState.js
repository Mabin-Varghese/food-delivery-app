import { fetchUser } from "../utils/fetchLockalStorageData";

const userInfo = fetchUser();

export const initialState = {
    user: userInfo,
};
