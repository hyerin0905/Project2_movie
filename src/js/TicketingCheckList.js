import '../css/style.css';

function TicketingCheckList () {
    return (
        <>
            <div className="confirmation">
                <div className="box1">
                    <h2>예매내역 확인</h2>
                    <div className="box2 cf">
                        <img src="https://via.placeholder.com/334" />
                        <ul>
                            <li>예매 영화: </li>
                            <li>관람 일시: </li>
                            <li>관람 좌석: </li>
                            <li>이름: </li>
                            <li>휴대번호: </li>
                        </ul>
                    </div>
                </div>
                <button className="confirmation-btn">확인</button>
                
                
                


            </div>
        
        </>
    );
}
export default TicketingCheckList;