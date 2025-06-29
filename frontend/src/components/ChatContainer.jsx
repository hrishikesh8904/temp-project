import React, { useEffect } from "react";
import { useChatStore } from "../store/useChatStore";
import ChatContainerSkeleton from "./skeletons/ChatContainerSkeleton.jsx";
const ChatContainer = () => {
  const { messages, getMessages, isMessagesLoading, selectedUser } =
    useChatStore();

  useEffect(() => {
    getMessages(selectedUser._id);
  }, [selectedUser._id, getMessages]);
  if (true) return <ChatContainerSkeleton />;
  return <div></div>;
};

export default ChatContainer;
