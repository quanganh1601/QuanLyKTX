import { Table } from "antd";
import "./index.scss"

const Contact = (props) => {
  const { dataSource, columns } = props;

  return (
    <div className="container-table">
      <Table
        className="table-record"
        dataSource={dataSource}
        columns={columns}
      />
    </div>
  )
}
export default Contact;