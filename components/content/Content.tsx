"use client";

import React from "react";

const Content = (props: { content: string }) => {
  return (
    <div
      className="job-details-content"
      dangerouslySetInnerHTML={{ __html: props.content }}
    />
  );
};

export default Content;
