import React from 'react';
import { Card,  CardBody } from 'reactstrap';
import { MDBDataTable, MDBBtn } from 'mdbreact';
import 'bootstrap';

const DelegateList = () => {
  const data = {
    columns: [
      {
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 500
      },
      {
        label: 'Question',
        field: 'question',
        sort: 'asc'
      },
      {
        label: 'Publish Date',
        field: 'pdate',
        sort: 'asc',
        width: 200
      }
    ],
    rows: [
      {
        name: 'Mr. Mintu Nath',
        question: 'Bridging Barriers to Therapeutic inertia: Focus on Indian Patient Centric Insulin Therapy rtia: Focus on Indian Patient Centric Insulin Therapy” Bridging Barriers to Therapeutic inertia: Focus on Indian Patient Centric Insulin Therapy”',
        pdate: '16/06/2020 03.00 PM'
      },
      {
        name: 'Mr. Shaik Basheeruddin',
        question: 'Therapy” Bridging Barriers to Therapeutic inertia: Focus on Indian Patient Centric Insulin Therapy”',
        pdate: '16/06/2020 03.00 PM'
      },
      {
        name: 'Mr. Shaik Basheeruddin',
        question: 'Barriers to Therapeutic inertia: Focus on Indian Patient Centric Insulin Therapy”',
        pdate: '16/06/2020 03.00 PM'
      },
      {
        name: 'Mr. Shaik Basheeruddin',
        question: ' testing”',
        pdate: '16/06/2020 03.00 PM'
      }
    ]
  };

  return (
    <Card>
    <CardBody>
    <MDBDataTable
      striped
      bordered
      small
      data={data}
    />
    </CardBody>
    </Card>
  );
}

export default DelegateList;
