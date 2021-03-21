import React, { Component } from 'react';
import { Modal, Button, Form } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Rapot extends Component {

  state = {
    rapot: JSON.parse(localStorage.getItem("rapot")) || [],
    buka: false,
    index: null

  }


  pintu = (buka) => {
    this.setState({ buka, index: null })
  }

  tambahin = (event) => {
    event.preventDefault()
    const { rapot, index } = this.state
    const { nama, nilai, } = event.target
    const newData = {
      nama: nama.value,
      nilai: nilai.value,
      // keterangan:keterangan.value
    }
    if (index === null) {
      rapot.push(newData);
    }
    else {
      rapot[index] = newData
    }
    if (nilai > 6) {
      document.write("<h2>Selamat Kamu Lulus</h2>")
    }
    else {
      document.write("<h2>Kamu belum Lulus! Silahkan remidi</h2>")
    }






    console.log(newData);
    this.setState({ rapot })
    this.pintu(false)


  }
  hapusin = (x) => {
    const { rapot } = this.state
    rapot.splice(x, 1);
    this.setState({ rapot })


  }

  editin = (i) => {
    this.setState({ buka: true, index: i })
  }



  componentDidUpdate() {
    console.log("didupdate");
    localStorage.setItem("rapot", JSON.stringify(this.state.rapot))
  }
  render() {
    console.log("render");
    return (
      <div >
        <h1>Rapot Kelas 12</h1>
        <button onClick={() => this.pintu(true)}>Masukin</button>
        <Modal animation={false} show={this.state.buka} onHide={() => this.pintu(false)} >
          <Modal.Header closeButton={() => this.pintu(false)}>
            <Modal.Title>Masukin Nilainya Pak/Bu Guru</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={(event) => this.tambahin(event)}>
              <Form.Label>Nama</Form.Label>
              <Form.Control name="nama" defaultValue={this.state.index !== null ? this.state.rapot[this.state.index].nama : null} type="text" placeholder="Nama Muridmu" />
              <Form.Text className="text-muted">
                nama tidak boleh salah sedikitpun.
              </Form.Text>
              <Form.Label>Nilai</Form.Label>

              <Form.Control name="nilai" defaultValue={this.state.index !== null ? this.state.rapot[this.state.index].nilai : null} type="number" placeholder="Masukin Nilai" />
              {/* <Form.Label>Keterangan</Form.Label> */}

              {/* <Form.Control name="keterangan" defaultValue={this.state.index !== null ? this.state.rapot[this.state.index].ket : null} type="text" placeholder="Masukin Nilai" /> */}

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
        {this.state.rapot.map((item, i) => (
          <div key={i}>
            <p>Nama: {item.nama}</p>
            {/* <p>Kelas: {item.kelas}</p> */}
            <p>Nilai: {item.nilai}</p>
            <p>{this.tambahin}</p>





            <button onClick={() => this.hapusin(i)}>Hapus</button>
            <button onClick={() => this.editin(i)}>Edit</button>
            {/* <button onClick={() => this.tambahin(i)}>Cek</button> */}



          </div>



        ))}

      </div>
    )
  }
}

