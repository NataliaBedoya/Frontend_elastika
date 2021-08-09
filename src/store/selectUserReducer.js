import {
  getUserInfo,
  getUserList,
  userRegister,
  userSignIn,
  userUpdate,
  updateUserProfilePic,
  getUserWods,
  userSuscribe,
  userUnsuscribe,
} from "./user/services";
import Swal from "sweetalert2";
export const GET_USER = "GET_USER";
export const GET_USER_LIST = "GET_USER_LIST";
export const USER_SIGN_IN = "USER_SIGN_IN";
export const UPDATE_USER_PROFILE_PIC = "UPDATE_PROFILE_PIC";
export const UPDATE_USER_PROFILE_INFO = "UPDATE_PROFILE_INFO";
export const CREATE_NEW_USER = "CREATE_NEW_USER";
export const ASSIGN_USER_TO_FIND = "ASSIGN_USER_TO_FIND";
export const SHOW_USER_TO_COACH = "SHOW_USER_TO_COACH";
export const ASSIGN_WOD_TO_SUSCRIBE = "ASSIGN_WOD_TO_SUSCRIBE";
export const ASSIGN_WOD_TO_UNSUSCRIBE = "ASSIGN_WOD_TO_UNSUSCRIBE";
export const GET_USER_WODS = "GET_USER_WODS";
export const CLEAR_USER_TO_SUSCRIBE = "CLEAR_USER_TO_SUSCRIBE";
export const USER_SUSCRIBE = "USER_SUSCRIBE";
export const USER_UNSUSCRIBE = "USER_UNSUSCRIBE";
export const ASSIGN_PLAN_TO_PAY = "ASSIGN_PLAN_TO_PAY";

const initialState = {
  user: {},
  userList: {},
  userToShow: {},
  userWods: {},
  wodToSuscribe: "",
  planToPay: "",
};

