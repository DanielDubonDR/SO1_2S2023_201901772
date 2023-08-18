import Form from "../components/Form";
import Registro from "../components/Registro";
import { useState, useEffect } from "react";
import { getBiblioteca, addMusic } from "../services/api";
import "../css/Fonts.css";

function Body() {

  const [data, setData] = useState([]);

  useEffect(() => {
    getBiblioteca().then((response) => setData(response));
  }, []);

  const handlerAddMusic = async (music) => {
    const add = await addMusic(music);
    setData([...data, add]);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row my-auto">
          <div className="col">
            <br/><br/>
            <div className="card mt-5 mx-5  shadow">
              <div className="card-body">
                <Form addMusic={handlerAddMusic} />
              </div>
            </div>
          </div>
          <div className="col">
            <br/><br/><br/>
            <Registro data={data} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
