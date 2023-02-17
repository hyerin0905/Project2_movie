import '../css/ticketing_2.css';

function TicketingCheckList() {
    return (
        <>
            <div className="confirmation">
                <div className="box1 ">
                    <div className='box1-1'>
                        <h2>예매내역 확인</h2>
                        <div className="box2 cf">
                            <img src="https://via.placeholder.com/334" />
                            <ul>
                                <li>예매 영화:  </li>
                                <br />
                                <li>관람 일시: </li>
                                <br />
                                <li>관람 좌석: </li>
                                <br />
                                <hr style={{width:500}}/>
                                <br />
                                <li>이름: </li>
                                <br />
                                <li>휴대번호: </li>
                            </ul>
                        </div>
                        <button className="confirmation-btn">확인</button>
                    </div>
                </div>






            </div>

        </>
    );
}
export default TicketingCheckList;