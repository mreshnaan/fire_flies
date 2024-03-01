import SendXRestApi from "send_x_rest_api";

export function identifyContact(email: string, apiKey: string, teamId: string): Promise<{ data: any, response: any }> {
  return new Promise((resolve, reject) => {
    const api = new SendXRestApi.ContactApi();

    // Construct the contact details object
    const contactDetails = new SendXRestApi.ContactRequest();
    contactDetails.email = email;
    contactDetails.firstName = "";
    contactDetails.lastName = "";
    contactDetails.customFields = { Designation: "Newsletter" };
    contactDetails.tags = ["Newsletter"];

    // Pass the contactDetails object directly to the API call
    api.contactIdentifyPost(
      apiKey,
      teamId,
      contactDetails,
      (error: any, data: any, response: any) => {
        if (error) {
          reject(error);
        } else {
          resolve({ data: data, response: response });
        }
      }
    );
  });
}

// Example usage:


// identifyContact("john.doe@gmail.com", apiKey, teamId)
//   .then(({ data , response }) => {
//     console.log("API called successfully. Returned data: " + data);
//     console.log("Response: ", response);
//   })
//   .catch((error) => {
//     console.error(error);
//   });
