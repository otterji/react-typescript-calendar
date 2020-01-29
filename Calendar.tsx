// import React, { Component } from 'react';
// import Calendar from 'react-calendar';

// interface Props {

// }
// interface State {
//   date: Date;
// }

// class MyCalendar extends Component<Props, State>{
//   constructor(props: Props) {
//     super(props);
//     this.state = {
//       date: new Date(),
//     }
//   }

//   const today = {
//     cur: new Date()
//   };

//   const date = new Date();


  
//   const prevCalendar = () => {
//     const cur = this.today.cur;
//     this.today.cur = new Date(cur.getFullYear(), cur.getMonth() - 1, cur.getDate());
//     this.buildCalendar();     
//   }

//   const nextCalendar = () => {
//     const cur = this.today.cur;
//     this.today.cur = new Date(cur.getFullYear(), cur.getMonth() + 1, cur.getDate());
//     this.buildCalendar();
//   }

//   const buildCalendar = () => {
//     const cur = this.today.cur;
//     const doMonth = new Date(cur.getFullYear(), cur.getMonth(), 1);
//     const lastDate = new Date(cur.getFullYear(), cur.getMonth() + 1, 0);
//     const tbCalendar = document.getElementById("calendar");
//     const tbCalendarYM = document.getElementById("tbCalendarYM");

//     tbCalendarYM.innerHTML = cur.getFullYear() + "년 " + (cur.getMonth() + 1) + "월";
//     while (tbCalendar.rows.length > 2) {
//       tbCalendar.deleteRow(tbCalendar.rows.length - 1);
//     }
       
//     const rows = [];
//     rows.push(tbCalendar.insertRow());
       
//     let cnt = 0;       
//     for (let i = 0; i < doMonth.getDay(); i++) {
//       rows[0].insertCell();     
//       cnt++;     
//     }
       
//     for (let i = 1; i <= lastDate.getDate(); i++) {
//       const cell = cnt < 7 ? rows[0].insertCell() : rows[rows.length - 1].insertCell();     
//       cell.innerHTML = i;              
//       cnt++;              
      
//       if (cnt % 7 == 1) {
//         cell.innerHTML = "<font color=red>" + i
//       }         
      
//       if (cnt % 7 == 0) {
//         cell.innerHTML = "<font color=blue>" + i
//         rows.push(tbCalendar.insertRow());
//       }
         
//       if (cur.getFullYear() == this.date.getFullYear()
//         && cur.getMonth() == this.date.getMonth()
//         && i == this.date.getDate()) {
//         cell.bgColor = "yellow";
//       }
//     }

//     onchange = (date: Date) => this.setState({ date })

//     render() {
//       return (
//         <div>

//           {/* <!-- 이제 표 --> */}
//           <table id="calendar">
//             {/* <!-- 위에 < 년 월 > 부분 --> */}
//             <tr>
//               <td>
//                 <label id="prevBtn" onclick="prevCalendar()"> < </label> 
//               </td>
//                <td id="tbCalendarYM" colspan="5">
//                   yyyy년 m월
//               </td>
//               <td>
//                 <label id="nextBtn" onclick="nextCalendar()"> > </label>
//               </td>
//              </tr>

//               {/* <!-- 요일 부분 --> */}
//               <tr>
//                 <td  >
//                   <font color="red">일</font>
//                 </td>
//                 <td>월</td>
//                 <td>화</td>
//                 <td>수</td>
//                 <td>목</td>
//                 <td>금</td>
//                 <td>
//                   <font color="blue">토</font>
//                 </td>
//               </tr>
//             </table>
//           </div>
//           <Calendar />
//           );
//         }
//       }
      
// export default MyCalendar;