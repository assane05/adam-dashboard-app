import React from "react";
import "./messagesView.css";
import Messages from "../messages/messages";
import NavbarNav from "../navbarNav/navbarNav";
import Sidebar from "../sidebar/sidebar";

function MessagesView() {
  return (
    <div className="component-messages-view body-theme">
      <NavbarNav />
      <div className="row fixing-after-header">
        <div className="col-lg-2">
          <Sidebar />
        </div>
        <div className="col-lg-10 pt-5">
          <Messages />
        </div>
      </div>
    </div>
  );
}
export default MessagesView;
