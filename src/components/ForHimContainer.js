import React from "react";
import { withRoomConsumer } from "../context";
import Loading from "./Loading";
import GiftsList from "./GiftsList";

function ForHimContainer({ context }) {
  const { loading, himGifts } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <GiftsList gifts={himGifts} />
    </>
  );
}

export default withRoomConsumer(ForHimContainer);
