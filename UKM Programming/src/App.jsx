import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function formatNpm(thnMsuknyo, kdProdi, unik) {
  const thnLulus = parseInt(thnMsuknyo) + 4;
  const kdUnik = String(unik).padStart(4, "0");
  return `${thnMsuknyo.slice(-2)}${thnLulus
    .toString()
    .slice(-2)}${kdProdi}${kdUnik}`;
}

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get(
          "https://strapi-rygs.onrender.com/api/prodis"
        );
        const resData = data.data.data;
        const prodiData = resData[0].attributes.prodi[0][0];
        setData(prodiData);
      } catch (error) {
        console.error("Kalo error muncul ini :", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div>
        <b>{data.nama_prodi}</b>
        <br />
        <span>Kepala Prodi: {data.kepala_prodi}</span>
        <br />
        <span>Sekretaris: {data.sektretaris}</span>
      </div>
      <br />

      {data.mahasiswa &&
        data.mahasiswa.map((items, index) => (
          <div key={index}>
            <b>Angkatan {items.tahun_masuk}</b>
            <br />
            <span>Kelas Pagi</span>
            <table border={1}>
              <thead>
                <tr>
                  <th>NPM</th>
                  <th>Nama</th>
                  <th>Jenis Kelamin</th>
                  <th>Alamat</th>
                  <th>Hobi</th>
                </tr>
              </thead>
              <tbody>
                {items.data.pagi.map((itemPagi, indexPagi) => (
                  <tr key={indexPagi}>
                    <td>
                      {formatNpm(
                        items.tahun_masuk,
                        data.kode_prodi,
                        indexPagi + 1
                      )}
                    </td>
                    <td>{itemPagi.nama}</td>
                    <td>{itemPagi.jenis_kelamin}</td>
                    <td>{itemPagi.alamat}</td>
                    <td>{itemPagi.hobi.join(", ")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <br />

            <span>Kelas Malam</span>
            <table border={1}>
              <thead>
                <tr>
                  <th>NPM</th>
                  <th>Nama</th>
                  <th>Jenis Kelamin</th>
                  <th>Alamat</th>
                  <th>Hobi</th>
                </tr>
              </thead>
              <tbody>
                {items.data.malam.map((itemMalem, indexMalem) => (
                  <tr key={indexMalem}>
                    <td>
                      {formatNpm(
                        items.tahun_masuk,
                        data.kode_prodi,
                        indexMalem + 1
                      )}
                    </td>
                    <td>{itemMalem.nama}</td>
                    <td>{itemMalem.jenis_kelamin}</td>
                    <td>{itemMalem.alamat}</td>
                    <td>{itemMalem.hobi.join(", ")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <br />

            <span>Kelas Cuti</span>
            <br />
            {items.data.cuti.length > 0 ? (
              <table border={1}>
                <thead>
                  <tr>
                    <th>NPM</th>
                    <th>Nama</th>
                    <th>Jenis Kelamin</th>
                    <th>Alamat</th>
                    <th>Hobi</th>
                  </tr>
                </thead>
                <tbody>
                  {items.data.cuti.map((itemCuti, indexCuti) => (
                    <tr key={indexCuti}>
                      <td>
                        {formatNpm(
                          items.tahun_masuk,
                          data.kode_prodi,
                          indexCuti + 1
                        )}
                      </td>
                      <td>{itemCuti.nama}</td>
                      <td>{itemCuti.jenis_kelamin}</td>
                      <td>{itemCuti.alamat}</td>
                      <td>{itemCuti.hobi.join(", ")}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <span>Tidak Ada Mahasiswa Yang Mengambil Kelas Ini</span>
            )}
            <br />
          </div>
        ))}
    </div>
  );
}

export default App;