import React, { useEffect, useState, useMemo } from "react";
import Calendar from "react-calendar";
import Calendar2 from "react-calendar";
import moment from "moment";
import "react-calendar/dist/Calendar.css"; // css import
import Table from "./Table";
import deepCopy from "lodash.clonedeep";

export default function CalendarBlock() {
  const [value, setValue] = useState();
  const [value2, setValue2] = useState();
  const [startOn, setStartOn] = useState(false);
  const [총주수, 셋총주수] = useState();
  const [검증, 셋검증] = useState();
  const [재시작변수, 셋재시작변수] = useState();
  const [사람수, 셋사람수] = useState();
  const [totalTeam, settotalTeam] = useState([]);

  function start() {
    console.log(value);
    console.log(value2);
    if (value === undefined) {
      alert("시작 날짜를 선택 하세요");
    } else if (value2 === undefined) {
      alert("종료 날짜를 선택 하세요");
    } else if (value.getDay() !== 1) {
      alert("시작일은 월요일이어야 합니다.");
    } else if (value2.getDay() !== 5) {
      alert("종료일은 금요일이어야 합니다.");
    } else if (value >= value2) {
      alert("시간이 거꾸로 가고 있으신가요?");
    } else if (
      team1 === undefined ||
      team2 === undefined ||
      team3 === undefined
    ) {
      alert("명단 3칸을 모두 채워주세요");
    } else if (총주수 > 50) {
      alert("최대 1년까지 가능합니다.");
    } else {
      alert("시작합니다");
      random();
    }
  }

  useEffect(() => {
    셋총주수((value2 - value + 86400000 + 86400000 + 86400000) / 86400000 / 7);
  }, [value2, value]);

  const columns = useMemo(
    () => [
      {
        accessor: "시작날짜",
        Header: "시작날짜",
      },
      {
        accessor: "종료날짜",
        Header: "종료날짜",
      },
      {
        accessor: "0",
        Header: "정",
      },
      {
        accessor: "1",
        Header: "부",
      },
    ],
    []
  );

  // let data = useMemo(
  //   () => [
  //     {
  //       시작날짜: "2021-08-03",
  //       종료날짜: "2021-08-03",
  //       0: "닥터맨",
  //       1: "아연맨",
  //     },
  //     {
  //       시작날짜: "2021-08-03",
  //       종료날짜: "2021-08-03",
  //       0: "닥터맨",
  //       1: "아연맨",
  //     },
  //   ],
  //   []
  // );

  function team1Split(text) {
    setteam1(text.split(" "));
  }
  function team2Split(text) {
    setteam2(text.split(" "));
  }
  function team3Split(text) {
    setteam3(text.split(" "));
  }

  const [team1, setteam1] = useState();
  const [team2, setteam2] = useState();
  const [team3, setteam3] = useState();
  const [randomArr, setRandomArr] = useState();

  const [data, setdata] = useState([]);

  function random() {
    console.log("team1");
    console.log(team1);
    console.log("team2");
    console.log(team2);
    console.log("team3");
    console.log(team3);
    function fixTeamConverter(teamArr) {
      let arr = [];
      for (let n = 0; n < teamArr.length; n++) {
        arr.push({
          이름: teamArr[n],
          part: "고정팀",
          자리차지비율: 2,
          사용량: 0,
        });
      }
      return arr;
    }
    function engineerTeamConverter(teamArr) {
      let arr = [];
      for (let n = 0; n < teamArr.length; n++) {
        arr.push({
          이름: teamArr[n],
          part: "기술팀",
          자리차지비율: 1,
          사용량: 0,
        });
      }
      return arr;
    }
    function devTeamConverter(teamArr) {
      let arr = [];
      for (let n = 0; n < teamArr.length; n++) {
        arr.push({
          이름: teamArr[n],
          part: "개발팀",
          자리차지비율: 1,
          사용량: 0,
        });
      }
      return arr;
    }

    let totalTeam = [
      ...fixTeamConverter(team1),
      ...engineerTeamConverter(team2),
      ...devTeamConverter(team3),
    ];
    console.log("totalTeam");
    console.log(totalTeam);
    settotalTeam(team1.length * 2 + team2.length + team3.length);
    function newDatefunc(n) {
      // newDatefunc(value.setDate(value.getDate() + 1)),

      let weekDate = deepCopy(value);

      // date.setDate(date.getDate() + n * 7);
      // date.setMonth(date.getDate() + 1);
      let weekDate2 = new Date(weekDate.setDate(weekDate.getDate() + n * 7));
      return weekDate2.getMonth() + 1 + "월" + weekDate2.getDate() + "일";
    }
    function newDatefunc2(n) {
      let weekDate = deepCopy(value);
      let weekDate2 = new Date(
        weekDate.setDate(weekDate.getDate() + 4 + n * 7)
      );
      return weekDate2.getMonth() + 1 + "월" + weekDate2.getDate() + "일";
    }

    // let 최대사용횟수 = Math.ceil((총주수 * 2) / 명단.length);

    let 랜덤명단 = Array.from(Array(총주수), () => new Array());

    // [[], [], []]
    let 사용된명단 = {};
    let 명단 = totalTeam;
    // let 명단 = [
    //   { 이름: "김수경, 한보라", part: "고정팀", 자리차지비율: 2, 사용량: 0 },
    //   { 이름: "기술팀1", part: "기술팀", 자리차지비율: 1, 사용량: 0 },
    //   { 이름: "기술팀2", part: "기술팀", 자리차지비율: 1, 사용량: 0 },
    //   { 이름: "기술팀3", part: "기술팀", 자리차지비율: 1, 사용량: 0 },
    //   { 이름: "4", part: "개발팀", 자리차지비율: 1, 사용량: 0 },
    //   { 이름: "5", part: "개발팀", 자리차지비율: 1, 사용량: 0 },
    //   { 이름: "6", part: "개발팀", 자리차지비율: 1, 사용량: 0 },
    //   { 이름: "7", part: "개발팀", 자리차지비율: 1, 사용량: 0 },
    //   { 이름: "8", part: "개발팀", 자리차지비율: 1, 사용량: 0 },
    //   { 이름: "9", part: "개발팀", 자리차지비율: 1, 사용량: 0 },
    //   { 이름: "10", part: "개발팀", 자리차지비율: 1, 사용량: 0 },
    //   { 이름: "11", part: "개발팀", 자리차지비율: 1, 사용량: 0 },
    //   { 이름: "12", part: "개발팀", 자리차지비율: 1, 사용량: 0 },
    //   { 이름: "13", part: "개발팀", 자리차지비율: 1, 사용량: 0 },
    //   { 이름: "14", part: "개발팀", 자리차지비율: 1, 사용량: 0 },
    //   { 이름: "15", part: "개발팀", 자리차지비율: 1, 사용량: 0 },
    //   { 이름: "16", part: "개발팀", 자리차지비율: 1, 사용량: 0 },
    //   { 이름: "17", part: "개발팀", 자리차지비율: 1, 사용량: 0 },
    //   { 이름: "18", part: "개발팀", 자리차지비율: 1, 사용량: 0 },
    //   { 이름: "19", part: "개발팀", 자리차지비율: 1, 사용량: 0 },
    //   { 이름: "20", part: "개발팀", 자리차지비율: 1, 사용량: 0 },
    // ];

    function 사용량체크기(arr, people) {
      // console.log("사용량체크기의 arr");
      // console.log(arr);
      // console.log(arr.flat().length);
      let _arr = arr.flat();

      // console.log("_arr");
      // console.log(_arr);
      let arrFlat = _arr.map((el) => el.이름);
      // console.log("arrFlat");
      // console.log(arrFlat);
      let result = {};

      for (let n = 0; n < arrFlat.length; n++) {
        let char = arrFlat[n];

        if (result[char] > 0) result[char]++;
        else result[char] = 1;
      }
      // console.log("result");
      // console.log(result);
      let min = Math.min(...Object.values(result));
      // console.log("min");
      // console.log(min);
      if (people !== undefined) return result[people];
      else return result;
    }

    //랜덤명단 내부 탐색용 카운터
    let m = 0;
    let fakeonePick;

    while (랜덤명단.flat().length < 총주수 * 2) {
      // while (m < 50) {
      //[한번씩만 랜덤으로 돌아가도록 애초에 명단 리스트를 구성한다]
      //최소사용량 구하기
      let min = Infinity;
      for (let n = 0; n < 명단.length; n++) {
        if (명단[n].사용량 < min) min = 명단[n].사용량;
      }
      console.log("최소사용량은 ");
      console.log(min);
      //최소로 사용된 명단만 따로 모으기
      let 최소사용된명단 = [];
      for (let n = 0; n < 명단.length; n++) {
        if (명단[n].사용량 === min) 최소사용된명단.push(명단[n]);
      }
      console.log("최소사용된명단 ");
      console.log(최소사용된명단);

      //랜덤으로 하나를 뽑는다
      // let onePick = fakeOnPick || 명단[Math.floor(Math.random() * 명단.length)];
      let onePick =
        fakeonePick ||
        최소사용된명단[Math.floor(Math.random() * 최소사용된명단.length)];
      console.log("원픽");
      console.log(onePick);

      //본격적으로 배열안을 탐색하며 넣어준다

      //자리가있는지 체크
      let 출입가능여부 = onePick.자리차지비율 + 랜덤명단[m]?.length <= 2;
      console.log(" 랜덤명단[m]");
      console.log(랜덤명단);
      console.log("m");
      console.log(m);
      console.log("출입가능여부");
      console.log(출입가능여부);
      console.log("랜덤명단[m]");
      console.log(랜덤명단[m]);

      ////자리도 있고, 기술팀제약도 해결되었다며
      if (출입가능여부) {
        console.log(1);
        //고정팀의 푸쉬
        if (onePick.part === "고정팀") {
          console.log(2);

          랜덤명단[m].push({
            이름: onePick.이름.split(",")[0],
            part: "고정팀",
          });
          for (let n = 0; n < 명단.length; n++) {
            if (명단[n].이름 === onePick.이름) {
              명단[n].사용량 = 명단[n].사용량 + 1;
            }
          }

          랜덤명단[m].push({
            이름: onePick.이름.split(",")[1],
            part: "고정팀",
          });
          console.log("사용량 카운트 확인용 명단");
          console.log(명단);
          fakeonePick = undefined;

          m++;
          // continue;
        }
        //기술팀과, 개발팀의 일반적인 푸쉬
        else if (onePick.part === "개발팀") {
          console.log(3);

          랜덤명단[m].push(onePick);
          for (let n = 0; n < 명단.length; n++) {
            if (명단[n].이름 === onePick.이름) {
              명단[n].사용량 = 명단[n].사용량 + 1;
            }
          }
          console.log("사용량 카운트 확인용 명단");
          console.log(명단);
          if (랜덤명단[m].length === 2) {
            console.log(4);

            m++;
            fakeonePick = undefined;

            continue;
          } else {
            console.log(5);

            fakeonePick = undefined;

            continue;
          }
        } else if (onePick.part === "기술팀") {
          console.log(6);

          if (랜덤명단[m]?.[0]?.part === "기술팀") {
            console.log(7);

            fakeonePick = deepCopy(onePick);
            m++;
            continue;
          } else {
            console.log(8);

            // if (onePick.사용횟수 !== undefined)
            //   onePick.사용횟수 = onePick.사용횟수 + 1;
            // else onePick.사용횟수 = 1;
            fakeonePick = undefined;

            랜덤명단[m].push(onePick);
            for (let n = 0; n < 명단.length; n++) {
              if (명단[n].이름 === onePick.이름) {
                명단[n].사용량 = 명단[n].사용량 + 1;
              }
            }
            m = 0;
            continue;
          }
        }
      }
      //현재 자리에 들어가질 않는다면
      //랜덤명단의 다음칸으로 들어가는지 테스틈하자
      //푸쉬되지 못함
      else {
        console.log(9);

        // if(m >= 총주수 * 2 && !!fakeonePick){

        //   랜덤명단[m].push( ['빈배열']);
        // }

        if (m >= 총주수 * 2) {
          console.log(10);

          fakeonePick = 명단[Math.floor(Math.random() * 명단.length)];
          // fakeonePick = undefined;
          m = 0;
          continue;
        } else if (m < 총주수 * 2) {
          console.log(11);

          fakeonePick = deepCopy(onePick);
          // fakeonePick = undefined;
          m++;
          // continue;
        }
      }
    }

    /////////////////////////////////////////////////////////////
    let renderData = [];
    if (랜덤명단.flat().length === 총주수 * 2 && 랜덤명단[0]) {
      for (let n = 0; n < 총주수; n++) {
        renderData.push({
          시작날짜: newDatefunc(n),
          종료날짜: newDatefunc2(n),
          0: 랜덤명단[n][0].이름,
          1: 랜덤명단[n][1].이름,
          // 0: 명단[n * 2].이름,
          // 1: 명단[n * 2 + 1].이름,
        });
        // renderData[n][0] = "헐크";
        // renderData[n][1] = "토니스타크";
      }
    }
    셋검증(사용량체크기(랜덤명단));
    let arr = Object.values(사용량체크기(랜덤명단));
    셋사람수(arr.length);
    console.log(arr);
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let sum = max - min;
    셋재시작변수(sum);

    console.log("사용량체크기(랜덤명단)");
    console.log(사용량체크기(랜덤명단));
    console.log("랜덤명단");
    console.log(랜덤명단);
    console.log("renderData");
    console.log(renderData);

    setStartOn(true);
    setdata(renderData);
    alert("완료 되었습니다.");
  }

  return (
    <>
      <br></br>

      {!startOn ? (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <div>
              <div>시작일</div>
              <Calendar onChange={setValue} value={value} />
              <div>
                {moment(value).format("YYYY년 MM월 DD일 HH시 mm분 ss초")}
              </div>
            </div>

            <div>
              <div>종료일</div>
              <Calendar2 onChange={setValue2} value={value2} />
              <div>
                {moment(value2).format("YYYY년 MM월 DD일 HH시 mm분 ss초")}
              </div>
            </div>
          </div>

          <div>{`총 기간= ${Math.round(총주수)}  주 `}</div>
          <div>
            <div style={{ display: "flex" }}>
              고정조
              <textarea
                style={{ width: "500px" }}
                onChange={(e) => team1Split(e.target.value)}
              ></textarea>
              <div>입력예시:김수경,한보라</div>
            </div>
            <div style={{ display: "flex" }}>
              기술팀
              <textarea
                style={{ width: "500px" }}
                onChange={(e) => team2Split(e.target.value)}
              ></textarea>
              <div>입력예시:이경노 이진우 김정호 이형주</div>
            </div>
            <div style={{}}>
              개발팀
              <textarea
                style={{ width: "500px" }}
                onChange={(e) => team3Split(e.target.value)}
              ></textarea>
              <div>
                입력예시:양윤석 김건희 이상호 이승수 권금련 김한결 박경훈 장우성
                유영표 이상훈 손동호 신규식 손우진 최한힘나라 이도경 김세정
                서준식 차은호
              </div>
            </div>
          </div>
          <button onClick={() => start()}>시작버튼</button>
        </>
      ) : (
        <>
          <div
            style={
              {
                // textAlign: "center",
              }
            }
          >
            테이블
          </div>
          <Table columns={columns} data={data} />

          <div>뽑힌 횟수 정리:</div>
          <div>
            {검증 &&
              JSON.stringify(검증)
                .slice(1, JSON.stringify(검증).length - 1)
                .replace(/['"]+/g, "  ")}
          </div>
          <br></br>
          <div>제공 된 명단 총원 : {totalTeam}</div>
          <br></br>
          <div>당번에 뽑힌 총원 : {사람수}</div>
          <br></br>
          <div>최대 당번 횟수 - 최소 당번 횟수 : {재시작변수}</div>
          <div>( 일반적인 범위 0~1, 경우에 따라 2회까지 날 수 있음 )</div>
          <br></br>
          <div>다시하려면 새로고침 하세요</div>
        </>
      )}
    </>
  );
}
