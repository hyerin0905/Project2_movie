import Seating from './Seating';
import '../css/bootstrap2.css';

// 예매 페이지
function Ticketing() {
    return (
        <>
        <title>Movie</title>
            <div className="ticketing">
                <div className="container">
                    <h2>예매</h2>
                    <div className="btn-group">
                        <button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            영화를 선택하세요.
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#"></a></li>
                            <li><a className="dropdown-item" href="#"></a></li>
                            <li><a className="dropdown-item" href="#"></a></li>
                            <li><a className="dropdown-item" href="#"></a></li>
                            <li><a className="dropdown-item" href="#"></a></li>
                            <li><a className="dropdown-item" href="#"></a></li>
                            <li><a className="dropdown-item" href="#"></a></li>
                            <li><a className="dropdown-item" href="#"></a></li>
                            <li><a className="dropdown-item" href="#"></a></li>
                            <li><a className="dropdown-item" href="#"></a></li>
                            <li><a className="dropdown-item" href="#"></a></li>
                            <li><a className="dropdown-item" href="#"></a></li>
                            <li><a className="dropdown-item" href="#"></a></li>
                            <li><a className="dropdown-item" href="#"></a></li>
                        </ul>
                    </div>
                    <br></br>
                    <div className="btn-group">
                        <button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            날짜 및 시간을 선택하세요.
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#"></a></li>
                            <li><a className="dropdown-item" href="#"></a></li>
                            <li><a className="dropdown-item" href="#"></a></li>
                            <li><a className="dropdown-item" href="#"></a></li>
                            <li><a className="dropdown-item" href="#"></a></li>
                            <li><a className="dropdown-item" href="#"></a></li>
                            <li><a className="dropdown-item" href="#"></a></li>
                            <li><a className="dropdown-item" href="#"></a></li>
                            <li><a className="dropdown-item" href="#"></a></li>
                            <li><a className="dropdown-item" href="#"></a></li>
                            <li><a className="dropdown-item" href="#"></a></li>
                            <li><a className="dropdown-item" href="#"></a></li>
                            <li><a className="dropdown-item" href="#"></a></li>
                            <li><a className="dropdown-item" href="#"></a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div>
            <Seating />
            </div>

        </>
    );
}
export default Ticketing;


//     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.0/font/bootstrap-icons.css">
//     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css">
