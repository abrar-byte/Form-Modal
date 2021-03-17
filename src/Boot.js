import React, { Component } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { Form, Button } from "react-bootstrap"


export default class Boot extends Component {
  state = {
    data: JSON.parse(localStorage.getItem("data")) || [],
    index: null,
    open: false,
  }

  // bukain = () => {
  //   this.setState({ open: true, index: null })
  // }

  // tutupin = () => {
  //   this.setState({ open: false, index: null })
  // }

  // buka = (open) => {
  //   this.setState({ open, index: null })
  // }
  buka(open) {
    // let asd
    // if (open != undefined) {
    //   if (typeof open == 'boolean') {
    //     asd = open
    //   } else {
    //     asd = false
    //   }
    // } else {
    //   asd = !open
    // }
    // console.log('buka', asd, open != undefined ? typeof open == 'boolean' ? open : false : !open)
    this.setState({ open, index: null })
  }

  tambahin = (event) => {
    // event.preventDefault()
    const { data, index } = this.state
    const { nama, kelas } = event.target
    const newData = {
      nama: nama.value,
      kelas: kelas.value
    }
    if (index == null) {
      data.push(newData);
    } else {
      data[index] = newData
    }
    this.setState({ data })
    // localStorage.setItem("usamah", JSON.stringify(data))
    localStorage.setItem("data", JSON.stringify(data))
    // this.tutupin()
    this.buka(false)

  }

  hapusin = (x) => {
    const data = this.state.data
    data.splice(x, 1);
    this.setState({ data })
    localStorage.setItem('data', JSON.stringify(data)
    )
  }

  editin = (e) => {
    e.preventDefault()
    this.setState({ data: e.target.value })
  }

  onEdit = (i) => {
    this.setState({ open: true, index: i })
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
    const { index, data, open } = this.state
    console.log(0 === '0', 0 === '0')
    return (
      <div>
        <h1>Data Siswa Sekolah X</h1>

        <button onClick={() => this.buka(true)}>Tambah</button>
        {/* <button onClick={this.hapusin}>Hapus</button> */}

        <Modal open={open} onClose={() => this.buka(false)}>
          <Form onSubmit={event => this.tambahin(event)} >
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Anak Baru</Form.Label><br />
              <p>Nama</p>
              <Form.Control name="nama" type="text" defaultValue={index != null ? data[index].nama : null} placeholder="Masukin namamu dek" /><br />

              <p>Kelas</p>
              <Form.Control name="kelas" type="number" defaultValue={index != null ? data[index].kelas : ''} placeholder="Masukin kelasmu" />


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
              <p>Kelas: {item.kelas}</p>

            </ul>
            <button onClick={() => this.hapusin(i)}>Hapus</button>
            <button onClick={() => this.onEdit(i)}>Edit</button>

            {/* <Modal open={this.state.show} onClose={this.tutup2}>
              <Form onSubmit={e => this.editin(e)} >
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Anak Baru</Form.Label><br />
                  <p>Nama</p>
                  <Form.Control defaultValue={this.state.data[this.state.index].nama} name="nama" type="text" placeholder="Masukin namamu dek" /><br />
                  <p>Kelas</p>
                  <Form.Control name="umur" type="number" placeholder="Masukin kelasmu" />


                </Form.Group>

                <br />
                <Button variant="primary" type="submit">
                  Submit
            </Button>
              </Form>
            </Modal> */}

          </div>



        ))}


      </div >
    )
  }
}
