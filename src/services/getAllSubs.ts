import axios from "axios";
import { Sub, SubsResponseFromApi } from "../types";

//Fetch
/* export const fetchSubs = (): Promise<SubsResponseFromApi> => {
  return fetch("route").then((res) => res.json());
}; */

//Axios
/* export const fetchSubs = (): Promise<SubsResponseFromApi> => {
  return axios.get("route").then((res) => res.data);
}; */
const fetchSubs = async (): Promise<SubsResponseFromApi> => {
  const res = await axios.get("route");
  return res.data;
};

const mapFromApiToSubs = (apiResponse: SubsResponseFromApi): Array<Sub> => {
  return apiResponse.map((subFromApi) => {
    const {
      nick,
      months: subMonths,
      profileUrl: avatar,
      description,
    } = subFromApi;

    return {
      nick,
      subMonths,
      avatar,
      description,
    };
  });
};

export const getAllSubs = () => {
  return fetchSubs().then(mapFromApiToSubs);
};
