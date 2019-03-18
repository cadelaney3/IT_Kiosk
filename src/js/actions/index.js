import { ADD_ARTICLE } from "../constants/action-types";
import { INPUT_ID } from "../constants/action-types";

export function addArticle(payload) {
    return { type: "ADD_ARTICLE", payload }
};
export function inputID(payload) {
    return { type: "INPUT_ID", payload}
};