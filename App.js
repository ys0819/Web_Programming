import "./App.css";

function App() {
  const styles = {
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "5px 20px",
      backgroundColor: "#0470a7",
      display: "flex",
    },
    meue: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: 20,
    },
    logoImage: {
      width: 180,
      height: "auto",
    },
    iconImage: {
      width: 24,
      height: 24,
    },
    profileimage: {
      width: 34,
      height: 34,
      backgroundColor: "#e5e5e5",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "50%",
    },
    nickname: {
      fontSize: 14,
      fontWeight: 400,
      color: "#a6c6dc",
    },
    logout: {
      backgroundColor: "#2654a7",
      alignItems: "center",
      justifyContent: "center",
      padding: "8px 12px",
    },
    logouttext: {
      fontSize: 13,
      fontWeight: 400,
      color: "#ffffff",
      margin: 0,
    },
    body: {
      display: "flex",
      flexDirection: "row",
      //padding: 20,
      justifyContent: "space-between",
    },
    footer: {
      // position: "fixed",
      // bottom: 0,
      // left: 0,
      // right: 0,
      backgroundColor: "#f2f2f2",
      padding: 20,
      textAlign: "center",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: "#282929",
    },
    footertext: {
      fontSize: 12,
      fontWeight: 400,
      color: "#9c9c9c",
    },
    navigationcontainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",

      backgroundColor: "#2f3033",
    },
    navigation: {
      flexDirection: "row",
      width: 160,
      height: 40,
      display: "flex",
      alignItems: "center",
      paddingLeft: 15,
      paddingRight: 15,
      borderBottom: "1px solid #252626",
      paddingTop: 10,
      paddingBottom: 10,
    },
    activenavigationheader: {
      flexDirection: "row",
      display: "flex",
      alignItems: "center",
      width: 160,
      height: 40,
      display: "flex",
      alignItems: "center",
      paddingLeft: 15,
      paddingRight: 15,
      paddingTop: 10,
      backgroundColor: "#3d3e42",
    },
    activenavigation: {
      flexDirection: "column",
      width: 160,
      height: 140,
      display: "flex",
      alignItems: "center",
      borderBottom: "1px solid #252626",
      paddingTop: 10,
      paddingBottom: 10,
      backgroundColor: "#3d3e42",
      paddingLeft: 15,
      paddingRight: 15,
    },
    mapactivenavigation: {
      flexDirection: "column",
      width: 160,
      height: 300,
      display: "flex",
      alignItems: "center",
      borderBottom: "1px solid #252626",
      paddingTop: 10,
      paddingBottom: 10,
      backgroundColor: "#3d3e42",
      paddingLeft: 15,
      paddingRight: 15,
    },
    navigationicon: {
      width: 20,
      height: 20,
      marginRight: 10,
    },
    activetext: {
      fontSize: 14,
      fontWeight: 400,
      color: "#EBECEC",
    },
    inactivetext: {
      fontSize: 14,
      fontWeight: 400,
      color: "#999999",
    },
    moreicon: {
      width: 10,
      height: 10,
      marginLeft: "auto",
    },
    content: {
      paddingTop: 20,
      paddingLeft: 40,
      paddingRight: 40,
      backgroundColor: "#f7f9fa",
      width: "100%",
    },
    courselist: {
      backgroundColor: "#ffffff",
    },
    titlecontainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "left",
      alignItems: "center",
      justifyContent: "space-between",
    },
    titleleft: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      margin: 0,
    },
    title: {
      fontSize: 24,
      fontWeight: 700,
      color: "#0470a7",
    },
    titlemesage: {
      fontSize: 16,
      fontWeight: 700,
      color: "#9a9897",
    },
    polygon: {
      width: 10,
      height: 6,
      paddingLeft: 10,
      paddingRight: 10,
    },
    course: {
      backgroundColor: "#ffffff",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 20,
      paddingBottom: 20,
      border: "1px solid #dcdcdc",
    },
    proficon: {
      width: 40,
      height: 40,
    },
    profimage: {
      width: 50,
      height: 50,
      backgroundColor: "#e5e5e5",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "50%",
      marginRight: 20,
    },
    mooccontainer: {
      alignItems: "center",
      marginRight: 10,
      justifyContent: "center",
    },
    coursename: {
      fontSize: 18,
      fontWeight: 700,
      margin: 0,
      paddingBottom: 5,
    },
    courseprof: {
      fontSize: 14,
      fontWeight: 400,
      color: "#999999",
      margin: 0,
    },
    mooctext: {
      margin: 0,
      backgroundColor: "#94ba42",
      color: "#ffffff",
      paddingTop: 5,
      paddingBottom: 5,
      textAlign: "center",
      paddingLeft: 10,
      paddingRight: 10,
      fontWeight: 700,
      fontSize: 14,
    },
    mooctext0: {
      margin: 0,
      color: "#ffffff",
      paddingTop: 5,
      paddingBottom: 5,
      paddingLeft: 10,
      paddingRight: 10,
      fontWeight: 700,
      fontSize: 14,
    },
    typetext: {
      margin: 0,
      backgroundColor: "#4aadb4",
      color: "#ffffff",
      paddingTop: 5,
      paddingBottom: 5,
      textAlign: "center",
      paddingLeft: 10,
      paddingRight: 10,
      fontWeight: 700,
      fontSize: 14,
    },
    locationtext: {
      margin: 0,
      color: "#4aadb4",
      paddingTop: 5,
      paddingBottom: 5,
      textAlign: "center",
      paddingLeft: 10,
      paddingRight: 10,
      fontWeight: 700,
      fontSize: 14,
      border: "1px solid #4aadb4",
    },
    setting: {
      padding: 8,
      backgroundColor: "#ffffff",
      border: "1px solid #dcdcdc",
      width: 15,
      height: 15,
    },
    alerttitlecontainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      // backgroundColor: "black",
      alignItems: "center",
      marginBottom: 40,
    },
    alerttitle: {
      fontSize: 16,
      fontWeight: 700,
      color: "#0470a7",
      margin: 0,
    },
    alertcontainer: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#f7f9fa",
      width: 500,
      borderLeft: "1px solid #d9dbdb",
    },
    closeicon: {
      width: 12,
      height: 2,
    },
    alert: {
      backgroundColor: "#ffffff",
      padding: "20px 20px 0px 20px",
      borderBottom: "1px solid #d9dbdb",
      flexDirection: "column",
    },
    activenatext: {
      margin: 0,
      fontSize: 13,
      fontWeight: 400,
      backgroundColor: "#0470a7",
      paddingTop: 8,
      paddingBottom: 8,
      //textAlign: "center",
      paddingLeft: 100,
      paddingRight: 15,
      width: "100%",
      color: "#ffffff",
    },
    inactivenatext: {
      margin: 0,
      fontSize: 12,
      fontWeight: 400,
      color: "#b2b2b2",
      paddingTop: 8,
      paddingBottom: 8,
      //textAlign: "center",
      paddingLeft: 100,
      paddingRight: 15,
      width: "100%",
    },
    alerttext1: {
      color: "#464646",
      alignItems: "center",
      fontSize: 15,
      margin: 0,
      paddingBottom: 5,
    },
    alerttext2: {
      color: "#8e8e8e",
      alignItems: "center",
      fontSize: 12,
      margin: 0,
    },
    more: {
      margin: 0,
      padding: "7px 30px",
      color: "#545454",
      fontSize: 12,
      textAlign: "center",
    },
    morecontainer: {
      backgroundColor: "#edeef0",
      border: "1px solid #c6c7c9",
      marginTop: 30,
    },
    alertcontent: {
      display: "flex",
      flexDirection: "row",
      paddingBottom: 20,
      position: "relative",
    },
  };

  return (
    <div>
      <div style={styles.header}>
        <img
          src="https://i.ibb.co/LDY6X1jd/2025-04-23-1-31-18.png"
          alt="2025-04-23-1-31-18"
          style={styles.logoImage}
        />
        <div style={styles.meue}>
          <p style={styles.nickname}>박연서</p>
          <div style={styles.profileimage}>
            <img
              src="https://i.ibb.co/gxt9kzj/Frame-61.png"
              alt="Frame-61"
              border="0"
              style={styles.iconImage}
            />
          </div>
          <img
            src="https://i.ibb.co/YTJpd6Tv/position-bottom-left-outline-sharp.png"
            alt="position-bottom-left-outline-sharp"
            border="0"
            style={styles.iconImage}
          />
          <img
            src="https://i.ibb.co/BHNnnzkJ/Vector.png"
            alt="Vector"
            border="0"
            style={styles.iconImage}
          />
          <img
            src="https://i.ibb.co/BH8zBBL2/Vector-2.png"
            alt="Vector-2"
            border="0"
            style={styles.iconImage}
          />
          <img
            src="https://i.ibb.co/TMPPFgBX/Vector-1.png"
            alt="Vector-1"
            border="0"
            style={styles.iconImage}
          />
          <div style={styles.logout}>
            <p style={styles.logouttext}>로그아웃</p>
          </div>
        </div>
      </div>
      <div style={styles.body}>
        <div style={styles.navigationcontainer}>
          <div style={styles.activenavigationheader}>
            <img
              src="https://i.ibb.co/rK2JvsTS/Vector-3.png"
              alt="Vector-3"
              border="0"
              style={styles.navigationicon}
            />
            <p style={styles.activetext}>My Page</p>
            <img
              src="https://i.ibb.co/5XDyrW2t/fi-sr-angle-left.png"
              alt="fi-sr-angle-left"
              border="0"
              style={styles.moreicon}
            />
          </div>
          <div style={styles.activenavigation}>
            <p style={styles.activenatext}>Dashboard</p>
            <p style={styles.inactivenatext}>파일 관리</p>
            <p style={styles.inactivenatext}>진행강좌 공지</p>
            <p style={styles.inactivenatext}>개인정보 수정</p>
          </div>

          <div style={styles.navigation}>
            <img
              src="https://i.ibb.co/jvJNG1qt/Vector-4.png"
              alt="Vector-4"
              border="0"
              style={styles.navigationicon}
            />
            <p style={styles.inactivetext}>정규 과정</p>
            <img
              src="https://i.ibb.co/QFBHXjbj/fi-sr-angle-left-1.png"
              alt="fi-sr-angle-left-1"
              border="0"
              style={styles.moreicon}
            />
          </div>
          <div style={styles.navigation}>
            <img
              src="https://i.ibb.co/WpY9WgRB/Vector-5.png"
              alt="Vector-5"
              border="0"
              style={styles.navigationicon}
            />
            <p style={styles.inactivetext}>온라인 수료과정</p>
            <img
              src="https://i.ibb.co/QFBHXjbj/fi-sr-angle-left-1.png"
              alt="fi-sr-angle-left-1"
              border="0"
              style={styles.moreicon}
            />
          </div>
          <div style={styles.navigation}>
            <img
              src="https://i.ibb.co/WNhLkfkc/Vector-6.png"
              alt="Vector-6"
              border="0"
              style={styles.navigationicon}
            />
            <p style={styles.inactivetext}>비정규 과정</p>
          </div>
          <div style={styles.navigation}>
            <img
              src="https://i.ibb.co/WNhLkfkc/Vector-6.png"
              alt="Vector-6"
              border="0"
              style={styles.navigationicon}
            />
            <p style={styles.inactivetext}>교수-학습 자료</p>
            <img
              src="https://i.ibb.co/QFBHXjbj/fi-sr-angle-left-1.png"
              alt="fi-sr-angle-left-1"
              border="0"
              style={styles.moreicon}
            />
          </div>
          <div style={styles.navigation}>
            <img
              src="https://i.ibb.co/cRjccjp/Vector-7.png"
              alt="Vector-7"
              border="0"
              style={styles.navigationicon}
            />
            <p style={styles.inactivetext}>Tips</p>
            <img
              src="https://i.ibb.co/QFBHXjbj/fi-sr-angle-left-1.png"
              alt="fi-sr-angle-left-1"
              border="0"
              style={styles.moreicon}
            />
          </div>
          <div style={styles.navigation}>
            <img
              src="https://i.ibb.co/TMfncm86/Vector-8.png"
              alt="Vector-8"
              border="0"
              style={styles.navigationicon}
            />
            <p style={styles.inactivetext}>매뉴얼</p>
          </div>
          <div style={styles.activenavigationheader}>
            <img
              src="https://i.ibb.co/v41bPRZW/Vector-9.png"
              alt="Vector-9"
              border="0"
              style={styles.navigationicon}
            />
            <p style={styles.activetext}>이용 안내</p>
            <img
              src="https://i.ibb.co/5XDyrW2t/fi-sr-angle-left.png"
              alt="fi-sr-angle-left"
              border="0"
              style={styles.moreicon}
            />
          </div>
          <div style={styles.mapactivenavigation}>
            <p style={styles.inactivenatext}>공지사항</p>
            <p style={styles.inactivenatext}>FAQ</p>
            <p style={styles.inactivenatext}>Q&A</p>
            <p style={styles.inactivenatext}>Webex 자료실</p>
            <div
              style={{
                margin: 10,
                padding: 10,
                backgroundColor: "#53555c",
                width: 150,
              }}
            >
              <p
                style={{
                  margin: 0,
                  color: "white",
                  fontSize: 15,
                  paddingBottom: 10,
                }}
              >
                문의 안내
              </p>
              <p style={{ margin: 0, color: "white", fontSize: 13 }}>
                사이버캠퍼스
              </p>
              <p
                style={{
                  margin: 0,
                  color: "white",
                  fontSize: 13,
                  paddingBottom: 20,
                }}
              >
                031-750-6959, 5755
              </p>
              <p style={{ margin: 0, color: "white", fontSize: 13 }}>
                Webex 지원
              </p>
              <p
                style={{
                  margin: 0,
                  color: "white",
                  fontSize: 13,
                  paddingBottom: 20,
                }}
              >
                031-750-5755
              </p>
            </div>
          </div>
        </div>
        <div style={styles.content}>
          <div style={styles.titlecontainer}>
            <p style={styles.titleleft}>
              <p style={styles.title}>강좌 전체 보기</p>
              <img
                src="https://i.ibb.co/Vcm4XdhS/Polygon-1.png"
                alt="Polygon-1"
                border="0"
                style={styles.polygon}
              />
              <p style={styles.titlemesage}>
                화살표를 누르면 지난 학기 강좌 등을 볼 수 있습니다.
              </p>
            </p>
            <img
              src="https://i.ibb.co/4wpKKPNT/fi-sr-settings.png"
              alt="fi-sr-settings"
              border="0"
              style={styles.setting}
            />
          </div>
          <div style={styles.courselist}>
            <div style={styles.course}>
              <div style={styles.profimage}>
                <img
                  src="https://i.ibb.co/gxt9kzj/Frame-61.png"
                  alt="Frame-61"
                  border="0"
                  style={styles.proficon}
                />
              </div>
              <div style={styles.mooccontainer}>
                <p style={styles.mooctext}>MOOC</p>
                <p style={styles.mooctext0}>Mooc</p>
              </div>
              <div style={styles.courseinfo}>
                <p style={styles.coursename}>
                  2025핫년도 재학생(신입생 제외) 폭력예방교육(글로벌 캠퍼스)
                </p>
                <p style={styles.courseprof}>이윤우</p>
              </div>
            </div>
            <div style={styles.course}>
              <div style={styles.profimage}>
                <img
                  src="https://i.ibb.co/gxt9kzj/Frame-61.png"
                  alt="Frame-61"
                  border="0"
                  style={styles.proficon}
                />
              </div>
              <div style={styles.mooccontainer}>
                <p style={styles.typetext}>교과</p>
                <p style={styles.locationtext}>글로벌</p>
              </div>
              <div style={styles.courseinfo}>
                <p style={styles.coursename}>인공지능개론 (13119_004)</p>
                <p style={styles.courseprof}>이명규</p>
              </div>
            </div>

            <div style={styles.course}>
              <div style={styles.profimage}>
                <img
                  src="https://i.ibb.co/gxt9kzj/Frame-61.png"
                  alt="Frame-61"
                  border="0"
                  style={styles.proficon}
                />
              </div>
              <div style={styles.mooccontainer}>
                <p style={styles.typetext}>교과</p>
                <p style={styles.locationtext}>글로벌</p>
              </div>
              <div style={styles.courseinfo}>
                <p style={styles.coursename}>영상처리 (13970_001)</p>
                <p style={styles.courseprof}>박정인</p>
              </div>
            </div>

            <div style={styles.course}>
              <div style={styles.profimage}>
                <img
                  src="https://i.ibb.co/gxt9kzj/Frame-61.png"
                  alt="Frame-61"
                  border="0"
                  style={styles.proficon}
                />
              </div>
              <div style={styles.mooccontainer}>
                <p style={styles.typetext}>교과</p>
                <p style={styles.locationtext}>글로벌</p>
              </div>
              <div style={styles.courseinfo}>
                <p style={styles.coursename}>종합프로젝트 (13974_004)</p>
                <p style={styles.courseprof}>이병문</p>
              </div>
            </div>

            <div style={styles.course}>
              <div style={styles.profimage}>
                <img
                  src="https://i.ibb.co/gxt9kzj/Frame-61.png"
                  alt="Frame-61"
                  border="0"
                  style={styles.proficon}
                />
              </div>
              <div style={styles.mooccontainer}>
                <p style={styles.typetext}>교과</p>
                <p style={styles.locationtext}>글로벌</p>
              </div>
              <div style={styles.courseinfo}>
                <p style={styles.coursename}>자연어처리및응용 (13975_001)</p>
                <p style={styles.courseprof}>이상홍</p>
              </div>
            </div>

            <div style={styles.course}>
              <div style={styles.profimage}>
                <img
                  src="https://i.ibb.co/gxt9kzj/Frame-61.png"
                  alt="Frame-61"
                  border="0"
                  style={styles.proficon}
                />
              </div>
              <div style={styles.mooccontainer}>
                <p style={styles.typetext}>교과</p>
                <p style={styles.locationtext}>글로벌</p>
              </div>
              <div style={styles.courseinfo}>
                <p style={styles.coursename}>웹프로그래밍 (14207_008)</p>
                <p style={styles.courseprof}>황희정</p>
              </div>
            </div>

            <div style={styles.course}>
              <div style={styles.profimage}>
                <img
                  src="https://i.ibb.co/gxt9kzj/Frame-61.png"
                  alt="Frame-61"
                  border="0"
                  style={styles.proficon}
                />
              </div>
              <div style={styles.mooccontainer}>
                <p style={styles.typetext}>교과</p>
                <p style={styles.locationtext}>글로벌</p>
              </div>
              <div style={styles.courseinfo}>
                <p style={styles.coursename}>역사와 상상력 (14628_001)</p>
                <p style={styles.courseprof}>장인모</p>
              </div>
            </div>
          </div>
          <div
            style={{
              //display: "flex",
              width: "100%",
              marginBottom: 80,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid #d3d5d4",
              }}
            >
              <div
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 30,
                  marginTop: 30,
                }}
              >
                <span
                  style={{
                    color: "#0470a7",
                    fontSize: 25,
                    fontWeight: 700,
                  }}
                >
                  공지사항
                </span>
                <span
                  style={{
                    color: "#d3d5d4",
                    fontSize: 20,
                    fontWeight: 100,
                    padding: 10,
                  }}
                >
                  {" "}
                  |{" "}
                </span>
                <span
                  style={{ color: "#b3b3b3", fontSize: 25, fontWeight: 700 }}
                >
                  진행 강좌 공지
                </span>
              </div>
              <span
                style={{
                  fontSize: 12,
                  padding: "5px 10px",
                  backgroundColor: "#ffffff",
                  border: "1px solid #dcdcdc",
                  color: "#494949",
                }}
              >
                더보기
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                boxSizing: "border-box",
                paddingLeft: 20,
                paddingRight: 20,
                marginTop: 30,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#dc5648",
                    width: 3,
                    height: 3,
                    marginRight: 20,
                  }}
                />
                <span style={{ fontWeight: 700, fontSize: 15 }}>
                  [교수자 매뉴얼] 2025-1 중간고사 대비 퀴즈 매뉴얼 및 FAQ
                </span>
              </div>
              <span style={{ color: "#999999", fontSize: 13 }}>
                2025-04-04 09:10
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                boxSizing: "border-box",
                paddingLeft: 20,
                paddingRight: 20,
                marginTop: 30,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#dc5648",
                    width: 3,
                    height: 3,
                    marginRight: 20,
                  }}
                />
                <span style={{ fontWeight: 700, fontSize: 15 }}>
                  [학생용] 동영상 시청 중 끊김 관련 안내
                </span>
              </div>
              <span style={{ color: "#999999", fontSize: 13 }}>
                2025-03-18 09:25
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                boxSizing: "border-box",
                paddingLeft: 20,
                paddingRight: 20,
                marginTop: 30,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#dc5648",
                    width: 3,
                    height: 3,
                    marginRight: 20,
                  }}
                />
                <span style={{ fontWeight: 700, fontSize: 15 }}>
                  [학생용] 실시간 화상강의_이메일 변경에 따른 출결영향 안내
                </span>
              </div>
              <span style={{ color: "#999999", fontSize: 13 }}>
                2025-03-11 13:37
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                boxSizing: "border-box",
                paddingLeft: 20,
                paddingRight: 20,
                marginTop: 30,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#dc5648",
                    width: 3,
                    height: 3,
                    marginRight: 20,
                  }}
                />
                <span style={{ fontWeight: 700, fontSize: 15 }}>
                  [학생용] 실시간 화상강의 유의사항(국문・ENG・中文 통합)
                </span>
              </div>
              <span style={{ color: "#999999", fontSize: 13 }}>
                2025-03-04 14:09
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                boxSizing: "border-box",
                paddingLeft: 20,
                paddingRight: 20,
                marginTop: 30,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#dc5648",
                    width: 3,
                    height: 3,
                    marginRight: 20,
                  }}
                />
                <span style={{ fontWeight: 700, fontSize: 15 }}>
                  [예비대학 참여자] 사이버캠퍼스 계정 변경 안내
                </span>
              </div>
              <span style={{ color: "#999999", fontSize: 13 }}>
                2025-02-24 09:54
              </span>
            </div>
          </div>
        </div>
        <div style={styles.alertcontainer}>
          <div style={styles.alert}>
            <div style={styles.alerttitlecontainer}>
              <p style={styles.alerttitle}>중요 공지</p>
              <img
                src="https://i.ibb.co/RpHKk2Zr/Line-37.png"
                alt="Line-37"
                border="0"
                style={styles.closeicon}
              />
            </div>
            <div style={styles.alertcontent}>
              <div
                style={{
                  position: "absolute",
                  left: 20, // 바깥쪽 padding 기준으로 맞춰줌
                  top: 20,
                  bottom: 0,
                  width: 1,
                  backgroundColor: "#e8e8e8",
                  zIndex: 0,
                }}
              />
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  backgroundColor: "#f7f9fa",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 10,
                  zIndex: 1,
                }}
              >
                <img
                  src="https://i.ibb.co/W4PMwsfV/Vector-10.png"
                  alt="Vector-10"
                  border="0"
                  style={{
                    width: 15,
                    height: 20,
                    objectFit: "cover",
                  }}
                />
              </div>
              <div style={styles.alerttext}>
                <p style={styles.alerttext1}>
                  [교수자 메뉴얼] 2025-1 중간고・・・
                </p>
                <p style={styles.alerttext2}>
                  <img
                    src="https://i.ibb.co/5WxmgXJF/Vector-11.png"
                    alt="Vector-11"
                    border="0"
                    style={{ width: 13, height: 13, marginRight: 5 }}
                  />
                  2025-04-04 09:10
                </p>
              </div>
            </div>
            <div style={styles.alertcontent}>
              <div
                style={{
                  position: "absolute",
                  left: 20, // 바깥쪽 padding 기준으로 맞춰줌
                  top: 0,
                  bottom: 0,
                  width: 1,
                  backgroundColor: "#e8e8e8",
                  zIndex: 0,
                }}
              />
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  backgroundColor: "#f7f9fa",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 10,
                  zIndex: 1,
                }}
              >
                <img
                  src="https://i.ibb.co/W4PMwsfV/Vector-10.png"
                  alt="Vector-10"
                  border="0"
                  style={{
                    width: 15,
                    height: 20,
                    objectFit: "cover",
                  }}
                />
              </div>
              <div style={styles.alerttext}>
                <p style={styles.alerttext1}>
                  [학생용] 동영상 시청 중 끊김 관・・・
                </p>
                <p style={styles.alerttext2}>
                  <img
                    src="https://i.ibb.co/5WxmgXJF/Vector-11.png"
                    alt="Vector-11"
                    border="0"
                    style={{ width: 13, height: 13, marginRight: 5 }}
                  />
                  2025-03-18 09:25
                </p>
                <div style={styles.morecontainer}>
                  <p style={styles.more}>더 보기</p>
                </div>
              </div>
            </div>
          </div>
          <div style={styles.alert}>
            <div style={styles.alerttitlecontainer}>
              <p style={styles.alerttitle}>예정된 할일<span style={{fontWeight: 400, fontSize: 14, marginLeft: 5,}}>(4월29일 ~ 5월13일)</span></p>
              <img
                src="https://i.ibb.co/RpHKk2Zr/Line-37.png"
                alt="Line-37"
                border="0"
                style={styles.closeicon}
              />
            </div>
            
            <div style={styles.alertcontent}>
              <div
                style={{
                  position: "absolute",
                  left: 20,
                  top: 0,
                  bottom: 0,
                  width: 1,
                  backgroundColor: "#e8e8e8",
                  zIndex: 0,
                }}
              />
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  backgroundColor: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 10,
                  zIndex: 1,
                  border: "1px solid #c1c1c1",
                }}
              > 
                <img src="https://i.ibb.co/1Vbrv1B/Polygon-1-1.png" alt="Polygon-1-1" border="0" style={{
                    width: 15,
                    height: 20,
                    objectFit: "cover",
                  }}/>
              </div>
              <div style={styles.alerttext}>
                <p style={styles.alerttext1}>
                  8. 클로징_국문
                </p>
                <p style={styles.alerttext2}>
                  <img
                    src="https://i.ibb.co/5WxmgXJF/Vector-11.png"
                    alt="Vector-11"
                    border="0"
                    style={{ width: 13, height: 13, marginRight: 5 }}
                  />
                  2025-04-01 00:00 ~ 2025-12-31
                </p>
                <div style={styles.morecontainer}>
                  <p style={styles.more}>27 일정 더 보기</p>
                </div>
              </div>
            </div>
          </div>
          <div style={styles.alert}>
            <div style={styles.alerttitlecontainer}>
              <p style={styles.alerttitle}>전체 알림</p>
              <img
                src="https://i.ibb.co/RpHKk2Zr/Line-37.png"
                alt="Line-37"
                border="0"
                style={styles.closeicon}
              />
            </div>
            <div style={{flexDirection: "column"}}>
              <span style={{ display: "block", fontSize: 15, paddingLeft: 20, marginBottom: 30}}>신규 알림 내용이 없습니다.</span>
              <span style={{ display: "inline-block", color: '#323232', border: "1px solid #bfbfbf", fontSize: 13, borderRadius: 3, padding: 1, marginBottom: 20}}>모두 보기</span>
            </div>
            
            
          </div>
        </div>
      </div>
      <div style={styles.footer}>
        <p style={styles.footertext}>개인정보처리방침</p>
        <p style={styles.footertext}>
          13120 경기도 성남시 수정구 성남대로 1342 원격교육운영지원센터 Tel :
          031-750-6956, 5755
        </p>
      </div>
    </div>
  );
}

export default App;
