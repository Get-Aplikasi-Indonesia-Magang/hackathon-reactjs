import React, { Component } from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import { numberWithCommas } from '../utils/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { API_URL } from '../utils/constants';
import { useNavigate } from 'react-router-dom';

function TotalBayar(props) {
  const navigate = useNavigate();

  const submitTotalBayar = (totalBayar) => {
    const pesanan = {
      total_bayar: totalBayar,
      menus: props.keranjangs
    };

    axios.post(API_URL + 'pesanans', pesanan).then((res) => {
      navigate('/sukses');
    });
  };

  const totalBayar = props.keranjangs.reduce((result, item) => result + item.total_harga, 0);

  return (
    <div className='fixed-bottom'>
      <Row>
        <Col md={{ span: 3, offset: 9 }} className='px-4'>
          <h4>
            Total Harga : {' '}
            <strong className='float-right ms-4'>
              Rp. {numberWithCommas(totalBayar)}
            </strong>
          </h4>
          <div className='d-grid gap-4'>
            <Button
              variant='primary'
              size='lg'
              className='mt-4 mb-2 me-2'
              onClick={() => submitTotalBayar(totalBayar)}
            >
              <FontAwesomeIcon icon={faShoppingCart} className='me-2' />{' '}
              <strong>BAYAR</strong>
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default TotalBayar;
