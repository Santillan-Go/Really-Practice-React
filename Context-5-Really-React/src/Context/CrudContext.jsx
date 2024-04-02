import { createContext,useEffect,useState } from "react";
import { helpHttp } from "../helper/helpHttp";

const CrudContext = createContext();

const CrudProvider = ({ children }) => {
//LOGICA Y VARIABLES


    const [db, setDb] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [dataToEdit, setDataToEdit] = useState(null);
  
    let api = helpHttp();
    let url = "http://localhost:5000/Marvel";
  
    useEffect(() => {
      setLoading(true);
  
      api.get(url).then((res) => {
        console.log(res);
        if (!res.err) {
          setDb(res);
          setError(null);
        } else {
          setDb(null);
  
          setError(res);
        }
  
        setLoading(false);
      });
    }, [url]);
    const createData = (data) => {
      data.id = Date.now();
      // console.log(data)
  
      api.post(url, {
          body: data,
          headers: { "content-type": "application/json" },
        })
        .then((res) => {
          if (!res.err) {
            setDb([...db, res]);
          } else {
            setError(res);
          }
        });
    };
    const updataData = (data) => {
      let endPoint = `${url}/${data.id}`;
   //   console.log(endPoint);
  
      api.put(endPoint, {
          body: data,
          headers: { "content-type": "application/json" },
        })
        .then((res) => {
          if (!res.err) {
            let newData = db.map((el) => (el.id === data.id ? data : el));
            setDb(newData);
          //  console.log(res);
            //   setDb([
            // ...db,
            // res
            //   ])
          } else {
            setError(res);
          }
        });
  
      let newData = db.map((el) => (el.id === data.id ? data : el));
      setDb(newData);
    };
    const deleteData = (id) => {
      let isDelete = confirm("¿Estás seguro de que quieres eliminarlo?");
      if (isDelete) {
        let endPoint = `${url}/${id}`,
          option = {
            headers: { "content-type": "application/json" },
          };
        api.del(endPoint, option)
  
          .then((res) => {
            if (!res.err) {
              let newData = db.filter((el) => el.id !== id);
  
              //    db.forEach(el=>{
              //   if(el.id!=id){
              //     newData.push(el)
              //   }
              // });
  
              setDb(newData);
            } else {
              setError(res);
            }
          });
      }
    };

const data={loading,db,error,dataToEdit,setDataToEdit,createData,updataData,deleteData};


  return( <CrudContext.Provider  value={data}>{children}</CrudContext.Provider>);
};

export { CrudProvider };

export default CrudContext;




