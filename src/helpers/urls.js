const API_ROOT = "https://umeedbackend.herokuapp.com/api/v1";

export const APIUrls = {
  login: () => `${API_ROOT}/user/create-session`,
  signup: () => `${API_ROOT}/user/signup`,
};
