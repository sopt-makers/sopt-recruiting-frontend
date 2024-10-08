const UnsupportedPage = () => {
  return (
    <section>
      <article>
        <p>지원되지 않는 브라우저예요</p>
        <p>지원 안되는 브라우저 목록들</p>
        <ol>
          <li>1. 서비스가 종료된 브라우저</li>
          <li>2. 업데이트된지 2.5년이 지난 브라우저</li>
          <li>3. 전 세계 0.3% 미만의 유저를 보유한 브라우저</li>
        </ol>
        <br />
        <p>업데이트 하러 가기</p>
        <a href="https://www.google.com/chrome/update/" target="_blank" rel="noreferrer noopener">
          Chrome
        </a>
        <a href="https://support.apple.com/en-us/102665" target="_blank" rel="noreferrer noopener">
          Safari
        </a>
        <a
          href="https://support.microsoft.com/en-au/topic/microsoft-edge-update-settings-af8aaca2-1b69-4870-94fe-18822dbb7ef1"
          target="_blank"
          rel="noreferrer noopener">
          Edge
        </a>
        <a
          href="https://support.mozilla.org/en-US/kb/update-firefox-latest-release"
          target="_blank"
          rel="noreferrer noopener">
          Firefox
        </a>
      </article>
      <p>{`문의사항이 있다면\n아래 ‘문의하기’를 이용해 주세요`}</p>
      <a id="chat-channel-button" href="https://pf.kakao.com/_JdTKd" target="_blank" rel="noreferrer noopener">
        문의하기
      </a>
    </section>
  );
};

export default UnsupportedPage;
