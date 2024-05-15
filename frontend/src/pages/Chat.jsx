import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Chat() {
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetchData();
  }, []);
  async function fetchData() {
    const data = await axios.get("/api/chats ");
    setChats(data.data);
    setLoading(false);

    console.log({ chats }, data.data);
  }
  if (loading) {
    return <p>loading.....</p>;
  }
  if (!chats.length) {
    return <p>no data found.....</p>;
  }

  return (
    <>
      {chats?.map((chat, i) => (
        <p key={i}>{chat.chatName}</p>
      ))}
    </>
  );
}
