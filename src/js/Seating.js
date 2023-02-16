
// 좌석 선택 페이지
function Seating() {
    return (
        <>
            <title>Movie Seat Booking</title>
            <ul className="showcase">
                <li>
                    <div className="seat"></div>
                    <small>N/A</small>
                </li>
                <li>
                    <div className="seat selected"></div>
                    <small>예매 가능</small>
                </li>
                <li>
                    <div className="seat occupied"></div>
                    <small>예매 불가</small>
                </li>
            </ul>
            <div className="container-seat">
                <div className="screen">screen</div>

                <div className="row">
                    <div className="seat">1</div>
                    <div className="seat">2</div>
                    <div className="seat">3</div>
                    <div className="seat">4</div>
                    <div className="seat">5</div>
                    <div className="seat">6</div>
                    <div className="seat">7</div>
                    <div className="seat">8</div>
                </div>
                <div className="row">
                    <div className="seat">1</div>
                    <div className="seat">2</div>
                    <div className="seat">3</div>
                    <div className="seat">4</div>
                    <div className="seat occupied">5</div>
                    <div className="seat occupied">6</div>
                    <div className="seat">7</div>
                    <div className="seat">8</div>
                </div>
            <p className="text"/>좌석이 <span id="count">0</span> 개 선택되었습니다.
            <br />
            <button id="clearBtn" className="clear">취소</button>
            </div>
            

            <script src="/src/js/script.js"></script>
            </>
        );
}
export default Seating;