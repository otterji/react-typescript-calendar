import React, { Component } from 'react';

interface Props{

}
interface State{
  today: Date;
  year: number;
  month: number;
  day: number;
  dateArr: number[][];
  checkin: Array<number>
  date: number;
}

class MyCalendar extends Component<Props, State>{
  constructor(props: Props) {
    super(props)
    this.state = {
        today: new Date(),
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1,
        day: new Date().getDay(),
        date: new Date().getDate(),
        dateArr: [],
        checkin: [1, 3, 5, 7, 20],
        
    }
}
componentDidMount() {
    this.getCalendar()
}
isLeap() {
    const year = this.state.year
    if (year % 4 === 0 && year % 100 > 0) {
        return true
    } else if (year % 400 === 0 && year % 3200 > 0) {
        return true
    } else {
        return false
    }
}
getLen() {
    const month = this.state.month
    if (month === 2) {
        if (this.isLeap()) {
            return 29
        } else {
            return 28
        }
    } else {
        if (month < 8) {
            if (month % 2 > 0) {
                return 31
            } else {
                return 30
            }
        } else {
            if (month % 2 > 0) {
                return 30
            } else {
                return 31
            }
        }
    }
}
getCalendarTime() {
    return this.state.year + "-" + this.state.month + "-" + this.state.date
}
getCalendar() {
    var len: number = this.getLen()
    var d: Date = new Date(this.state.year, this.state.month - 1, 1)
    var dfw: number = d.getDay()
    var arr: number[][] = []
    var tem: number = 0
    for (var i = 0; i < 6; i++) {
        arr[i] = []
        for (var j = 0; j < 7; j++) {
            tem++
            if (tem - dfw > 0 && tem - dfw <= len) {
                arr[i][j] = tem - dfw
            } else {
                arr[i][j] = 0
            }
        }
    }

    let arr2 = [[1,2,3,4], [5,6,7,8]]
    this.setState({
      dateArr: arr2,
    })
}
nextMonth() {
    if (this.state.month === 12) {
        this.setState({
            year: this.state.year + 1,
            month: 1
        }, () => {
            this.getCalendar()
        })
    } else {
        this.setState({
            month: this.state.month + 1
        }, () => {
            this.getCalendar()
        })
    }
}
prevMonth() {
    if (this.state.month === 1) {
        this.setState({
            year: this.state.year - 1,
            month: 12
        }, () => {
            this.getCalendar()
        })
    } else {
        this.setState({
            month: this.state.month - 1
        }, () => {
            this.getCalendar()
        })
    }
}
contains(arr: Array<string>) {
    if (
        arr[0] === "" &&
        arr[1] === "" &&
        arr[2] === "" &&
        arr[3] === "" &&
        arr[4] === "" &&
        arr[5] === "" &&
        arr[6] === ""
    ) {
        return false
    } else {
        return true
    }
}
isCheck(index: number) {
    for (let i in this.state.checkin) {
        if (index === this.state.checkin[i]) {
            return true
        }
    }
    return false
}
render() {
    const items = []
    const dateArr = this.state.dateArr
    for(let i = 0; i < dateArr.length; i++) {
        const itemDate: number[] = [dateArr[i]]
        const tds = []
        for(let j = 0; j < itemDate.length; j++) {
            const data = itemDate[j]
            if(this.isCheck(data)) {
                tds.push(<td className={"ui-state-default" + (data === this.state.date ? "cur_day" : "")} key={"td" + j} />)
            }else {
                tds.push(<td className={data === this.state.date ? "cur_day" : ""} key={"td" + j}>{data}</td>)
            }
        }
        items.push(<tr key={'tr' + i}>{tds}</tr>)
      }
    console.log(items);
    return <div className="content-page uk-body">
            <div className="calendar">
                <button className="month-less" onClick={this.prevMonth.bind(this)} />
                <h4>
                    {this.state.year}년{this.state.month}월{this.state.date}일
                </h4>
                <button className="month-add" onClick={this.nextMonth.bind(this)} />
                <table className="sign_tab" cellPadding="0px" cellSpacing="0px">
                            <th>일</th>
                            <th>월</th>
                            <th>화</th>
                            <th>수</th>
                            <th>목</th>
                            <th>금</th>
                            <th>토</th>
                    <tbody>
                      {items}
                    </tbody>
                </table>
                
            </div>
        </div>
}
}

export default MyCalendar;
