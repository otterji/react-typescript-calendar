// TODO: 
// XXX: 생각이 필요함
// HACK: 구린느낌
// FIXME: 언젠가 문제가 생길애
// DEBUG: 코드 리뷰할때 새로운 브랜치에서 디버깅하는거 보여줌

// REVIEW:

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Calendar</title>

    <!-- CSS 디자인 부분 -->
    <style type="text/css">
        table {
            text-align: center;
            margin: 0 auto;
        }
        td {
            text-align: center;
            width: 50px;
            height: 50px;
            font-size: 20px;
            /* font-family: 굴림; */
            /* border:2px solid black; */
        }
    </style>

    <!-- JS 코드 -->
    <script type="text/javascript">
        const today = {
            cur: new Date()
        }  // 오늘 날짜. 내 컴 기준으로 today에 Date 객체를 넣어줌
        const date = new Date();  // today의 Date를 세어줌

        // 이전 달 만들기
        const prevCalendar = () => {
            // 이전 달을 today 값에 저장하고 달력에 넣음. -1해서
            const cur = today.cur;
            today.cur = new Date(cur.getFullYear(), cur.getMonth() - 1, cur.getDate());
            buildCalendar();  // 달력에 cell 만들어 출력
        }

        // 다음 달 만들기
        const nextCalendar = () => {
            const cur = today.cur;
            today.cur = new Date(cur.getFullYear(), cur.getMonth() + 1, cur.getDate());
            buildCalendar();
        }

        // 현재 달 달력 만들기
        const buildCalendar = () => {
            const cur = today.cur;
            // 이번 달의 첫째 날. new를 쓰면 로컬의 월을 받아옴(안쓰면 +1 해줘야함 0부터임)
            const doMonth = new Date(cur.getFullYear(), cur.getMonth(), 1);
            // 이번 달의 마지막 날. Month+1 하면 다음달인데 0으로 하면 전달 마지막일 가져옴
            const lastDate = new Date(cur.getFullYear(), cur.getMonth()+1, 0);
            // 날짜를 찍을 테이블 변수 만듦. 일 까지 다 찍음
            const tbCalendar = document.getElementById("calendar");
            // 테이블에 정확한 날짜를 찍는 변수
            const tbCalendarYM = document.getElementById("tbCalendarYM");

            // new 를 찍지 않아서 +1 해줌
            // innerHTML 은 JS 언어를 HTML 권장 표준 언어로 바꿔줌
            tbCalendarYM.innerHTML = cur.getFullYear() + "년 " + (cur.getMonth() + 1) + "월";

            // while 은 이번달이 끝나면 다음달로 넘겨주는 역할
            while (tbCalendar.rows.length > 2) {
                // 열을 지워줌
                // 기본 열 크기는 body 부분에서 2(년월, 날짜)로 고정되어 있음
                tbCalendar.deleteRow(tbCalendar.rows.length-1);
                // 날짜를 다 지운 상태로 다음 달 숫자 렌더링 하기위함!
            }

            // 테이블에 새로운 열 삽입 (초기화)
            const rows = [];
            rows.push(tbCalendar.insertRow());

            // 셀의 갯수를 세어주는 cnt
            let cnt = 0;

            // 1 이 시작되는 칸을 맞추어 줌
            for (let i=0; i < doMonth.getDay(); i++) {
                // 이번달의 day 만큼 돌림
                rows[0].insertCell();  // 열 한칸한칸 계속 만들어줌
                cnt++;  // 다음 열로 옮겨줌 피봇을
            }

            // 달력 출력
            for (let i=1; i<=lastDate.getDate(); i++) {
                const cell = cnt < 7 ? rows[0].insertCell() : rows[rows.length - 1].insertCell();  // 열 한칸한칸 계속 만들어주는 역할
                cell.innerHTML = i;  // 셀을 1부터 마지막 day 까지 HTML에 넣어줌
                // 여기에 day-content 추가
                cnt++;  // 열의 갯수를 계속 다음으로 위치하게 해주는 역할

                // 일요일 구하기
                if (cnt % 7 == 1) {
                    // 7요일은 7로 나눴을때 나머지가 1이면 cnt가 1번째에 위치
                    cell.innerHTML = "<font color=red>" + i
                    // 1 번째 cell 에만 색칠
                }

                // 토요일 구하기
                if (cnt % 7 == 0) {
                    // 7요일을 7로 나눴을때 0 이 된느애가 토. (일월화수목금토 이므로)
                    cell.innerHTML = "<font color=blue>" + i
                    // 토요일은 다음에 올 셀을 추가해야됨

                    rows.push(tbCalendar.insertRow());
                }

                // 오늘 날짜에 노란색 표시하기
                if (cur.getFullYear() == date.getFullYear()
                && cur.getMonth() == date.getMonth()
                && i == date.getDate()) {
                    cell.bgColor = "yellow";
                }
            }
        }
    </script>


</head>

<body>
    <p></p>
    <h3>영지의 달력 </h3>

    <!-- 이제 표 -->
    <table id="calendar">


        <!-- 위에 < 년 월 > 부분 -->
        <tr>
            <td>
                <label id="prevBtn" onclick="prevCalendar()"> < </label> 
            </td> 
            <td   id="tbCalendarYM" colspan="5">
                yyyy년 m월
            </td>
            <td>
                <label id="nextBtn" onclick="nextCalendar()"> > </label>
            </td>
        </tr>

        <!-- 요일 부분 -->
        <tr>
            <td  >
                <font color="red">일</font>
            </td>
            <td  >월</td>
            <td  >화</td>
            <td  >수</td>
            <td  >목</td>
            <td  >금</td>
            <td  >
                <font color="blue">토</font>
            </td>
        </tr>
    </table>
    
    <script language="javascript" type="text/javascript">
        buildCalendar();
    </script>
</body>

</html>