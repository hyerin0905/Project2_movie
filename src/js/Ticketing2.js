import React, { useState } from 'react';

function Ticketing2 () {
  // 선택된 좌석 상태를 저장하는 state
  const [CheckedSeat, setCheckedSeat] = useState([]);

  // 좌석 선택 이벤트 핸들러
  const handlerCheckedSeat = (seatNumber) => {
    if (handlerCheckedSeat.includes(seatNumber)) {
      setCheckedSeat(handlerCheckedSeat.filter((number) => number !== seatNumber));
    } else {
      setCheckedSeat([...handlerCheckedSeat, seatNumber]);
    }
  };

  // 예매하기 이벤트 핸들러
  const handlerTicketing = () => {
    // 선택된 좌석 정보를 서버에 전송하는 로직 등을 작성할 수 있습니다.
    console.log('선택된 좌석: ', CheckedSeat);
  };

  // 좌석 선택 UI를 만드는 함수
  const render handlerSeatSelect= () => {
    const row = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
    const coloum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
      <div>
        {row.map((row) => (
          <div key={coloum}>
            {coloum.map((coloum) => (
              <button
                key={`${row}${coloum}`}
                onClick={() => handlerCheckedSeat(`${row}${coloum}`)}
                style={{
                  backgroundColor: CheckedSeat.includes(`${row}${coloum}`)
                    ? 'gray'
                    : 'white',
                  width: '50px',
                  height: '50px',
                  margin: '5px',
                  border: '1px solid black',
                  borderRadius: '5px',
                }}
              >
                {`${row}${coloum}`}
              </button>
            ))}
          </div>
        ))}
      </div>
    );
  };

  // 선택된 좌석 정보를 보여주는 UI를 만드는 함수
  const render handlerSeatSelect = () => {
    if (선택된좌석.length === 0) {
      return <div>선택된 좌석이 없습니다.</div>
    }
  };
}

export default Ticketing2;
