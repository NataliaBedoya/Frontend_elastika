import Swal from "sweetalert2";

import {
  userSignIn,
  getUserList,
  destroyUser,
  userRegister,
  userUpdate,
} from "./services/userServices";

export const USER_SIGN_IN = "USER_SIGN_IN";
export const GET_USER_LIST = "GET_USER_LIST";
export const ASSIGN_USER_TO_DELETE = "ASSIGN_USER_TO_DELETE";
export const REMOVE_USER_DELETED = "REMOVE_USER_DELETED";
export const CREATE_NEW_USER = "CREATE_NEW_USER";
export const UPDATE_USER_PROFILE_INFO = "UPDATE_USER_PROFILE_INFO";

const initialState = {
  user: {},
  userList: {},
  userToDelete: {},
};

export function accessUser(email, password, history) {
  return async function (dispatch) {
    try {
      const { data } = await userSignIn(email, password);
      if (data.token) {
        localStorage.setItem("token", data.token);
        history.push("/MainView");
      }

      dispatch({
        type: USER_SIGN_IN,
        payload: data.user,
      });
    } catch (error) {
      console.log(error.message);
      Swal.fire({
        title: "Alert",
        icon: "error",
        text: `Invalid email or password`,
        button: "OK",
      });
    }
  };
}

export function getAllUser() {
  return async function (dispatch) {
    try {
      const { data } = await getUserList();
      dispatch({
        type: GET_USER_LIST,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function assignUserToDelete(id) {
  return async function (dispatch) {
    dispatch({
      type: ASSIGN_USER_TO_DELETE,
      payload: id,
    });
  };
}

export function deleteUser(userToDelete) {
  return async function (dispatch) {
    try {
      const { data } = await destroyUser(userToDelete);
      dispatch({
        type: REMOVE_USER_DELETED,
        payload: data,
      });
      Swal.fire({
        title: "Confirmation",
        icon: "success",
        text: `User has successfully deleted!`,
        button: "OK",
      });
    } catch (error) {
      console.log(error.message);
      Swal.fire({
        title: "Alert",
        icon: "error",
        text: `Something went wrong`,
        button: "OK",
      });
    }
  };
}

export function createNewUser(name, lastname, email, role, password) {
  return async function (dispatch) {
    try {
      const { data } = await userRegister(
        name,
        lastname,
        email,
        role,
        password
      );
      dispatch({
        type: CREATE_NEW_USER,
        payload: data,
      });
      Swal.fire({
        title: "Confirmation",
        icon: "success",
        text: `User ${name} ${lastname} has successfully registered!`,
        button: "OK",
      });
    } catch (error) {
      console.log(error.message);
      Swal.fire({
        title: "Alert",
        icon: "error",
        text: `Something went wrong`,
        button: "OK",
      });
    }
  };
}

export function updateUserProfileInfo(name, lastname, role, password) {
  return async function (dispatch) {
    try {
      const authorizationToken = localStorage.getItem("token");
      const { data } = await userUpdate(
        authorizationToken,
        name,
        lastname,
        role,
        password
      );
      dispatch({
        type: UPDATE_USER_PROFILE_INFO,
        payload: data,
      });
      Swal.fire({
        title: "Confirmation",
        icon: "success",
        text: `Your personal information has been updated successfully!`,
        button: "OK",
      });
    } catch (error) {
      Swal.fire({
        title: "Oops...",
        icon: "error",
        text: "Something went wrong",
        button: "OK",
      });
      console.log(error.message);
    }
  };
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case USER_SIGN_IN: {
      return {
        ...state,
        user: action.payload,
      };
    }

    case GET_USER_LIST: {
      return {
        ...state,
        userList: action.payload,
      };
    }
    case ASSIGN_USER_TO_DELETE: {
      return {
        ...state,
        userToDelete: action.payload,
      };
    }
    case REMOVE_USER_DELETED: {
      return {
        ...state,
        userList: state.userList.filter(
          (user) => user._id !== action.payload._id
        ),
      };
    }

    case CREATE_NEW_USER: {
      return {
        ...state,
        userList: state.userList.concat(action.payload),
      };
    }

    case UPDATE_USER_PROFILE_INFO: {
      return {
        ...state,
        user: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}

export default reducer;
