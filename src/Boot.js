import React, { Component } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { Form, Button } from "react-bootstrap"


export default class Boot extends Component {
  state = {
    data: JSON.parse(localStorage.getItem("data")) || [],


    open: false
  }

  bukain = () => {
    this.setState({ open: true })
  }

  tutupin = () => {
    this.setState({ open: false })
  }

  tambahin = (event) => {
    event.preventDefault()
    const b = this.state.data;
    // const i = data.findIndex(this.b);

    b.push({
      nama: event.target.nama.value,
      umur: event.target.umur.value
    });
    this.setState({ data: b })

    this.setState({ open: false })

    localStorage.setItem("data", JSON.stringify(this.state.data)
    )
  }

  hapusin = (x) => {
    const data = this.state.data
    // if (data[i] <= 1) {
    // data.splice(i, 1);

    data.splice(x, 1);
    this.setState({ data })
    localStorage.setItem('data', JSON.stringify(this.state.data)
    )
  }

  // hapusin(e) {
  //   // const data = this.state.data;
  //   var array = [this.state.data]; // make a separate copy of the array
  //   var index = array.indexOf(e.target.value)
  //   if (index !== -1) {
  //     array.splice(index, 1);
  //     this.setState({ data: array });
  //   }
  //   localStorage.setItem('data', JSON.stringify(this.state.data)
  //   )

  // }

  // hapusin = () => {
  //   this.setState({ b: [] });
  //   localStorage.removeItem("data", JSON.stringify(this.state.data));
  // }



  render() {
    return (
      <div>
        <h1>Data Siswa Sekolah X</h1>

        <button onClick={this.bukain}>Tambah</button>
        {/* <button onClick={this.hapusin}>Hapus</button> */}

        <ul>
          <li><p>Nama = Joni</p></li>
          <p>Kelas = 12</p>


        </ul>
        <Modal open={this.state.open} onClose={this.tutupin}>
          <Form onSubmit={event => this.tambahin(event)} >
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Anak Baru</Form.Label><br />
              <p>Nama</p>
              <Form.Control name="nama" type="text" placeholder="Masukin namamu dek" /><br />
              <p>Kelas</p>
              <Form.Control name="umur" type="number" placeholder="Masukin kelasmu" />


            </Form.Group>

            <br />
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal>

        {this.state.data.map((item, i) => (
          <div key={i}>
            <ul>
              <li><p>Nama: {item.nama}</p></li>
              <p>Kelas: {item.umur}</p>

            </ul>
            <button onClick={e => this.hapusin(i)}>Hapus</button>

          </div>



        ))}


      </div >
    )
  }
}
