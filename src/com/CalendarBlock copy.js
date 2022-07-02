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
  const [총주수, 셋총주수] = useState();
  const [검증, 셋검증] = useState();
  const [재시작변수, 셋재시작변수] = useState();
  const [사람수, 셋사람수] = useState();

  function start() {
    if (value.getDay() !== 1) {
      alert("시작일은 월요일이어야 합니다.");
    } else if (value2.getDay() !== 5) {
      alert("종료일은 금요일이어야 합니다.");
    } else if (value >= value2) {
      alert("스트레인지?");
    } else {
      // alert("시작합니다");
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
    // let totalTeam = [...team1, ...team2, ...team3];
    let totalTeam = [
      "간미연,간미연",
      "간미연",
      "간미연",
      "간미연",
      "간미연",
      "간미연",
      "간미연",
      "간미연",
      "간미연",
    ];
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

    // function newDatefunc3(n) {
    //   let arr = [
    //     { 이름: "김수경, 한보라", part: "고정팀", 자리차지비율: 2 },
    //     { 이름: "후니훈", part: "개발팀", 자리차지비율: 1 },
    //     { 이름: "손흥민", part: "기술팀", 자리차지비율: 1 },
    //     { 이름: "토니", part: "기술팀", 자리차지비율: 1 },
    //   ];

    //   let returnData;

    //   for (let m = 0; m < 3; m++) {
    //     returnData = arr[n];
    //   }

    //   return returnData.이름;
    // }

    let 명단 = [
      { 이름: "김수경, 한보라", part: "고정팀", 자리차지비율: 2 },
      { 이름: "1", part: "기술팀", 자리차지비율: 1 },
      { 이름: "2", part: "기술팀", 자리차지비율: 1 },
      { 이름: "3", part: "기술팀", 자리차지비율: 1 },
      { 이름: "4", part: "개발팀", 자리차지비율: 1 },
      { 이름: "5", part: "개발팀", 자리차지비율: 1 },
      { 이름: "6", part: "개발팀", 자리차지비율: 1 },
      { 이름: "7", part: "개발팀", 자리차지비율: 1 },
      { 이름: "8", part: "개발팀", 자리차지비율: 1 },
      { 이름: "9", part: "개발팀", 자리차지비율: 1 },
      { 이름: "10", part: "개발팀", 자리차지비율: 1 },
      { 이름: "11", part: "개발팀", 자리차지비율: 1 },
      { 이름: "12", part: "개발팀", 자리차지비율: 1 },
      { 이름: "13", part: "개발팀", 자리차지비율: 1 },
      { 이름: "14", part: "개발팀", 자리차지비율: 1 },
      { 이름: "15", part: "개발팀", 자리차지비율: 1 },
      { 이름: "16", part: "개발팀", 자리차지비율: 1 },
      { 이름: "17", part: "개발팀", 자리차지비율: 1 },
      { 이름: "18", part: "개발팀", 자리차지비율: 1 },
      { 이름: "19", part: "개발팀", 자리차지비율: 1 },
      { 이름: "20", part: "개발팀", 자리차지비율: 1 },
    ];

    let 최대사용횟수 = Math.ceil((총주수 * 2) / 명단.length);
    // let 랜덤명단 = new Array(총주수).fill(0).map(() => new Array(2).fill({}));
    // let 랜덤명단 = new Array(총주수).fill([]);
    let 랜덤명단 = Array.from(Array(총주수), () => new Array());

    // [[], [], []]
    let 사용된명단 = {};
    // for (let m = 0; m < 총주수 * 2; m++) {

    //   //들어갈 공간이 있는지 체크

    //   // if (
    //   //   onePick.자리차지비율 +
    //   //     랜덤명단[m].length ===
    //   //   2
    //   // ) {

    // }
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
    function 최소값생성기(arr) {
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
      // if (people !== undefined) return result[people];
      return min;
    }

    let m = 0;
    let fakeonePick;
    let arrVsArr;
    let 딥복사명단 = deepCopy(명단);
    console.log("딥복사명단");
    console.log(딥복사명단);
    console.log(딥복사명단[0].이름);
    // while (랜덤명단.flat().length < 총주수 * 2) {
    while (랜덤명단.flat().length < 총주수 * 2) {
      console.log("사용량체크기(랜덤명단)");
      console.log(Object.values(사용량체크기(랜덤명단)).length);
      let 랜덤명단의길이 = Object.values(사용량체크기(랜덤명단)).length;
      //사용량이 한바퀴 안돌았을때, 사용된 명단 만 빼면서 재구성
      let 명단;
      let 명단푸쉬용어레이 = [];
      let i = 0;
      if (랜덤명단의길이 === 0) {
        명단 = 딥복사명단;
      } else if (랜덤명단의길이 < 딥복사명단.length) {
        console.log("여기1");
        for (let n = 0; n < 딥복사명단.length; n++) {
          console.log("여기2");
          console.log("랜덤명단의길이");
          console.log(랜덤명단의길이);

          for (let m = 0; m < 랜덤명단의길이; m++) {
            console.log("여기3");

            if (딥복사명단[n].이름 === 랜덤명단.flat()[m].이름) {
              console.log("여기4");

              i++;
              break;
            }
          }
          if (i === 0) {
            console.log("여기5");

            명단푸쉬용어레이.push(딥복사명단[n]);
          }
          i = 0;
        }
        console.log(명단푸쉬용어레이);
        명단 = 명단푸쉬용어레이;
      }

      //길이가 인원수보다 길때
      //이때는 최소값비교로 명단을 재구성
      else if (랜덤명단의길이 >= 딥복사명단.length) {
        // console.log("여기4");
        // 명단 = 딥복사명단;
        //사용량최소값과
        let count = 0;
        for (let n = 0; n < 랜덤명단의길이; n++) {
          for (let n = 0; n < 딥복사명단.flat().length; n++) {
            if (랜덤명단[n]?.이름 === 딥복사명단.flat()[n].이름) {
              count++;
            }
          }
          if (count === 최소값생성기(랜덤명단)) {
            console.log("여기5");

            명단푸쉬용어레이.push(딥복사명단[n]);
          }
          count = 0;
        }
        명단 = 명단푸쉬용어레이;
      }
      console.log("명단");
      console.log(명단);
      console.log("최소값생성기(랜덤명단)");
      console.log(최소값생성기(랜덤명단));

      let onePick =
        fakeonePick || 명단[Math.floor(Math.random() * 명단.length)];
      fakeonePick = undefined;
      arrVsArr = deepCopy(랜덤명단);

      // for (let n = 0; n < 0; n++) {
      // }
      //들어갈 공간이 있는지 체크
      //자리가득 안찼으면 몸집에 맞게 들어감,
      let 사용량비교변수 = 사용량체크기(랜덤명단, onePick?.이름);
      if (
        onePick?.자리차지비율 + 랜덤명단[m]?.length <= 2 &&
        (사용량비교변수 <= 최대사용횟수 || 사용량비교변수 === undefined)
        // (onePick.사용횟수 <= 최대사용횟수 || onePick.사용횟수 === 0)
      ) {
        //기술팀 개발팀 1대1 매칭 로직
        //내가 기술팀이면서, 기술팀이 있는지 파악
        if (onePick.part === "기술팀") {
          if (랜덤명단[m]?.[0]?.part === "기술팀") {
            fakeonePick = deepCopy(onePick);
            m++;
            continue;
          } else {
            // if (onePick.사용횟수 !== undefined)
            //   onePick.사용횟수 = onePick.사용횟수 + 1;
            // else onePick.사용횟수 = 1;

            랜덤명단[m].push(onePick);
            m = 0;
            continue;
          }
        } else if (onePick.part === "개발팀") {
          // if (onePick.사용횟수 !== undefined)
          //   onePick.사용횟수 = onePick.사용횟수 + 1;
          // else onePick.사용횟수 = 1;
          랜덤명단[m].push(onePick);
          m = 0;
          continue;
        } else if (onePick.part === "고정팀") {
          // if (onePick.사용횟수 !== undefined)
          //   onePick.사용횟수 = onePick.사용횟수 + 1;
          // else onePick.사용횟수 = 1;
          랜덤명단[m].push({
            이름: onePick.이름.split(",")[0],
            part: "고정팀",
          });
          랜덤명단[m].push({
            이름: onePick.이름.split(",")[1],
            part: "고정팀",
          });
          // m++;
          m = 0;
          continue;
        }

        // if (omPickPart === "기술팀" && 랜덤명단[m]?.[0]?.part === "기술팀") {
        //   // m++;
        //   // continue;
        // } else {
        //   랜덤명단[m].push(onePick);

        //   // continue;
        //   m = 0;
        // }
        //몸집이 2인 경우 푸쉬와 1인겨우 푸쉬를 나눠줘야함
        //이 사람이 몇번 뽑혔는지에 대한 로직
      }
      //푸쉬되지 못함, 다음 카운터로 가야함
      else {
        // if (JSON.stringify(arrVsArr) !== JSON.stringify(랜덤명단)) {

        if (m >= 총주수 * 2) {
          fakeonePick = undefined;
          m = 0;
          continue;
        } else {
          fakeonePick = deepCopy(onePick);
          m++;

          continue;
        }
      }

      m++;
      // if (m >= 총주수) m = 0;
    }
    셋검증(사용량체크기(랜덤명단));
    let arr = Object.values(사용량체크기(랜덤명단));
    셋사람수(arr.length);

    console.log(arr);
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let sum = max - min;
    셋재시작변수(sum);

    let renderData = [];
    // 시작일 추가
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

    //이것들을 모아서, 랜덤뽑기 진행
    //  {이름:후니훈, part:개발팀 , 자리차지비율 : 1}
    //  {이름:후니훈, part:기술팀 , 자리차지비율 : 1}
    //  {이름:[[김수경],[한보라]] part:검증팀 , 자리차지비율 : 2}

    //랜덤으로 뽑은것을 아래 배열로 만들어주기
    // [{ 현재자리: [박경훈], 기술팀: 0, 공석: 1 }, {}, {}, {}, {}];
    //사용횟수를 찍어주는 배열을 따로 만들것
    console.log(랜덤명단);
    setdata(renderData);
  }

  useEffect(() => {
    if (재시작변수 > 1) {
      alert(
        "최소당번횟수와 최대당번횟수차이가 2회이상 발생하여, 재시작하세요."
      );
      셋재시작변수("");
      start();
    } else if (재시작변수 === 1 || 재시작변수 === 0) {
      alert("완료");
    }
  }, [재시작변수]);

  return (
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
          <div>{moment(value).format("YYYY년 MM월 DD일 HH시 mm분 ss초")}</div>
        </div>

        <div>
          <div>종료일</div>
          <Calendar2 onChange={setValue2} value={value2} />
          <div>{moment(value2).format("YYYY년 MM월 DD일 HH시 mm분 ss초")}</div>
        </div>
      </div>

      <div>{`총 기간= ${Math.round(총주수)}  주 `}</div>
      <div>
        <div>
          고정팀
          <textarea onChange={(e) => team1Split(e.target.value)}></textarea>
        </div>
        <div>
          기술팀
          <textarea onChange={(e) => team2Split(e.target.value)}></textarea>
        </div>
        <div>
          개발팀
          <textarea onChange={(e) => team3Split(e.target.value)}></textarea>
        </div>
      </div>
      <button onClick={() => start()}>시작버튼</button>

      <div
        style={{
          textAlign: "center",
        }}
      >
        테이블
      </div>
      <div>뽑힌 횟수 정리:</div>
      <div>
        {검증 &&
          JSON.stringify(검증)
            .slice(1, JSON.stringify(검증).length - 1)
            .replace(/['"]+/g, "  ")}
      </div>
      <div>뽑힌 사람 수 : {사람수}</div>
      <div>편차값 : {재시작변수}</div>
      <Table columns={columns} data={data} />
    </>
  );
}
