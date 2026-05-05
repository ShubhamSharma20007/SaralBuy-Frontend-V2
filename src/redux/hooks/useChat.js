import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../slices/user.slice';
import { setUser } from '../slices/user.slice';
import {
  addMessage,
  markRoomRead,
  setActiveRoom,
  setMessages,
  updateLastMessage,
  upsertContact,
  setRecentChats,
  setUserOnline,
} from '../slices/chat.slice';

export const useDispatchChat = () => {
  const dispatch = useDispatch();
  return {
    updateChatState: payload => dispatch(upsertContact(payload)),
    updateMessages: payload => dispatch(setMessages(payload)),
    updateAddMessages: payload => dispatch(addMessage(payload)),
    updateLastMessage: payload => dispatch(updateLastMessage(payload)),
    updateSetActiveRoom: payload => dispatch(setActiveRoom(payload)),
    updateMarkRoomRead: payload => dispatch(markRoomRead(payload)),
    updateSetRecentChats: payload => dispatch(setRecentChats(payload)),
    updateUserStatus: payload => dispatch(setUserOnline(payload)),
  };
};

export const useChatState = () => {
  return {
    recentChats: useSelector(state => state.chat.recentChats),
    messages: useSelector(state => state.chat.messages),
    activeRoomId: useSelector(state => state.chat.activeRoomId),
    onlineUsers: useSelector(s => s.chat.onlineUsers),
  };
};
