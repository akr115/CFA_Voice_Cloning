import { BodyInit, File, RequestInit } from "node-fetch";
import { PathLike } from "fs";
const fs = require("fs");
const FormData = require("form-data");
const fetch = require("node-fetch");

export const voiceClonerRequest = async (name: string, dir: PathLike) => {
  let buffer = fs.createReadStream(dir);
  const form = new FormData();
  console.log({ name });
  form.append("sample_file", buffer);
  form.append("voice_name", name);
  const options: RequestInit = {
    method: "POST",
    headers: {
      accept: "application/json",
      AUTHORIZATION: "Bearer Use Your Own API Key",
      "X-USER-ID": "Use Your Own User ID",
    },
  };
  options.body = form;
  fetch("https://play.ht/api/v2/cloned-voices/instant", options)
    .then((res) => res.json())
    .then((json) => console.log({ json }))
    .catch((err) => console.error("error:" + err));
  return options;
};

