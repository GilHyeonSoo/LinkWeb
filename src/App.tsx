import { ExternalLink, Sparkles, Compass, Zap, Globe, Palette } from 'lucide-react';

function App() {
  // 여기에 원하는 URL을 설정하세요
  const targetURL = 'https://openlink.world/';

  const handleNavigate = () => {
    window.open(targetURL, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white overflow-hidden">
      {/* 배경 효과 */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-600/20 via-transparent to-transparent pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-pink-600/20 via-transparent to-transparent pointer-events-none" />
      
      {/* 헤더 */}
      <header className="relative bg-black/40 backdrop-blur-xl border-b border-purple-500/30 sticky top-0 z-50 shadow-2xl shadow-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/50 animate-pulse flex-shrink-0">
              <Compass className="w-6 h-6 sm:w-7 sm:h-7 text-white" strokeWidth={2.5} />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-purple-300 via-pink-300 to-purple-400 bg-clip-text text-transparent tracking-tight">
                링크모아
              </h1>
            </div>
          </div>
        </div>
      </header>

      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        {/* 메인 타이틀 섹션 */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 space-y-6 sm:space-y-8">
          <div className="inline-block">
            <div className="flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 animate-pulse flex-shrink-0" />
              <span className="text-[10px] sm:text-sm font-bold text-purple-300 tracking-wider uppercase">
                Visual Navigation
              </span>
            </div>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-4 sm:mb-6 px-2">
            <span className="bg-gradient-to-r from-purple-200 via-pink-200 to-purple-300 bg-clip-text text-transparent">
              당신의 탐험이<br />예술이 되는 곳
            </span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light px-4">
            OpenLink. 디지털 혼돈 속 명확한 질서를 부여하고,<br className="hidden sm:inline" />
            가장 직관적이고 심미적인 길잡이가 되겠습니다.
          </p>
        </div>

        {/* CTA 버튼 */}
        <div className="flex justify-center mb-16 sm:mb-20 md:mb-24 px-4">
          <button
            onClick={handleNavigate}
            className="group relative bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 hover:from-purple-500 hover:via-pink-500 hover:to-purple-600 text-white px-8 sm:px-12 py-4 sm:py-6 rounded-xl sm:rounded-2xl font-bold text-lg sm:text-xl shadow-2xl shadow-purple-500/50 hover:shadow-pink-500/50 transition-all duration-500 flex items-center gap-3 sm:gap-4 hover:scale-105 border-2 border-purple-400/50 w-full sm:w-auto justify-center"
          >
            <ExternalLink className="w-6 h-6 sm:w-7 sm:h-7 group-hover:rotate-12 transition-transform duration-300 flex-shrink-0" />
            <span className="whitespace-nowrap">링크 바로가기</span>
            <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl" />
          </button>
        </div>

        {/* 서론 섹션 */}
        <section className="mb-12 sm:mb-16 md:mb-20 bg-gradient-to-br from-gray-900/80 to-purple-900/40 backdrop-blur-xl border border-purple-500/30 rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-16 shadow-2xl">
          <div className="flex items-start sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
              <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-purple-200 leading-tight">혼돈 속의 질서,<br className="sm:hidden" /> 큐레이션의 미학</h3>
          </div>
          <div className="space-y-4 sm:space-y-6 text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
            <p>
              정보의 홍수라는 말조차 진부해진 현대의 웹 환경에서, 사용자는 역설적으로 <span className="text-pink-400 font-semibold">'길을 잃는 경험'</span>을 반복하고 있습니다. 무한히 쏟아지는 웹사이트, 검증되지 않은 링크, 그리고 파편화된 정보들은 사용자에게 피로감을 안겨줍니다.
            </p>
            <p>
              <span className="text-purple-300 font-bold text-lg sm:text-xl">OpenLink (Juso Art)</span> 프로젝트는 이러한 디지털 혼돈 속에서 명확한 <span className="text-purple-400 font-semibold">'질서'</span>를 부여하고, 사용자에게 가장 직관적이고 심미적인 <span className="text-pink-400 font-semibold">'길잡이'</span>가 되고자 하는 원대한 비전에서 출발했습니다.
            </p>
            <p className="text-purple-200 font-medium border-l-4 border-purple-500 pl-4 sm:pl-6 py-2 bg-purple-900/30 rounded-r-xl text-sm sm:text-base">
              우리는 단순히 링크를 나열하는 아카이브를 넘어, 사용자의 취향과 목적에 부합하는 최상의 경로를 제안하는 디지털 나침반이자, 그 과정 자체를 시각적인 즐거움으로 승화시킨 아트 큐레이션 플랫폼입니다.
            </p>
          </div>
        </section>

        {/* 비전 섹션 */}
        <section className="mb-12 sm:mb-16 md:mb-20 bg-gradient-to-br from-pink-900/40 to-purple-900/40 backdrop-blur-xl border border-pink-500/30 rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-16 shadow-2xl">
          <div className="flex items-start sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
              <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-pink-200">프로젝트 비전</h3>
          </div>
          <div className="mb-6 sm:mb-8 text-center">
            <p className="text-2xl sm:text-3xl md:text-4xl font-black bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent leading-tight">
              "Visual Navigation,<br className="sm:hidden" /> Seamless Connection"
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 mt-2 sm:mt-3 font-light">보이는 탐험, 끊김 없는 연결</p>
          </div>
          <div className="space-y-6 sm:space-y-8 text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
            <div className="bg-black/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-pink-500/20">
              <h4 className="text-xl sm:text-2xl font-bold text-pink-300 mb-3 sm:mb-4">🎨 심미적 가치 추구</h4>
              <p>
                우리는 웹사이트 링크 하나하나를 단순한 주소가 아닌, 하나의 <span className="text-pink-400 font-semibold">'작품(Art)'</span>으로 대합니다. 다크 모드 베이스의 캔버스 위에 펼쳐지는 네온 컬러의 향연은 사용자에게 트렌디하고 감각적인 인상을 심어주며, 지루한 검색 과정을 매혹적인 탐험으로 뒤바꿉니다.
              </p>
            </div>
            <div className="bg-black/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-purple-500/20">
              <h4 className="text-xl sm:text-2xl font-bold text-purple-300 mb-3 sm:mb-4">⚡ 사용자 중심의 연결성</h4>
              <p>
                우리의 비전은 사용자가 원하는 목적지까지 도달하는 시간을 <span className="text-purple-400 font-semibold">'0'에 수렴</span>하게 만드는 것입니다. 불필요한 클릭을 제거하고, 직관적인 아이콘과 명확한 계층 구조를 통해 사용자는 고민할 필요 없이 본능적으로 원하는 콘텐츠로 이동할 수 있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 세 가지 핵심 가치 */}
        <section className="mb-12 sm:mb-16 md:mb-20">
          <h3 className="text-3xl sm:text-4xl font-black text-center mb-10 sm:mb-12 md:mb-16 bg-gradient-to-r from-purple-300 via-pink-300 to-purple-400 bg-clip-text text-transparent px-4">
            세 가지 핵심 가치
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* 효율성 */}
            <div className="group bg-gradient-to-br from-purple-900/60 to-gray-900/60 backdrop-blur-xl border border-purple-500/40 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-purple-400/80 transition-all duration-500 hover:scale-105 shadow-xl hover:shadow-purple-500/50">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:rotate-12 transition-transform duration-500 shadow-lg shadow-purple-500/50">
                <Zap className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-purple-200 mb-3 sm:mb-4">효율성의 극대화</h4>
              <p className="text-gray-300 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                현대인에게 시간은 가장 값비싼 자원입니다. OpenLink는 사용자가 인터넷이라는 광활한 바다에서 표류하지 않도록 돕는 등대입니다.
              </p>
              <ul className="space-y-2 text-gray-400 text-xs sm:text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1 flex-shrink-0">•</span>
                  <span>엄선된 Top 10 랭킹 시스템</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1 flex-shrink-0">•</span>
                  <span>금, 은, 동 메달 시각화</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1 flex-shrink-0">•</span>
                  <span>원스톱 통합 허브</span>
                </li>
              </ul>
            </div>

            {/* 시각적 몰입감 */}
            <div className="group bg-gradient-to-br from-pink-900/60 to-gray-900/60 backdrop-blur-xl border border-pink-500/40 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-pink-400/80 transition-all duration-500 hover:scale-105 shadow-xl hover:shadow-pink-500/50">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:rotate-12 transition-transform duration-500 shadow-lg shadow-pink-500/50">
                <Palette className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-pink-200 mb-3 sm:mb-4">시각적 몰입감 제공</h4>
              <p className="text-gray-300 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                우리는 '보기 좋은 떡이 먹기도 좋다'는 속담을 디지털 인터페이스에 완벽하게 구현했습니다.
              </p>
              <ul className="space-y-2 text-gray-400 text-xs sm:text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-pink-400 mt-1 flex-shrink-0">•</span>
                  <span>정사각형 그리드 시스템 (1:1)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-400 mt-1 flex-shrink-0">•</span>
                  <span>다크 모드 & 네온 팝 디자인</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-400 mt-1 flex-shrink-0">•</span>
                  <span>사이버펑크 브랜드 아이덴티티</span>
                </li>
              </ul>
            </div>

            {/* 접근성과 확장성 */}
            <div className="group bg-gradient-to-br from-purple-900/60 via-pink-900/40 to-gray-900/60 backdrop-blur-xl border border-purple-500/40 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-purple-400/80 transition-all duration-500 hover:scale-105 shadow-xl hover:shadow-purple-500/50">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:rotate-12 transition-transform duration-500 shadow-lg shadow-purple-500/50">
                <Globe className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-purple-200 mb-3 sm:mb-4">접근성과 확장성</h4>
              <p className="text-gray-300 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                OpenLink는 디바이스의 경계를 허무는 유연함을 지향합니다.
              </p>
              <ul className="space-y-2 text-gray-400 text-xs sm:text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1 flex-shrink-0">•</span>
                  <span>완벽한 반응형 디자인</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1 flex-shrink-0">•</span>
                  <span>모바일 퀵 메뉴 최적화</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1 flex-shrink-0">•</span>
                  <span>유기적인 레이아웃 시스템</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 사용자 여정 섹션 */}
        <section className="mb-12 sm:mb-16 md:mb-20 bg-gradient-to-br from-gray-900/80 to-purple-900/40 backdrop-blur-xl border border-purple-500/30 rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-16 shadow-2xl">
          <h3 className="text-3xl sm:text-4xl font-black text-center mb-8 sm:mb-10 md:mb-12 bg-gradient-to-r from-purple-300 via-pink-300 to-purple-400 bg-clip-text text-transparent px-4">
            사용자 여정의 재해석
          </h3>
          
          <div className="space-y-8 sm:space-y-10">
            <div className="border-l-4 border-purple-500 pl-4 sm:pl-6 md:pl-8 py-3 sm:py-4">
              <h4 className="text-xl sm:text-2xl font-bold text-purple-200 mb-3 sm:mb-4">🏠 홈(Home): 정보의 관문</h4>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                OpenLink의 대문은 단순한 진입로가 아닙니다. 그것은 <span className="text-purple-400 font-semibold">정보의 파노라마</span>입니다. 사용자가 접속하는 순간, 시선을 사로잡는 대형 배너들은 현재 가장 핫한 트렌드와 프로모션을 알립니다. 스크롤을 내리면 마주하게 되는 'Top 10 랭킹' 섹션은 정보의 위계를 명확히 보여주며, "더보기" 버튼은 더 깊은 정보의 세계로 사용자를 초대하는 정중한 안내장과 같습니다.
              </p>
            </div>

            <div className="border-l-4 border-pink-500 pl-4 sm:pl-6 md:pl-8 py-3 sm:py-4">
              <h4 className="text-xl sm:text-2xl font-bold text-pink-200 mb-3 sm:mb-4">🗂️ 카테고리 탐색: 끊김 없는 흐름</h4>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                특정 관심사를 클릭하여 들어간 상세 페이지는 <span className="text-pink-400 font-semibold">몰입의 공간</span>입니다. 상단에 고정된 '카테고리 네비게이션 바'는 마치 책의 목차(Index)처럼 기능하여, 사용자가 언제든 다른 관심사로 즉시 점프할 수 있게 해줍니다. 이미지와 텍스트, 그리고 순위 뱃지가 조화를 이룬 하나의 '카드(Card)' 형태로 제공되며, 사용자는 마치 갤러리에서 작품을 감상하듯 스크롤을 내립니다.
              </p>
            </div>
          </div>
        </section>

        {/* 결론 섹션 */}
        <section className="bg-gradient-to-br from-purple-900/80 via-pink-900/60 to-purple-900/80 backdrop-blur-xl border-2 border-purple-500/50 rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-20 text-center shadow-2xl shadow-purple-500/30">
          <div className="inline-block mb-6 sm:mb-8">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto shadow-2xl shadow-purple-500/50 animate-pulse">
              <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
          </div>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 sm:mb-8 bg-gradient-to-r from-purple-200 via-pink-200 to-purple-300 bg-clip-text text-transparent px-4">
            궁극의 디지털 포털을<br className="sm:hidden" /> 향하여
          </h3>
          <div className="space-y-4 sm:space-y-6 text-gray-300 text-base sm:text-lg leading-relaxed max-w-4xl mx-auto">
            <p>
              <span className="text-purple-300 font-bold text-lg sm:text-xl">OpenLink</span> 프로젝트는 단순함 속에 가장 강력한 힘이 있다는 믿음으로 만들어졌습니다. 우리는 복잡한 검색 로직이나 불필요한 정보의 나열을 거부합니다.
            </p>
            <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              "정제된 정보" · "아름다운 비주얼" · "직관적인 연결"
            </p>
            <p>
              이곳은 정보를 찾는 시작점이자, 취향을 발견하는 공간이며, 웹 서핑이라는 행위 자체가 휴식이 되는 <span className="text-pink-400 font-semibold">디지털 라운지</span>입니다.
            </p>
            <p className="text-2xl sm:text-3xl font-black text-purple-200 pt-6 sm:pt-8">
              OpenLink. <br />
              <span className="bg-gradient-to-r from-pink-300 via-purple-300 to-pink-400 bg-clip-text text-transparent">
                당신의 탐험이 예술이 되는 곳.
              </span>
            </p>
          </div>
        </section>
      </main>

      {/* 푸터 */}
      <footer className="relative border-t border-purple-500/30 bg-black/60 backdrop-blur-xl mt-20 sm:mt-24 md:mt-32 py-8 sm:py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-gray-400 text-xs sm:text-sm">
            © 2025 OpenLink. All rights reserved.
          </p>
          <p className="text-gray-500 text-[10px] sm:text-xs mt-2">
            Visual Navigation, Seamless Connection
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
