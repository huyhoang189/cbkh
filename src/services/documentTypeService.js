import createAPIServices from "./commonServices/BaseApiService";

const api = createAPIServices();

// GET
// /secured/ws/rest/v1/document-type

export const getDocumentTypes = () => {
  return api.makeAuthRequest({
    url: `/document-type`,
    method: "GET",
  });
};