export function getUserWod() {
  return async function (dispatch) {
    try {
      let authorizationToken = localStorage.getItem("token");
      const { data } = await getUserWods(authorizationToken);
      dispatch({
        type: GET_USER_WODS,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function getUser() {
  return async function (dispatch) {
    try {
      let authorizationToken = localStorage.getItem("token");
      const { data } = await getUserInfo(authorizationToken);
      dispatch({
        type: GET_USER,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
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

export function accessUser(email, password, history) {
  return async function (dispatch) {
    try {
      const { data } = await userSignIn(email, password);
      if (data.token) {
        localStorage.setItem("token", data.token);
        history.push("/MainUser");
      }
      dispatch({
        type: USER_SIGN_IN,
        payload: data.user,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function updateUserProfileInfo(
  FirstName,
  LastName,
  DNIType,
  DNINumber,
  Address,
  Neighborhood,
  Phone,
  Height,
  Weight,
  Birthday
) {
  return async function (dispatch) {
    try {
      const authorizationToken = localStorage.getItem("token");
      const { data: dataUpdate } = await userUpdate(
        authorizationToken,
        FirstName,
        LastName,
        DNIType,
        DNINumber,
        Address,
        Neighborhood,
        Phone,
        Height,
        Weight,
        Birthday
      );
      dispatch({
        type: UPDATE_USER_PROFILE_INFO,
        payload: dataUpdate,
      });
      Swal.fire({
        title: "Confirmation",
        icon: "success",
        text: `Your personal information has been updated successfully! 💾`,
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

export function createNewUser(name, lastname, email, address, phone, password) {
  return async function (dispatch) {
    try {
      const { data } = await userRegister(
        name,
        lastname,
        email,
        address,
        phone,
        password
      );
      dispatch({
        type: CREATE_NEW_USER,
        payload: data,
      });
      Swal.fire({
        title: "Confirmation",
        icon: "success",
        text: `User ${name} ${lastname} has been successfully registered! Please check your email 📩`,
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

export function updateProfilePic(file) {
  return async function (dispatch) {
    try {
      const data = new FormData();

      if (file) {
        data.append("profilePicture", file, file.name);
      }
      const authorizationToken = localStorage.getItem("token");
      const { data: dataUpdate } = await updateUserProfilePic(
        authorizationToken,
        data
      );
      dispatch({
        type: UPDATE_USER_PROFILE_PIC,
        payload: dataUpdate,
      });
      Swal.fire({
        title: "Confirmation",
        icon: "success",
        text: `User profile picture has been updated successfully! 🙋‍♂️`,
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

export function assignUserToFind(userId) {
  return async function (dispatch) {
    dispatch({
      type: ASSIGN_USER_TO_FIND,
      payload: userId,
    });
  };
}

export function findUserToShow(userId) {
  return async function (dispatch) {
    dispatch({
      type: SHOW_USER_TO_COACH,
      payload: userId,
    });
  };
}

export function assignWodToSuscribe(id) {
  return async function (dispatch) {
    try {
      dispatch({
        type: ASSIGN_WOD_TO_SUSCRIBE,
        payload: id,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function assignWodToUnsuscribe(id) {
  return async function (dispatch) {
    try {
      dispatch({
        type: ASSIGN_WOD_TO_UNSUSCRIBE,
        payload: id,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function clearUserToSuscribe() {
  return async function (dispatch) {
    try {
      dispatch({
        type: CLEAR_USER_TO_SUSCRIBE,
        payload: "",
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function userWodSuscription(wodToSuscribe) {
  return async function (dispatch) {
    try {
      const authorizationToken = localStorage.getItem("token");
      const { data: dataUpdate } = await userSuscribe(
        authorizationToken,
        wodToSuscribe
      );
      if (dataUpdate === "full") {
        Swal.fire({
          title: "Sorry...",
          icon: "warning",
          text: "Wod is already full 👥",
          button: "OK",
        });
      } else if (dataUpdate === "already") {
        Swal.fire({
          title: "...",
          icon: "question",
          text: "Wod is already suscribed 🤦‍♂️",
          button: "OK",
        });
      } else {
        dispatch({
          type: USER_SUSCRIBE,
          payload: dataUpdate,
        });
        Swal.fire({
          title: "Confirmation",
          icon: "success",
          text: `Your reservation has been created successfully! 💾`,
          button: "OK",
        });
      }
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

export function userWodUnsuscription(wodToUnsuscribe) {
  return async function (dispatch) {
    try {
      const authorizationToken = localStorage.getItem("token");
      const { data: wodUnsuscribed } = await userUnsuscribe(
        authorizationToken,
        wodToUnsuscribe
      );
      dispatch({
        type: USER_UNSUSCRIBE,
        payload: wodUnsuscribed,
      });
      Swal.fire({
        title: "Confirmation",
        icon: "success",
        text: `Your reservation has been removed successfully! 🗑`,
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

export function assignPlanToPay(planToPay) {
  return async function (dispatch) {
    dispatch({
      type: ASSIGN_PLAN_TO_PAY,
      payload: planToPay,
    });
  };
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER: {
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
    case USER_SIGN_IN: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case CREATE_NEW_USER: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case UPDATE_USER_PROFILE_PIC: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case UPDATE_USER_PROFILE_INFO: {
      return {
        ...state,
        user: action.payload,
      };
    }

    case ASSIGN_USER_TO_FIND: {
      return {
        ...state,
        userToFind: action.payload,
      };
    }
    case SHOW_USER_TO_COACH: {
      return {
        ...state,
        userToShow: state.userList.filter(
          (user) => user._id === action.payload
        ),
      };
    }
    case ASSIGN_WOD_TO_SUSCRIBE: {
      return {
        ...state,
        wodToSuscribe: action.payload,
      };
    }
    case ASSIGN_WOD_TO_UNSUSCRIBE: {
      return {
        ...state,
        wodToUnsuscribe: action.payload,
      };
    }
    case GET_USER_WODS: {
      return {
        ...state,
        userWods: action.payload,
      };
    }
    case USER_SUSCRIBE: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case USER_UNSUSCRIBE: {
      return {
        ...state,
        user: state.user.wods.filter((wod) => wod._id !== action.payload._id),
      };
    }
    case ASSIGN_PLAN_TO_PAY: {
      return {
        ...state,
        planToPay: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}

export default reducer;
