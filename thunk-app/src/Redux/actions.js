import { ADD_POSTS, ADD_USERS } from "./constants";

export const addUsers = (payload) => ({type: ADD_USERS, payload});
export const addPosts = (payload) => ({type: ADD_POSTS, payload});