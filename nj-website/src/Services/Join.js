const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}api/members`;

/**
 * Submits a new membership application.
 * @param {object} applicationData - The application data.
 * @returns {Promise<object>} The response from the server.
 */
export const submitApplication = async (applicationData) => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(applicationData),
  });
  return response.json();
};

/**
 * Retrieves a paginated list of all membership applications.
 * @param {object} params - Query parameters for pagination and filtering.
 * @param {number} [params.page=1] - The page number.
 * @param {number} [params.limit=10] - The number of applications per page.
 * @param {string} [params.status] - Filter by status.
 * @returns {Promise<object>} The list of applications.
 */
export const getApplications = async (params = {}) => {
  const query = new URLSearchParams(params).toString();
  const response = await fetch(`${BASE_URL}?${query}`);
  return response.json();
};

/**
 * Retrieves a single membership application by its ID.
 * @param {string} id - The ID of the application.
 * @returns {Promise<object>} The application data.
 */
export const getApplicationById = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`);
  return response.json();
};

/**
 * Updates the status of a membership application.
 * @param {string} id - The ID of the application.
 * @param {string} status - The new status.
 * @returns {Promise<object>} The response from the server.
 */
export const updateApplicationStatus = async (id, status) => {
  const response = await fetch(`${BASE_URL}/${id}/status`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ status }),
  });
  return response.json();
};

/**
 * Deletes a membership application by its ID.
 * @param {string} id - The ID of the application.
 * @returns {Promise<object>} The response from the server.
 */
export const deleteApplication = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  return response.json();
};
