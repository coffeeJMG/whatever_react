import App from "../App";
import render from "../utils/render";

// 전역 상태 관리를 위한 변수들
let states = new Map();
let stateIndex = 0;
let updateQueue = [];
let isUpdating = false;

// 사용자 정의 useState 훅
const useState = (initState) => {
    // 현재 컴포넌트의 고유 상태 인덱스 생성
    const currentIndex = stateIndex++;
    const key = `${currentIndex}`;

    // 초기 상태 설정 (아직 없는 경우)
    if (!states.has(key)) {
        states.set(key, initState);
    }

    // 현재 상태 가져오기
    const state = states.get(key);

    // 상태 변경 함수
    const setState = (newState) => {
        // 상태 업데이트 대기열에 추가
        updateQueue.push({
            key,
            newState,
            type: typeof newState === 'function' ? 'function' : 'direct'
        });

        // 상태 업데이트 프로세스 시작
        scheduleUpdate();
    };

    return [state, setState];
};

// 상태 업데이트 예약 함수
const scheduleUpdate = () => {
    // 이미 업데이트 중이면 추가 스케줄링 방지
    if (isUpdating) return;

    // 마이크로태스크 큐를 사용하여 비동기 업데이트
    Promise.resolve().then(() => {
        processUpdates();
    });
};

// 대기 중인 상태 업데이트 처리 함수
const processUpdates = () => {
    // 이미 업데이트 중이면 중복 처리 방지
    if (isUpdating) return;

    // 업데이트 상태로 변경
    isUpdating = true;

    try {
        // 대기 중인 모든 상태 업데이트 처리
        while (updateQueue.length > 0) {
            const update = updateQueue.shift();
            const currentState = states.get(update.key);

            // 상태 업데이트 (함수 또는 직접 값)
            const newState = update.type === 'function'
                ? update.newState(currentState)
                : update.newState;

            states.set(update.key, newState);
        }

        // 다음 렌더링 주기를 위해 상태 인덱스 초기화
        stateIndex = 0;

        // 루트 엘리먼트 가져오기
        const rootElement = document.getElementById('root');
        const oldChild = rootElement.firstChild;

        // 새로운 앱 컴포넌트 렌더링
        const newChild = render(<App />, document.createElement('div'));

        // 기존 자식 요소 교체 또는 추가
        if (oldChild) {
            rootElement.replaceChild(newChild, oldChild);
        } else {
            rootElement.appendChild(newChild);
        }
    } catch (error) {
        // 상태 업데이트 중 오류 발생 시 콘솔에 기록
        console.error('상태 업데이트 중 오류 발생:', error);
    } finally {
        // 업데이트 상태 초기화
        isUpdating = false;
    }
};

export default useState;