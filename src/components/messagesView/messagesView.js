import React from "react";
import "./messagesView.css";
import NavBar from "../navBar/navBar";
import NavAndSidebar from "../navAndSidebar/navAndSidebar";
import Messages from "../messages/messages";

function MessagesView() {
  return (
    <div className="component-messages-view">
      <NavBar />
      <div className="row">
        <div className="col-lg-2">
          <NavAndSidebar />
        </div>
        <div className="col-lg-10">
          <Messages />
        </div>
      </div>
    </div>
  );
}
export default MessagesView;
