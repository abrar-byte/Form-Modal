import { Component } from "react";
// import { Comp2 } from "../App";

export default class Coba extends Component {
  state = {
    biodata: {},
    showHasil: false,
    showAnak: true,
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ showHasil: true });
    }, 1000);
  }
  submit = (event) => {
    event.preventDefault();
    const { nama, umur, alamat, bapak } = event.target;
    this.setState({
      biodata: {
        nama: nama.value,
        umur: umur.value,
        alamat: alamat.value,
        bapak: bapak.value,
      },
    });

    let biodata = [this.state.biodata];
    biodata.push({

    });






    this.props.ganti(bapak.value);

  }
  render() {
    // console.log("render", this.state.biodata);
    return (
      <form onSubmit={this.submit}>
        {this.state.showAnak && (
          <div>
            <h1>ANAK!!</h1>
            <input type="text" name="nama" placeholder="nama" /> <br />
            <input type="text" name="umur" placeholder="umur" /> <br />
            <input type="text" name="alamat" placeholder="alamat" /> <br />
            <input type="text" name="bapak" placeholder="bapak" /> <br />
            <button type="submit">Save</button>
            <br />
            Nama Anak: Joni bin {this.props.nama}
            {/* {this.state.showHasil && (
              <Comp2
                biodata={this.state.biodata}
                closeHasil={() => this.setState({ showHasil: false })}
                closeAnak={() => this.setState({ showAnak: false })}
              />
            )} */}
          </div>
        )}
      </form>
    );
  }
}