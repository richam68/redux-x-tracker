import React from "react";
import Form from "./form";

const LandingPage = () => {
  return (
    <>
     
      <div style={{ padding: "20px" }}>
        <h1><i>Welcome to your own Expense Tracker </i></h1>

        {/* <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%' }}>
        <iframe
          title="Chatbot"
          style={{ position: 'absolute', top: 0, left: 0, width: '30%', height: '50%' }}
          width="350"
          height="430"
          allow="microphone;"
          src="https://console.dialogflow.com/api-client/demo/embedded/3b8a469c-90fd-48ac-8d07-fc12355557a8"
        ></iframe>
      </div> */}
      <br/>
      <Form />
      </div>
    </>
  );
};

export default LandingPage;
