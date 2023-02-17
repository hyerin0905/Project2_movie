import { MdChair } from 'react-icons/md';
import '../css/seating2.css';

function Seating2() {
    return (
        <>
            <div className='selectSeating'>
                <h2>좌석 선택</h2>
                <section>
                    <div className='screenBox'>
                        <h3>Screen</h3>
                    </div>
                    <div className='seatingIcon'>
                        <span className='aCol'>A</span>
                        <MdChair style={{ fontSize: "45px", color: '#18122B' }} />
                        <MdChair style={{ fontSize: "45px", color: '#18122B' }} />
                        <MdChair style={{ fontSize: "45px", color: '#18122B' }} />
                        <MdChair style={{ fontSize: "45px", color: '#18122B' }} />
                        <MdChair style={{ fontSize: "45px", color: '#18122B' }} />
                        <br />
                        <span className='bCol'>B</span>
                        <MdChair style={{ fontSize: "45px", color: '#18122B' }} />
                        <MdChair style={{ fontSize: "45px", color: '#18122B' }} />
                        <MdChair style={{ fontSize: "45px", color: '#18122B' }} />
                        <MdChair style={{ fontSize: "45px", color: '#18122B' }} />
                        <MdChair style={{ fontSize: "45px", color: '#18122B' }} />
                    </div>

                </section>
                <button className="selectSeating-btn">확인</button>
            </div>
        </>
    );
}
export default Seating2;