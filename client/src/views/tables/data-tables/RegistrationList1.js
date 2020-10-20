import React from 'react';
import { Card,  CardBody } from 'reactstrap';
import { MDBDataTable, MDBBtn } from 'mdbreact';
import 'bootstrap';

const RegistrationList1 = () => { 
  const data = {
    columns: [
    {
        label: 'Action',
        field: 'action',
        sort: 'asc',
        width: 150
    },
      {
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Position',
        field: 'position',
        sort: 'asc'
      },
      {
        label: 'Office',
        field: 'office',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Age',
        field: 'age',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Start date',
        field: 'date',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Salary',
        field: 'salary',
        sort: 'asc',
        width: 100
      }
    ],
    rows: [
      {
        action: <MDBBtn color="purple" size="sm">Button</MDBBtn>,
        name: 'Tiger Nixon',
        position: 'System Architect',
        office: 'Edinburgh',
        age: '61',
        date: '2011/04/25',
        salary: '$320'
      },
      {
        action: <MDBBtn color="purple" size="sm">Button</MDBBtn>,
        name: 'Garrett Winters',
        position: 'Accountant',
        office: 'Tokyo',
        age: '63',
        date: '2011/07/25',
        salary: '$170'
      },
      {
        action: <MDBBtn color="purple" size="sm">Button</MDBBtn>,
        name: 'Ashton Cox',
        position: 'Junior Technical Author',
        office: 'San Francisco',
        age: '66',
        date: '2009/01/12',
        salary: '$86'
      },
      {
        action: <MDBBtn color="purple" size="sm">Button</MDBBtn>,
        name: 'Cedric Kelly',
        position: 'Senior Javascript Developer Senior Javascript Developer Senior Javascript Developer',
        office: 'Edinburgh',
        age: '22',
        date: '2012/03/29',
        salary: '$433'
      },
      {
        action: <MDBBtn color="purple" size="sm">Button</MDBBtn>,
        name: 'Airi Satou',
        position: 'Accountant',
        office: 'Tokyo',
        age: '33',
        date: '2008/11/28',
        salary: '$162'
      },
      {
        action: <MDBBtn color="purple" size="sm">Button</MDBBtn>,
        name: 'Brielle Williamson',
        position: 'Integration Specialist',
        office: 'New York',
        age: '61',
        date: '2012/12/02',
        salary: '$372'
      },
      {
        action: <MDBBtn color="purple" size="sm">Button</MDBBtn>,
        name: 'Herrod Chandler',
        position: 'Sales Assistant',
        office: 'San Francisco',
        age: '59',
        date: '2012/08/06',
        salary: '$137'
      },
      {
        action: <MDBBtn color="purple" size="sm">Button</MDBBtn>,
        name: 'Rhona Davidson',
        position: 'Integration Specialist',
        office: 'Tokyo',
        age: '55',
        date: '2010/10/14',
        salary: '$327'
      },
      {
        action: <MDBBtn color="purple" size="sm">Button</MDBBtn>,
        name: 'Colleen Hurst',
        position: 'Javascript Developer',
        office: 'San Francisco',
        age: '39',
        date: '2009/09/15',
        salary: '$205'
      },
      {
        action: <MDBBtn color="purple" size="sm">Button</MDBBtn>,
        name: 'Sonya Frost',
        position: 'Software Engineer',
        office: 'Edinburgh',
        age: '23',
        date: '2008/12/13',
        salary: '$103'
      },
      {
        action: <MDBBtn color="purple" size="sm">Button</MDBBtn>,
        name: 'Jena Gaines',
        position: 'Office Manager',
        office: 'London',
        age: '30',
        date: '2008/12/19',
        salary: '$90'
      },
      {
        action: <MDBBtn color="purple" size="sm">Button</MDBBtn>,
        name: 'Quinn Flynn',
        position: 'Support Lead',
        office: 'Edinburgh',
        age: '22',
        date: '2013/03/03',
        salary: '$342'
      },
      {
        action: <MDBBtn color="purple" size="sm">Button</MDBBtn>,
        name: 'Charde Marshall',
        position: 'Regional Director',
        office: 'San Francisco',
        age: '36',
        date: '2008/10/16',
        salary: '$470'
      },
      {
        action: <MDBBtn color="purple" size="sm">Button</MDBBtn>,
        name: 'Haley Kennedy',
        position: 'Senior Marketing Designer',
        office: 'London',
        age: '43',
        date: '2012/12/18',
        salary: '$313'
      },
      {
        action: <MDBBtn color="purple" size="sm">Button</MDBBtn>,
        name: 'Tatyana Fitzpatrick',
        position: 'Regional Director',
        office: 'London',
        age: '19',
        date: '2010/03/17',
        salary: '$385'
      },
      {
        action: <MDBBtn color="purple" size="sm">Button</MDBBtn>,
        name: 'Michael Silva',
        position: 'Marketing Designer',
        office: 'London',
        age: '66',
        date: '2012/11/27',
        salary: '$198'
      },
      {
        action: <MDBBtn color="purple" size="sm">Button</MDBBtn>,
        name: 'Paul Byrd',
        position: 'Chief Financial Officer (CFO)',
        office: 'New York',
        age: '64',
        date: '2010/06/09',
        salary: '$725'
      },
      {
        action: <MDBBtn color="purple" size="sm">Button</MDBBtn>,
        name: 'Gloria Little',
        position: 'Systems Administrator',
        office: 'New York',
        age: '59',
        date: '2009/04/10',
        salary: '$237'
      },
      {
        action: <MDBBtn color="purple" size="sm">Button</MDBBtn>,
        name: 'Bradley Greer',
        position: 'Software Engineer',
        office: 'London',
        age: '41',
        date: '2012/10/13',
        salary: '$132'
      },
      {
        action: <MDBBtn color="purple" size="sm">Button</MDBBtn>,
        name: 'Dai Rios',
        position: 'Personnel Lead',
        office: 'Edinburgh',
        age: '35',
        date: '2012/09/26',
        salary: '$217'
      },
      {
        action: <MDBBtn color="purple" size="sm">Button</MDBBtn>,
        name: 'Jenette Caldwell',
        position: 'Development Lead',
        office: 'New York',
        age: '30',
        date: '2011/09/03',
        salary: '$345'
      },
      {
        action: <MDBBtn color="purple" size="sm">Button</MDBBtn>,
        name: 'Yuri Berry',
        position: 'Chief Marketing Officer (CMO)',
        office: 'New York',
        age: '40',
        date: '2009/06/25',
        salary: '$675'
      },
      {
        action: <MDBBtn color="purple" size="sm">Button</MDBBtn>,
        name: 'Caesar Vance',
        position: 'Pre-Sales Support',
        office: 'New York',
        age: '21',
        date: '2011/12/12',
        salary: '$106'
      },
      {
        action: <MDBBtn color="purple" size="sm">Button</MDBBtn>,
        name: 'Doris Wilder',
        position: 'Sales Assistant',
        office: 'Sidney',
        age: '23',
        date: '2010/09/20',
        salary: '$85'
      },
      {
        action: <MDBBtn color="purple" size="sm">Button</MDBBtn>,
        name: 'Angelica Ramos',
        position: 'Chief Executive Officer (CEO)',
        office: 'London',
        age: '47',
        date: '2009/10/09',
        salary: '$1'
      },
      {
        action: <MDBBtn color="purple" size="sm">Button</MDBBtn>,
        name: 'Gavin Joyce',
        position: 'Developer',
        office: 'Edinburgh',
        age: '42',
        date: '2010/12/22',
        salary: '$92'
      },
      {
        action: <MDBBtn color="purple" size="sm">Button</MDBBtn>,
        name: 'Jennifer Chang',
        position: 'Regional Director',
        office: 'Singapore',
        age: '28',
        date: '2010/11/14',
        salary: '$357'
      },
      {
        action: <MDBBtn color="purple" size="sm">Button</MDBBtn>,
        name: 'Brenden Wagner',
        position: 'Software Engineer',
        office: 'San Francisco',
        age: '28',
        date: '2011/06/07',
        salary: '$206'
      },
      {
        action: <MDBBtn color="purple" size="sm">Button</MDBBtn>,
        name: 'Fiona Green',
        position: 'Chief Operating Officer (COO)',
        office: 'San Francisco',
        age: '48',
        date: '2010/03/11',
        salary: '$850'
      },
      {
        action: <MDBBtn color="purple" size="sm">Button</MDBBtn>,
        name: 'Shou Itou',
        position: 'Regional Marketing',
        office: 'Tokyo',
        age: '20',
        date: '2011/08/14',
        salary: '$163'
      },
      {
        action: <MDBBtn color="purple" size="sm">Button</MDBBtn>,
        name: 'Michelle House',
        position: 'Integration Specialist',
        office: 'Sidney',
        age: '37',
        date: '2011/06/02',
        salary: '$95'
      },
      {
        action: <MDBBtn color="purple" size="sm">Button</MDBBtn>,
        name: 'Suki Burks',
        position: 'Developer',
        office: 'London',
        age: '53',
        date: '2009/10/22',
        salary: '$114'
      },
      {
        action: <MDBBtn color="purple" size="sm">Button</MDBBtn>,
        name: 'Prescott Bartlett',
        position: 'Technical Author',
        office: 'London',
        age: '27',
        date: '2011/05/07',
        salary: '$145'
      },
      {
        action: <MDBBtn color="purple" size="sm">Button</MDBBtn>,
        name: 'Gavin Cortez',
        position: 'Team Leader',
        office: 'San Francisco',
        age: '22',
        date: '2008/10/26',
        salary: '$235'
      },
      {
        action: <MDBBtn color="purple" size="sm">Button</MDBBtn>,
        name: 'Martena Mccray',
        position: 'Post-Sales support',
        office: 'Edinburgh',
        age: '46',
        date: '2011/03/09',
        salary: '$324'
      },
      {
        action: <MDBBtn color="purple" size="sm">Button</MDBBtn>,
        name: 'Unity Butler',
        position: 'Marketing Designer',
        office: 'San Francisco',
        age: '47',
        date: '2009/12/09',
        salary: '$85'
      },
      {
        action: <MDBBtn color="purple" size="sm">Button</MDBBtn>,
        name: 'Howard Hatfield',
        position: 'Office Manager',
        office: 'San Francisco',
        age: '51',
        date: '2008/12/16',
        salary: '$164'
      },
      {
        action: <MDBBtn color="purple" size="sm">Button</MDBBtn>,
        name: 'Hope Fuentes',
        position: 'Secretary',
        office: 'San Francisco',
        age: '41',
        date: '2010/02/12',
        salary: '$109'
      },
      {
        action: <MDBBtn color="purple" size="sm">Button</MDBBtn>,
        name: 'Vivian Harrell',
        position: 'Financial Controller',
        office: 'San Francisco',
        age: '62',
        date: '2009/02/14',
        salary: '$452'
      },
      {
        action: <MDBBtn color="purple" size="sm">Button</MDBBtn>,
        name: 'Timothy Mooney',
        position: 'Office Manager',
        office: 'London',
        age: '37',
        date: '2008/12/11',
        salary: '$136'
      },
      {
        action: <MDBBtn color="purple" size="sm">Button</MDBBtn>,
        name: 'Jackson Bradshaw',
        position: 'Director',
        office: 'New York',
        age: '65',
        date: '2008/09/26',
        salary: '$645'
      },
      {
        action: <MDBBtn color="purple" size="sm">Button</MDBBtn>,
        name: 'Olivia Liang',
        position: 'Support Engineer',
        office: 'Singapore',
        age: '64',
        date: '2011/02/03',
        salary: '$234'
      },
      {
        action: <MDBBtn color="purple" size="sm">Button</MDBBtn>,
        name: 'Bruno Nash',
        position: 'Software Engineer',
        office: 'London',
        age: '38',
        date: '2011/05/03',
        salary: '$163'
      },
      {
        action: <MDBBtn color="purple" size="sm">Button</MDBBtn>,
        name: 'Sakura Yamamoto',
        position: 'Support Engineer',
        office: 'Tokyo',
        age: '37',
        date: '2009/08/19',
        salary: '$139'
      },
      {
        action: <MDBBtn color="purple" size="sm">Button</MDBBtn>,
        name: 'Thor Walton',
        position: 'Developer',
        office: 'New York',
        age: '61',
        date: '2013/08/11',
        salary: '$98'
      },
      {
        action: <MDBBtn color="purple" size="sm">Button</MDBBtn>,
        name: 'Finn Camacho',
        position: 'Support Engineer',
        office: 'San Francisco',
        age: '47',
        date: '2009/07/07',
        salary: '$87'
      },
      {
        action: <MDBBtn color="purple" size="sm">Button</MDBBtn>,
        name: 'Serge Baldwin',
        position: 'Data Coordinator',
        office: 'Singapore',
        age: '64',
        date: '2012/04/09',
        salary: '$138'
      },
      {
        action: <MDBBtn color="purple" size="sm">Button</MDBBtn>,
        name: 'Zenaida Frank',
        position: 'Software Engineer',
        office: 'New York',
        age: '63',
        date: '2010/01/04',
        salary: '$125'
      },
      {
        action: <MDBBtn color="purple" size="sm">Button</MDBBtn>,
        name: 'Zorita Serrano',
        position: 'Software Engineer',
        office: 'San Francisco',
        age: '56',
        date: '2012/06/01',
        salary: '$115'
      },
      {
        action: <MDBBtn color="purple" size="sm">Button</MDBBtn>,
        name: 'Jennifer Acosta',
        position: 'Junior Javascript Developer',
        office: 'Edinburgh',
        age: '43',
        date: '2013/02/01',
        salary: '$75'
      },
      {
        action: <MDBBtn color="purple" size="sm">Button</MDBBtn>,
        name: 'Cara Stevens',
        position: 'Sales Assistant',
        office: 'New York',
        age: '46',
        date: '2011/12/06',
        salary: '$145'
      },
      {
        action: <MDBBtn color="purple" size="sm">Button</MDBBtn>,
        name: 'Hermione Butler',
        position: 'Regional Director',
        office: 'London',
        age: '47',
        date: '2011/03/21',
        salary: '$356'
      },
      {
        action: <MDBBtn color="purple" size="sm">Button</MDBBtn>,
        name: 'Lael Greer',
        position: 'Systems Administrator',
        office: 'London',
        age: '21',
        date: '2009/02/27',
        salary: '$103'
      },
      {
        action: <MDBBtn color="purple" size="sm">Button</MDBBtn>,
        name: 'Jonas Alexander',
        position: 'Developer',
        office: 'San Francisco',
        age: '30',
        date: '2010/07/14',
        salary: '$86'
      },
      {
        action: <MDBBtn color="purple" size="sm">Button</MDBBtn>,
        name: 'Shad Decker',
        position: 'Regional Director',
        office: 'Edinburgh',
        age: '51',
        date: '2008/11/13',
        salary: '$183'
      },
      {
        action: <MDBBtn color="purple" size="sm">Button</MDBBtn>,
        name: 'Michael Bruce',
        position: 'Javascript Developer',
        office: 'Singapore',
        age: '29',
        date: '2011/06/27',
        salary: '$183'
      },
      {
        action: <MDBBtn color="purple" size="sm">Button</MDBBtn>,
        name: 'Donna Snider',
        position: 'Customer Support',
        office: 'New York',
        age: '27',
        date: '2011/01/25',
        salary: '$112'
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

export default RegistrationList1;