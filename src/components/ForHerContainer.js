import React from "react";
import { withRoomConsumer } from "../context";
import Loading from "./Loading";
import GiftsList from "./GiftsList";

// This container gets data from context and provide it to GiftsList componant
function forHerContainer({ context }) {
  const { loading, herGifts } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <GiftsList gifts={herGifts} />
    </>
  );
}

export default withRoomConsumer(forHerContainer);
