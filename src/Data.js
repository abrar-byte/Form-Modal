import React, { Component } from 'react';
import { Modal, Button, Form } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
// import { ReactComponent } from '*.svg';

export default class Data extends Component {
  state = {
    rapot: JSON.parse(localStorage.getItem("rapot")) || [],
    buka: false

  }


  pintu = (buka) => {
    this.setState({ buka })
  }

  tambahin = async (event) => {
    event.preventDefault()
    const { rapot } = this.state
    const { nama, kelas, nilai } = event.target
    const newData = {
      nama: nama.value,
      kelas: kelas.value,
      nilai: nilai.value
    }



    await rapot.push(newData);
    console.log(newData);
    this.setState({ rapot })
    this.pintu(false)


  }



  componentDidUpdate() {
    console.log("didupdate");
    localStorage.setItem("rapot", JSON.stringify(this.state.rapot))
  }
  render() {
    console.log("render");
    return (
      <div>
        <h1>Data Rapot Anak-anak</h1>
        <button onClick={() => this.pintu(true)}>Masukin</button>
        <Modal show={this.state.buka} onHide={() => this.pintu(false)} >
          <Modal.Header closeButton={() => this.pintu(false)}>
            <Modal.Title>Masukin Nilainya Pak/Bu Guru</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={event => this.tambahin(event)}>
              <Form.Label>Nama</Form.Label>
              <Form.Control name="nama" type="text" placeholder="Nama Muridmu" />
              <Form.Text className="text-muted">
                nama tidak boleh salah sedikitpun.
              </Form.Text>
              <Form.Label>Kelas</Form.Label>
              <Form.Control name="kelas" type="number" placeholder="Kelasnya" />
              <Form.Label>Nilai</Form.Label>

              <Form.Control name="nilai" type="number" placeholder="Masukin Nilai" />


              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>






        </Modal>
        {this.state.rapot.map((item, i) => (
          <div key={i}>
            <ul>
              <li><p>Nama: {item.nama}</p></li>
              <p>Kelas: {item.kelas}</p>
              <p>Nilai: {item.nilai}</p>


            </ul>
            {/* <button onClick={() => this.hapusin(i)}>Hapus</button> */}
            {/* <button onClick={() => this.onEdit(i)}>Edit</button> */}


          </div>



        ))}

      </div>
    )
  }
}

