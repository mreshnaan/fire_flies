import SendXRestApi from 'send_x_rest_api'



export async function identifyContact(email:string, apiKey:string, teamId:string):Promise<{response:any;data:any}>{

  return new Promise((res,rej) => {
    const api = new SendXRestApi.ContactApi()
  
  const contactDetails = new SendXRestApi.ContactRequest(); // {ContactRequest} Contact details
  
   contactDetails.email = email;
  //  contactDetails.firstName = "John";
  //  contactDetails.lastName = "Doe";
  //  contactDetails.birthday = "1989-03-03";
  //  contactDetails.customFields = {"Designation": "Software Engineer"};
  //  contactDetails.tags = ["Developer"];
  
   const callback = function(error:any, data:any, response:any) {
    if (error) {
      rej(error)
    } else {
      res({data,response});
    }
  };
  api.contactIdentifyPost(apiKey, teamId, contactDetails, callback);
  })
}