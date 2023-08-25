import './App.css'
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      //biar keliatan kalo error, pake try catch
      try {
        const data = await axios.get("https://strapi-rygs.onrender.com/api/prodis");
        const resData = data.data.data
        const prodiData = resData[0].attributes.prodi[0][0]
        setData(prodiData)
      } catch (error) {
        console.error("Error!!", error)
      }
    }
    fetchData()
  }, []);
  console.log(data);

  return (
    <>
    <div>
      <table border={0}>
        <tr>{data.nama_prodi}</tr>
        <tr>Kepala Prodi: {data.kepala_prodi}</tr>
        <tr>Sekretaris: {data.sektretaris}</tr>
      </table>
    </div>
    <br />

    {data.mahasiswa && data.mahasiswa.map((item, index)=>(
      <div key={index}>
        <span>Angkatan: {item.tahun_masuk}</span><br />
        <span>Kelas Pagi</span>
        <table border={1}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nama</th>
              <th>Jenis Kelamin</th>
              <th>Alamat</th>
              <th>Hobi</th>
            </tr>
          </thead>
          <tbody>
            {item.data.pagi.map((item, index)=>(
              <tr key={index}>
                <td>{index+1}</td>
                <td>{item.nama}</td>
                <td>{item.jenis_kelamin}</td>
                <td>{item.alamat}</td>
                <td>{item.hobi.join(", ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <br />

        <span>Kelas Malam</span>
        <table border={1}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nama</th>
              <th>Jenis Kelamin</th>
              <th>Alamat</th>
              <th>Hobi</th>
            </tr>
          </thead>
          <tbody>
            {item.data.malam.map((item, index)=>(
              <tr key={index}>
                <td>{index+1}</td>
                <td>{item.nama}</td>
                <td>{item.jenis_kelamin}</td>
                <td>{item.alamat}</td>
                <td>{item.hobi.join(", ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <br />

        <span>Kelas Cuti</span> <br />
        {item.data.cuti.length > 0?(
          <table border={1}>
            <thead>
            <tr>
              <th>ID</th>
              <th>Nama</th>
              <th>Jenis Kelamin</th>
              <th>Alamat</th>
              <th>Hobi</th>
            </tr>
          </thead>
          <tbody>
            {item.data.cuti.map((item, index)=>(
              <tr key={index}>
                <td>{index+1}</td>
                <td>{item.nama}</td>
                <td>{item.jenis_kelamin}</td>
                <td>{item.alamat}</td>
                <td>{item.hobi.join(", ")}</td>
              </tr>
            ))}
          </tbody>
          </table>
        ):(
          <span>Tidak ada Mahasiswa yang mengambil kelas ini.</span>
        )}
        <br />
      </div>
    ))}
    </>
  );
}
  

export default App