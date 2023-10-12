import Registro from "../components/Registro";
import { useState, useEffect } from "react";
import "../css/Fonts.css";
import io from "socket.io-client";

const socket = io("http://localhost:4000");

function Body() {

  const [data, setData] = useState([]);

  useEffect(() => {
    socket.on("redis", (data) => {
      setData(data);
    });
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row my-auto">
          <div className="col">
            <br/><br/>
            <Registro data={data} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
