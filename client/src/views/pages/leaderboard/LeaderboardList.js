import React from "react"
import { Card, CardBody, CardHeader, CardTitle, Input } from "reactstrap"
import { Search } from "react-feather"
import DataTable from "react-data-table-component"

const CustomHeader = props => {
  return (
    <div className="position-relative has-icon-left mb-1">
      <Input value={props.value} onChange={e => props.handleFilter(e)} />
      <div className="form-control-position">
        <Search size="15" />
      </div>
    </div>
  )
}

class LeaderboardList extends React.Component {
  state = {
    columns: [
      {
        name: "Rank",
        selector: "id",
        width: "150px",
        sortable: true
      },
      {
        name: "Attendee",
        selector: "attendee",
        sortable: true
      },
      {
        name: "Points",
        selector: "points",
        sortable: true
      }
    ],
    data: [
      {
        id: 1,
        attendee: "Alyss",
        points: "2000"
      },
      {
        id: 2,
        attendee: "Shep",
        points: "1850"
      },
      {
        id: 3,
        attendee: "Gasper",
        points: "1850"
      },
      {
        id: 4,
        attendee: "Phaedra",
        points: "1850"
      },
      {
        id: 5,
        attendee: "Conn",
        points: "1850"
      },
      {
        id: 6,
        attendee: "Tootsie",
        points: "1850"
      },
      {
        id: 7,
        attendee: "Sibley",
        points: "1850"
      },
      {
        id: 8,
        attendee: "Kristoffer",
        points: "1850"
      },
      {
        id: 9,
        attendee: "Fay",
        points: "1850"
      },
      {
        id: 10,
        attendee: "Tabby",
        points: "1850"
      }
    ],
    value: "",
    filteredData: []
  }

  handleFilter = e => {
    let value = e.target.value
    let data = this.state.data
    let filteredData = this.state.filteredData
    this.setState({ value })

    if (value.length) {
      filteredData = data.filter(item => {
        let startsWithCondition =
          item.attendee.toLowerCase().startsWith(value.toLowerCase()) ||
          item.last_name.toLowerCase().startsWith(value.toLowerCase()) ||
          item.email.toLowerCase().startsWith(value.toLowerCase()) ||
          item.points.toLowerCase().startsWith(value.toLowerCase()) ||
          item.id
            .toString()
            .toLowerCase()
            .startsWith(value.toLowerCase())
        let includesCondition =
          item.attendee.toLowerCase().includes(value.toLowerCase()) ||
          item.last_name.toLowerCase().includes(value.toLowerCase()) ||
          item.email.toLowerCase().includes(value.toLowerCase()) ||
          item.points.toLowerCase().includes(value.toLowerCase()) ||
          item.id
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())

        if (startsWithCondition) {
          return startsWithCondition
        } else if (!startsWithCondition && includesCondition) {
          return includesCondition
        } else return null
      })
      this.setState({ filteredData })
    }
  }

  render() {
    let { columns, data, value, filteredData } = this.state
    return (
      <Card style={{marginBottom:"0px"}}>
        <CardBody>
          <DataTable
            data={value.length ? filteredData : data}
            columns={columns}
            noHeader
            fixedHeader
            fixedHeaderScrollHeight="400px"
            subHeader
            subHeaderComponent={
              <CustomHeader value={value} handleFilter={this.handleFilter} />
            }
          />
        </CardBody>
      </Card>
    )
  }
}

export default LeaderboardList
