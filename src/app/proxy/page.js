"use client";
import React, { useState } from "react";
import "@/app/index.css";
import Logs from "@/store/proxy/Logs";
const Page = () => {
  const [logs, setLogs] = useState(Logs);
  const [app, setApp] = useState("");
  const [version, setVersion] = useState("");
  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log({ version, app });
    Logs.history = [...logs.history, { version, app }];
    setLogs({ ...Logs });
  };
  console.log(logs.history);
  return (
    <div className="App">
      <header className="App-header text-black">
        <form className="form" onSubmit={onFormSubmit}>
          <select
            name="app"
            onChange={(e) => {
              setApp(e.target.value);
            }}
          >
            <option>--Choose App--</option>
            <option value="calendar">Calendar</option>
            <option value="mail">Mail</option>
            <option value="drive">Drive</option>
          </select>
          <input
            onChange={(e) => {
              setVersion(e.target.value);
            }}
            type="text"
            name="version"
          />
          <button type="submit">Release</button>
        </form>
        <div className="logs">
          {logs &&
            logs.history?.map((log, idx) => (
              <div key={idx} className="log">
                {log}
              </div>
            ))}
        </div>
      </header>
    </div>
  );
};

export default Page;
