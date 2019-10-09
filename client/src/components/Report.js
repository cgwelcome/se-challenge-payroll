import React, { Component, Fragment } from 'react';
// MUI
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';

var report_ids = [1, 2, 3, 4, 5, 6, 7];
class report extends Component {
  state = {
    loading: true,
    reports: [],
  }

  componentDidMount() {
    axios.get('/payrolls').then(res => {
      console.log('----actions:::getReport:::', 'res.data: ', res.data);
      this.setState({reports: res.data, loading: false});
    }).catch(err => {
      console.log('----actions:::getReport:::', 'err: ', err);
    })
  }

    render() {
        let reportMarkup = !this.state.loading ? (
            this.state.reports.map(
                (report) => (
                    <Fragment>
                        <TableRow>
                            <TableCell component="th" scope="row">
                              {report.employee_id}
                            </TableCell>
                            <TableCell align="right">
                              {report.start_date} - {report.end_date}
                            </TableCell>
                          <TableCell align="right">${report.amount_paid}</TableCell>
                        </TableRow>
                    </Fragment>
                )
            )
        ) : (
                <Fragment>
                    <TableRow>
                        <TableCell component="th" scope="row"></TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                    </TableRow>
                </Fragment>
            )

        return (
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Employee ID</TableCell>
                            <TableCell align="right">Pay Period</TableCell>
                            <TableCell align="right">Amount Paid</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {reportMarkup}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

export default report;
