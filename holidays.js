/* ============================================================
   공휴일 데이터 (2026 ~ 2028)

   근거
     - 「공휴일에 관한 법률」(법률 제21338호, 2026. 2. 10. 일부개정, 2026. 5. 11. 시행)
       · 노동절(5월 1일)과 제헌절(7월 17일)이 2026년부터 공휴일로 지정됨
       · 노동절·제헌절 모두 대체공휴일 적용 대상
     - 「관공서의 공휴일에 관한 규정」(대통령령 제36290호, 2026. 4. 30. 개정)
     - 한국천문연구원 달력자료(월력요항) 2026 · 2027 · 2028년 — 음력 명절 날짜와 대체공휴일
       https://astro.kasi.re.kr/kor/life/post/calendarData

   분류(kind)
     - regular    : 일반 공휴일. 수업일과 겹치면 제외 대상(운영자가 선택했을 때).
     - substitute : 대체공휴일. 정상 수업에 포함(운영자가 선택했을 때).
     - temporary  : 임시공휴일·선거일. 정상 수업에 포함(운영자가 선택했을 때).

   ⚠ 운영 정책 확인 필요
     - 선거일(2026-06-03 지방선거, 2028-04-12 총선)은 법정 공휴일이지만
       학원 수업은 정상 운영하는 것을 기본값으로 두어 temporary로 분류했다.
       휴강이면 kind를 "regular"로 바꾸면 된다.
     - 정부가 수시로 지정하는 임시공휴일은 미리 넣을 수 없다.
       지정되면 해당 연도 배열에 temporary로 추가한다.

   ⚠ 대체공휴일 규칙
     - 국경일·노동절·어린이날·부처님오신날·기독탄신일: 토요일 또는 일요일과 겹치면 대체.
     - 설날·추석 연휴: 일요일과 겹칠 때만 대체(토요일은 대체 사유 아님).
     - 1월 1일과 현충일은 대체공휴일 대상이 아니다.

   ⚠ 다음 연도 추가
     - 데이터가 없는 연도는 화면에서 그 달을 막고 [공휴일 없이 계산]을 선택하게 한다.
     - 2029년은 관보에 월력요항이 공고된 뒤(보통 2년 전 6월 말) 이 파일에 추가한다.
   ============================================================ */

const HOLIDAY_DATA = {
  schemaVersion: 1,
  timezone: "Asia/Seoul",
  years: {
    "2026": [
      { date: "2026-01-01", name: "신정", kind: "regular" },
      { date: "2026-02-16", name: "설날 연휴", kind: "regular" },
      { date: "2026-02-17", name: "설날", kind: "regular" },
      { date: "2026-02-18", name: "설날 연휴", kind: "regular" },
      { date: "2026-03-01", name: "삼일절", kind: "regular" },
      { date: "2026-03-02", name: "삼일절 대체공휴일", kind: "substitute" },
      { date: "2026-05-01", name: "노동절", kind: "regular" },
      { date: "2026-05-05", name: "어린이날", kind: "regular" },
      { date: "2026-05-24", name: "부처님오신날", kind: "regular" },
      { date: "2026-05-25", name: "부처님오신날 대체공휴일", kind: "substitute" },
      { date: "2026-06-03", name: "전국동시지방선거", kind: "temporary" },
      { date: "2026-06-06", name: "현충일", kind: "regular" },
      { date: "2026-07-17", name: "제헌절", kind: "regular" },
      { date: "2026-08-15", name: "광복절", kind: "regular" },
      { date: "2026-08-17", name: "광복절 대체공휴일", kind: "substitute" },
      { date: "2026-09-24", name: "추석 연휴", kind: "regular" },
      { date: "2026-09-25", name: "추석", kind: "regular" },
      { date: "2026-09-26", name: "추석 연휴", kind: "regular" },
      { date: "2026-10-03", name: "개천절", kind: "regular" },
      { date: "2026-10-05", name: "개천절 대체공휴일", kind: "substitute" },
      { date: "2026-10-09", name: "한글날", kind: "regular" },
      { date: "2026-12-25", name: "기독탄신일", kind: "regular" }
    ],
    "2027": [
      { date: "2027-01-01", name: "신정", kind: "regular" },
      { date: "2027-02-06", name: "설날 연휴", kind: "regular" },
      { date: "2027-02-07", name: "설날", kind: "regular" },
      { date: "2027-02-08", name: "설날 연휴", kind: "regular" },
      { date: "2027-02-09", name: "설날 대체공휴일", kind: "substitute" },
      { date: "2027-03-01", name: "삼일절", kind: "regular" },
      { date: "2027-05-01", name: "노동절", kind: "regular" },
      { date: "2027-05-03", name: "노동절 대체공휴일", kind: "substitute" },
      { date: "2027-05-05", name: "어린이날", kind: "regular" },
      { date: "2027-05-13", name: "부처님오신날", kind: "regular" },
      { date: "2027-06-06", name: "현충일", kind: "regular" },
      { date: "2027-07-17", name: "제헌절", kind: "regular" },
      { date: "2027-07-19", name: "제헌절 대체공휴일", kind: "substitute" },
      { date: "2027-08-15", name: "광복절", kind: "regular" },
      { date: "2027-08-16", name: "광복절 대체공휴일", kind: "substitute" },
      { date: "2027-09-14", name: "추석 연휴", kind: "regular" },
      { date: "2027-09-15", name: "추석", kind: "regular" },
      { date: "2027-09-16", name: "추석 연휴", kind: "regular" },
      { date: "2027-10-03", name: "개천절", kind: "regular" },
      { date: "2027-10-04", name: "개천절 대체공휴일", kind: "substitute" },
      { date: "2027-10-09", name: "한글날", kind: "regular" },
      { date: "2027-10-11", name: "한글날 대체공휴일", kind: "substitute" },
      { date: "2027-12-25", name: "기독탄신일", kind: "regular" },
      { date: "2027-12-27", name: "기독탄신일 대체공휴일", kind: "substitute" }
    ],
    "2028": [
      { date: "2028-01-01", name: "신정", kind: "regular" },
      { date: "2028-01-26", name: "설날 연휴", kind: "regular" },
      { date: "2028-01-27", name: "설날", kind: "regular" },
      { date: "2028-01-28", name: "설날 연휴", kind: "regular" },
      { date: "2028-03-01", name: "삼일절", kind: "regular" },
      { date: "2028-04-12", name: "국회의원선거", kind: "temporary" },
      { date: "2028-05-01", name: "노동절", kind: "regular" },
      { date: "2028-05-02", name: "부처님오신날", kind: "regular" },
      { date: "2028-05-05", name: "어린이날", kind: "regular" },
      { date: "2028-06-06", name: "현충일", kind: "regular" },
      { date: "2028-07-17", name: "제헌절", kind: "regular" },
      { date: "2028-08-15", name: "광복절", kind: "regular" },
      { date: "2028-10-02", name: "추석 연휴", kind: "regular" },
      { date: "2028-10-03", name: "추석·개천절", kind: "regular" },
      { date: "2028-10-04", name: "추석 연휴", kind: "regular" },
      { date: "2028-10-05", name: "추석·개천절 대체공휴일", kind: "substitute" },
      { date: "2028-10-09", name: "한글날", kind: "regular" },
      { date: "2028-12-25", name: "기독탄신일", kind: "regular" }
    ]
  }
};
