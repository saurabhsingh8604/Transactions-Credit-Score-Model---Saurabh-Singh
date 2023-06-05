import React from 'react'
import { Table, Typography } from 'antd'


const {Text} = Typography;
const columns = [
    {
        title: 'Sr No',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
      },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
    },
    {
      title: 'Action',
      key: 'action',
    },
  ];


  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
  
  ];

export default function Cibil() {
  return (
    <>
<Text>Transaction History</Text>
    <Table columns={columns} dataSource={data} />
    </>
  )
}
