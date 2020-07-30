import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';


import {tambahPemain, kurangiPemain} from '../actions/pemain';

const ButtonTambah = styled.button`
    background-color: green;
    padding: 10px 20px;
    margin: 15px;
`
const ButtonKurang = styled(ButtonTambah)`
    background-color: red;
    color: white;
`

const Home = (props) => {
    const pemain = props.pemain;

    return (
        <div>
            <h2>Welcome to Football Team App</h2>
                <span>Jumlah Pemain :</span> <span> <strong>{pemain}</strong></span> <br/>
                <ButtonKurang onClick={props.kurangiPemain}> Kurang </ButtonKurang>
                <ButtonTambah onClick={props.tambahPemain}> Tambah </ButtonTambah>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
  return {
    tambahPemain : () => dispatch(tambahPemain),
    kurangiPemain : () => dispatch(kurangiPemain),
  }
}

const mapStateToProps = (state) => {
    return {
        pemain : state.pemain.pemainInti
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);