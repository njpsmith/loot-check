import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBitcoin } from '../actions/bitcoin';

export class Loot extends Component {
  componentDidMount() {
    this.props.fetchBitcoin();
  }

  computeBitcoin() {
    const { balance, bitcoin } = this.props;

    if (Object.keys(bitcoin).length === 0) return ''; //If the object is blank. This is a 'guard clause'

    return balance / parseInt(bitcoin.bpi.USD.rate.replace(',', ''), 10);
  }

  render() {
    return <h3>Bitcoin balance: {this.computeBitcoin()}</h3>;
  }
}

const mapStateToProps = (state) => {
  return {
    bitcoin: state.bitcoin,
    balance: state.balance,
  };
};

const mapDispatchToProps = {
  fetchBitcoin: fetchBitcoin,
};

export default connect(mapStateToProps, mapDispatchToProps)(Loot);
